(function () {
  'use strict';
  const D = window.MB_DATA;
  const S = window.MB_STORE;
  const V = window.MB_VIEWS;
  const root = document.getElementById('app');
  let authMode = 'login';
  let selectedMood = null;
  let assessmentStarted = false;
  let questionIndex = 0;
  let assessmentAnswers = [];
  let assessmentResult = null;
  let verseFilter = 'all';
  let crisisActive = false;
  let chatMessages = [{ who:'assistant', text:'Hi. I’m the MindBridge support guide. You can share a little or just browse. I’m not a real AI, counsellor, or emergency service.' }];
  let toastTimer = null;

  const esc = V.esc;
  function applyTheme() {
    const theme = S.load().theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#17162f' : '#322b50';
  }
  function routeNow() {
    const raw = window.location.hash.replace(/^#\/?/, '').split('?')[0];
    const parts = raw.split('/').filter(Boolean);
    if (!parts.length) return { page:'landing' };
    return { page:parts[0], id:parts[1] || '' };
  }
  function go(to) {
    const route = String(to||'').replace(/^#?\/?/, '');
    const next = '#/' + route;
    if (window.location.hash === next) render(); else window.location.hash = next;
  }
  function showToast(message) {
    const old = document.querySelector('.toast');
    if (old) old.remove();
    const toast = document.createElement('div');
    toast.className = 'toast'; toast.setAttribute('role','status'); toast.textContent = message;
    document.body.appendChild(toast);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=>toast.remove(),3300);
  }
  function render() {
    applyTheme();
    const route = routeNow();
    const profile = S.load().profile;
    if (!['landing','auth','account-recovery','help','privacy','crisis'].includes(route.page) && (!profile || profile.ageConfirmedByUser !== true)) {
      authMode = 'login';
      go('auth');
      return;
    }
    if (route.page === 'landing') root.innerHTML = V.landing();
    else if (route.page === 'auth') {
      const view = V.auth(authMode);
      const ageGate = '<label class="check-row"><input type="checkbox" name="age-confirmed" required><span>I confirm that I am 13 or older. This site cannot verify age.</span></label>';
      root.innerHTML = authMode === 'signup' ? view : view.replace('<button class="btn btn-primary btn-full" type="submit">', `${ageGate}<button class="btn btn-primary btn-full" type="submit">`);
    }
    else {
      const content = V.renderPage(route, { chatMessages, crisisActive, assessmentStarted, questionIndex, answers:assessmentAnswers, assessmentResult, selectedMood, verseFilter });
      root.innerHTML = V.shell(route,content,profile);
    }
    root.setAttribute('aria-busy','false');
    const scroller = document.querySelector('.chat-messages');
    if (scroller) scroller.scrollTop = scroller.scrollHeight;
    const head = root.querySelector('h1[tabindex="-1"]');
    if (head && route.page !== 'landing' && route.page !== 'auth') head.focus({preventScroll:true});
  }
  function showFormError(id, message) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
  }
  function closeModal() { const modal = document.querySelector('.modal-backdrop'); if (modal) modal.remove(); }
  function modal(title, body, footer='') {
    const markup = `<div class="modal-backdrop" data-modal-backdrop><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="split"><h2 id="modal-title">${esc(title)}</h2><button class="icon-btn" type="button" data-action="modal-close" aria-label="Close">${V.icon('close',18)}</button></div><div>${body}</div>${footer?`<div class="row" style="justify-content:flex-end;margin-top:18px">${footer}</div>`:''}</section></div>`;
    document.body.insertAdjacentHTML('beforeend',markup);
    const focus = document.querySelector('.modal input, .modal button'); if (focus) focus.focus();
  }
  function openAnonymousModal() {
    modal('Continue anonymously',`<p class="muted">You can explore without creating an online account. MindBridge is for people 13 and older; age is not verified and your information is not sent to a server.</p><label class="check-row"><input id="anon-age" type="checkbox"><span>I confirm that I am 13 or older.</span></label><p class="small muted" style="margin-top:12px">A nickname can be changed later. Please do not enter identifying information.</p>`,`<button type="button" class="btn btn-outline" data-action="modal-close">Not now</button><button type="button" class="btn btn-primary" data-action="anonymous-confirm">Continue</button>`);
  }
  function openClearModal() {
    modal('Clear saved information?',`<p>This clears the nickname, mood and journal entries, reading progress, appointment requests, consented referral previews, and sample actions stored in this browser.</p><div class="callout callout-warn"><span class="callout-icon">${V.icon('info')}</span><div><strong>This cannot be undone.</strong><p>No server copy exists.</p></div></div>`,`<button type="button" class="btn btn-outline" data-action="modal-close">Keep data</button><button type="button" class="btn btn-danger" data-action="clear-confirm">Clear data</button>`);
  }
  function openTrustedModal() {
    modal('Trusted-contact note',`<form id="trusted-form" class="form-stack"><div class="callout callout-warn"><span class="callout-icon">${V.icon('info')}</span><div><strong>This will not send anything.</strong><p>No SMS, WhatsApp message, location, or contact details leave this browser. For real-time support, contact emergency/crisis services directly.</p></div></div><div class="field"><label for="trusted-name">Optional nickname for this simulation</label><input id="trusted-name" name="name" maxlength="24" placeholder="A fictional name" /></div></form>`,`<button type="button" class="btn btn-outline" data-action="modal-close">Cancel</button><button type="button" class="btn btn-teal" data-action="trusted-confirm">Show example confirmation</button>`);
  }
  function openReferralModal() {
    modal('Referral consent preview',`<p>In a real service, you should know exactly what is shared and with whom before a referral is sent.</p><label class="check-row"><input id="referral-consent" type="checkbox"><span>I consent to show a minimal anonymous referral preview (no name, email, chat, or journal text) in the professional sample view.</span></label><p class="small muted" style="margin-top:12px">When checked, a fictional minimal preview is stored in this browser and shown only in the sample professional view. No user content is sent.</p>`,`<button type="button" class="btn btn-outline" data-action="modal-close">Cancel</button><button type="button" class="btn btn-primary" data-action="referral-confirm">Continue</button>`);
  }
  function updateProfile(profile) {
    const state = S.load();
    S.update({ profile:Object.assign({},state.profile||{},profile) });
  }
  function createDemoReferral() {
    const state = S.load();
    const referral = {
      id:'MB-'+Date.now().toString(36).toUpperCase(),
      concern:'General wellbeing support requested',
      risk:'Not assessed',
      status:'Preview created',
      consented:true
    };
    S.update({ referralPreviews:[...(state.referralPreviews||[]),referral] });
    return referral;
  }
  function recordMood(value, note) {
    const state = S.load();
    const now = new Date().toISOString();
    const entry = { id:'m-'+Date.now(), value:Number(value), note:String(note||'').slice(0,160), date:now };
    S.update({ moods:[...(state.moods||[]),entry] });
  }
  function sendChat(message) {
    const text = String(message||'').trim();
    if (!text) return;
    const now = new Date().toLocaleTimeString('en-ZA',{hour:'2-digit',minute:'2-digit'});
    chatMessages.push({ who:'user', text:text.slice(0,600), time:now });
    const crisis = D.crisisPatterns.some(pattern=>pattern.test(text));
    let reply;
    if (crisis) {
      crisisActive = true;
      reply = 'I’m glad you told me. You deserve real-time support from a person who can respond. I cannot monitor you or send for help. If you may be in immediate danger, call 112 from a mobile phone now, or contact SADAG 0800 567 567 or LifeLine 0861 322 322. Please consider asking someone you trust to stay with you while you reach out.';
    } else {
      const lower = text.toLowerCase();
      if (/\b(anxious|anxiety|worry|worried|panic|nervous)\b/.test(lower)) reply = 'That sounds like a lot to carry. If it feels okay, take one slow breath and notice what is happening around you. Would a short grounding exercise or talking with a professional feel useful?';
      else if (/\b(sad|sadness|lonely|loneliness|low|empty|hopeless)\b/.test(lower)) reply = 'Thank you for putting that into words. You do not have to solve it all right now. Is there one person you trust who could listen? You can also explore support options here.';
      else if (/\b(stress|stressed|overwhelm|overwhelmed|pressure|exam)\b/.test(lower)) reply = 'It makes sense that pressure can feel heavy. A small next step may be easier than the whole problem. Try one short pause, or choose someone to ask for support.';
      else reply = 'Thanks for sharing that with me. These scripted responses can offer a small reflection, but they cannot replace a person who knows you. What feels like one kind next step—rest, writing a note, or talking with someone you trust?';
    }
    chatMessages.push({ who:'assistant', text:reply, time:now });
    render();
    if (crisis) showToast('Safety-related wording detected. Emergency Support is available now.');
  }
  function submitAuth(form) {
    const data = new FormData(form);
    const email = String(data.get('email')||'').trim();
    const password = String(data.get('password')||'');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showFormError('auth-error','Enter a valid email format. It will not be sent or stored.');
    if (password.length < 6) return showFormError('auth-error','Use at least 6 characters. This site does not store passwords; do not reuse a real password.');
    if (!data.get('age-confirmed')) return showFormError('auth-error','Please confirm that you are 13 or older to continue.');
    const savedProfile = S.load().profile;
    const role = authMode==='signup' ? String(data.get('role')||'young') : (savedProfile&&savedProfile.role || 'young');
    const nickname = authMode==='signup' ? String(data.get('nickname')||'').trim() : String(savedProfile&&savedProfile.nickname || 'Friend').slice(0,24);
    if (authMode==='signup' && nickname.length<2) return showFormError('auth-error','Choose a nickname with at least two characters.');
    updateProfile({ nickname:nickname||'Friend',role:role,anonymous:false,ageConfirmed:true,ageConfirmedByUser:true });
    go(role==='professional'?'professional':role==='administrator'?'admin':'home');
    showToast(authMode==='signup'?'Your MindBridge profile is ready in this browser.':'Your MindBridge profile is ready in this browser.');
  }
  function screeningResult() {
    const score = assessmentAnswers.reduce((sum,a)=>sum+Number(a.score),0);
    const safety = Number(assessmentAnswers[4]&&assessmentAnswers[4].score||0)>0;
    const band = safety || score>=10 ? 'High' : score>=5 ? 'Moderate' : 'Low';
    const data = band==='High'
      ? {score,band,title:'A real person can support you now',message:'Your answers suggest it may be helpful to reach out for support as soon as possible. This is a screening-style result, not a diagnosis.',next:'If you may be in immediate danger or cannot keep yourself safe, call 112 from a mobile phone. You can also call SADAG or LifeLine.'}
      : band==='Moderate'
      ? {score,band,title:'Consider adding a human support step',message:'Some answers suggest you might benefit from talking with someone you trust or a qualified professional.',next:'This summary is not a clinical assessment. You can explore the sample professional profiles or read a coping resource.'}
      : {score,band,title:'You have made time to check in',message:'Your answers do not point to a high score in this brief check-in, but they cannot rule out a concern or replace professional care.',next:'Explore a small wellbeing resource, keep checking in with yourself, or talk with someone you trust.'};
    return data;
  }
  function onClick(event) {
    const actionEl = event.target.closest('[data-action]');
    if (!actionEl) return;
    const action = actionEl.dataset.action;
    if (action==='theme') { const state=S.load(); S.update({theme:state.theme==='dark'?'light':'dark'}); render(); }
    else if (action==='set-theme') { S.update({theme:actionEl.dataset.theme}); render(); showToast('Theme updated.'); }
    else if (action==='auth-mode') { authMode=actionEl.dataset.mode; render(); }
    else if (action==='signup-open') { authMode='signup'; go('auth'); }
    else if (action==='anonymous-open') openAnonymousModal();
    else if (action==='anonymous-confirm') { const check=document.getElementById('anon-age'); if(!check||!check.checked){showToast('Please confirm that you are 13 or older.');return;} S.update({profile:{nickname:'Friend',role:'young',anonymous:true,ageConfirmed:true,ageConfirmedByUser:true}}); closeModal(); go('home'); showToast('You are exploring MindBridge anonymously.'); }
    else if (action==='modal-close') closeModal();
    else if (action==='clear-open') openClearModal();
    else if (action==='clear-confirm') { S.reset(); selectedMood=null; assessmentStarted=false; questionIndex=0; assessmentAnswers=[]; assessmentResult=null; verseFilter='all'; crisisActive=false; chatMessages=[{who:'assistant',text:'Hi. I’m the MindBridge support guide. You can share a little or just browse. I’m not a real AI, counsellor, or emergency service.'}]; closeModal(); go(''); showToast('Saved information was cleared from this browser.'); }
    else if (action==='logout') { S.update({profile:null}); go(''); showToast('You are logged out.'); }
    else if (action==='chat-suggest') sendChat(actionEl.dataset.text);
    else if (action==='assessment-start') { assessmentStarted=true; questionIndex=0; assessmentAnswers=[]; assessmentResult=null; render(); }
    else if (action==='assessment-answer') { assessmentAnswers[questionIndex]={score:Number(actionEl.dataset.score),label:actionEl.dataset.label}; if(questionIndex<D.questions.length-1){questionIndex++;render();}else{assessmentResult=screeningResult();assessmentStarted=false;go('assessment-results');} }
    else if (action==='assessment-back') { if(questionIndex>0){questionIndex--;render();} }
    else if (action==='assessment-reset') { assessmentStarted=false; questionIndex=0; assessmentAnswers=[]; assessmentResult=null; go('assessment'); }
    else if (action==='select-mood') { selectedMood=Number(actionEl.dataset.value); render(); }
    else if (action==='verse-filter') { verseFilter=actionEl.dataset.filter||'all'; render(); }
    else if (action==='trusted-open') openTrustedModal();
    else if (action==='trusted-confirm') { const name=String(document.getElementById('trusted-name')?.value||'someone you trust').trim()||'someone you trust'; closeModal(); showToast(`No message was sent to ${name}.`); }
    else if (action==='referral-open') openReferralModal();
    else if (action==='referral-confirm') { const check=document.getElementById('referral-consent'); if(!check||!check.checked){showToast('Please choose whether to continue. Nothing is shared without consent.');return;} createDemoReferral(); closeModal(); render(); showToast('Consent recorded. A minimal anonymous preview is now available in the professional sample view; nothing was sent.'); }
    else if (action==='accept-referral') { const state=S.load(); const statuses=Object.assign({},state.referralStatus||{}); statuses[actionEl.dataset.id]='Accepted for review'; S.update({referralStatus:statuses}); render(); showToast('Referral status updated in this local preview.'); }
    else if (action==='publish-resource') { const state=S.load(); S.update({publishedResources:[...new Set([...(state.publishedResources||[]),actionEl.dataset.id])]}); render(); showToast('Resource publication simulated.'); }
    else if (action==='approve-provider') { const state=S.load(); S.update({approvedProviders:[...new Set([...(state.approvedProviders||[]),actionEl.dataset.id])]}); render(); showToast('Profile approval simulated; credentials are not verified.'); }
    else if (action==='crisis-route') go('crisis');
  }
  function onSubmit(event) {
    const form=event.target;
    if (!form.matches('form')) return;
    if (form.id==='auth-form') { event.preventDefault(); if(!form.reportValidity())return; submitAuth(form); }
    else if (form.id==='chat-form') { event.preventDefault(); const input=form.elements.message; const text=input.value; input.value=''; sendChat(text); document.getElementById('chat-input')?.focus(); }
    else if (form.id==='mood-form') { event.preventDefault(); if(!selectedMood){showToast('Choose a mood first.');return;} const note=String(new FormData(form).get('note')||''); recordMood(selectedMood,note); selectedMood=null; render(); showToast('Mood check-in saved in this browser.'); }
    else if (form.id==='journal-form') { event.preventDefault(); if(!form.reportValidity())return; const data=new FormData(form); const text=String(data.get('text')||'').trim(); if(!text){showToast('Add a few words before saving.');return;} const state=S.load(); const entry={id:'j-'+Date.now(),title:String(data.get('title')||'').trim(),text:text.slice(0,1200),createdAt:new Date().toISOString()}; S.update({journal:[...(state.journal||[]),entry]}); render(); showToast('Journal note saved in this browser.'); }
    else if (form.id==='booking-form') { event.preventDefault(); if(!form.reportValidity())return; const data=new FormData(form); if(!data.get('consent')){showFormError('booking-error','Consent is needed before saving this referral preview.');return;} const slot=String(data.get('slot')||''); const state=S.load(); const booking={providerId:form.dataset.provider,slot:slot,createdAt:new Date().toISOString(),demo:true}; S.update({bookings:[...(state.bookings||[]).filter(b=>b.providerId!==booking.providerId),booking]}); createDemoReferral(); render(); showToast('Consent recorded; a minimal anonymous preview is available in the professional sample view. No real appointment was made and nothing was sent.'); }
    else if (form.id==='faith-notes-form') { event.preventDefault(); S.update({faithNotes:String(new FormData(form).get('')||document.getElementById('faith-notes').value).slice(0,1200)}); render(); showToast('Reflection saved in this browser.'); }
    else if (form.id==='recovery-form') { event.preventDefault(); if(!form.reportValidity())return; const box=document.getElementById('recovery-message'); box.textContent='No email was sent. This prototype has no account service.'; box.classList.add('show'); }
    else if (form.id==='profile-form') { event.preventDefault(); if(!form.reportValidity())return; const data=new FormData(form); updateProfile({nickname:String(data.get('nickname')||'Friend').trim().slice(0,24),role:String(data.get('role')||'young')}); const role=String(data.get('role')||'young'); go(role==='professional'?'professional':role==='administrator'?'admin':'home'); showToast('Profile updated in this browser.'); }
  }
  function onChange(event) {
    const el=event.target;
    if (el.matches('[data-action="plan-check"]')) { const state=S.load(); const plan=Object.assign({},state.planDone||{}); plan[el.dataset.day]=el.checked; S.update({planDone:plan}); render(); }
  }
  function onInput(event) {
    if (event.target.id==='resource-search') {
      const term=event.target.value.toLowerCase().trim();
      const cards=[...document.querySelectorAll('[data-resource-search]')]; let visible=0;
      cards.forEach(card=>{const yes=card.dataset.resourceSearch.includes(term);card.hidden=!yes;if(yes)visible++;});
      const empty=document.getElementById('resource-empty'); if(empty)empty.hidden=visible!==0;
    }
  }
  function onKeydown(event) {
    if(event.key==='Escape'&&document.querySelector('.modal-backdrop')) closeModal();
    if(event.key==='Enter'&&event.target.id==='chat-input'&&!event.shiftKey){event.preventDefault();const form=document.getElementById('chat-form');if(form)form.requestSubmit();}
  }
  document.addEventListener('click',onClick);
  document.addEventListener('submit',onSubmit);
  document.addEventListener('change',onChange);
  document.addEventListener('input',onInput);
  document.addEventListener('keydown',onKeydown);
  document.addEventListener('click',function(event){if(event.target.matches('[data-modal-backdrop]'))closeModal();});
  window.addEventListener('hashchange',render);
  if (!window.location.hash) window.history.replaceState(null,'',window.location.pathname+window.location.search+'#/');
  render();
})();
