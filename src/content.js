(function () {
  'use strict';
  window.MB_DATA = {
    contacts: [
      {
        name: 'South African mobile emergency',
        number: '112',
        tel: '112',
        description: 'Call from a mobile phone in South Africa (MTN, Vodacom, Cell C and Telkom). If you can, say where you are and what is happening.',
        type: 'emergency',
        source: 'https://www.westerncape.gov.za/know-who-you-can-call-emergency',
        sourceLabel: 'Western Cape Government emergency numbers'
      },
      {
        name: 'SADAG Suicide Crisis Helpline',
        number: '0800 567 567',
        tel: '+27800567567',
        description: 'SADAG lists this as its 24-hour toll-free Suicide Crisis Helpline.',
        type: 'crisis',
        source: 'https://www.sadag.org/',
        sourceLabel: 'South African Depression and Anxiety Group'
      },
      {
        name: 'LifeLine National Counselling Line',
        number: '0861 322 322',
        tel: '+27861322322',
        description: 'LifeLine South Africa’s National Counselling Line. The South African Government lists the National Crisis Line as a 24-hour counselling service.',
        type: 'crisis',
        source: 'https://lifelinesa.co.za/',
        sourceLabel: 'LifeLine South Africa'
      }
    ],
    contactReferences: [
      { label: 'SADAG helplines', url: 'https://www.sadag.org/' },
      { label: 'LifeLine South Africa', url: 'https://lifelinesa.co.za/' },
      { label: 'South African Government help lines', url: 'https://www.gov.za/about-government/government-call-centres-and-help-lines' },
      { label: 'Western Cape Government emergency numbers', url: 'https://www.westerncape.gov.za/know-who-you-can-call-emergency' }
    ],
    moods: [
      { value: 1, label: 'Low', emoji: '😔' },
      { value: 2, label: 'A little low', emoji: '😕' },
      { value: 3, label: 'Okay', emoji: '😐' },
      { value: 4, label: 'Good', emoji: '🙂' },
      { value: 5, label: 'Great', emoji: '😊' }
    ],
    questions: [
      { id: 'mood', text: 'Over the past two weeks, how often have you felt down, low, or without much hope?', help: 'This is a brief wellbeing check-in, not a diagnosis.' },
      { id: 'worry', text: 'How often has worry or feeling on edge made it hard to settle?', help: 'Think about the last two weeks.' },
      { id: 'stress', text: 'How often has stress felt difficult to manage?', help: 'There is no right or wrong answer.' },
      { id: 'sleep', text: 'How often have sleep or energy changes affected your day?', help: 'Choose the closest fit.' },
      { id: 'safety', text: 'Have thoughts of hurting yourself or not wanting to be here been part of what you are facing?', help: 'If you may be in immediate danger or cannot stay safe, skip this check and call for real-time help now.' }
    ],
    answers: [
      { label: 'Not at all', score: 0 },
      { label: 'A few days', score: 1 },
      { label: 'More than a week', score: 2 },
      { label: 'Nearly every day', score: 3 }
    ],
    resources: [
      {
        id: 'breathing', category: 'Calm', title: 'A one-minute breathing pause', read: '2 min', emoji: '🌬️', color: 'violet',
        intro: 'A small grounding pause may help create a little space when things feel fast.',
        steps: ['Set both feet somewhere comfortable, if that feels okay.', 'Breathe in gently through your nose for a count that feels natural.', 'Let your breath out slowly. You do not need to force a deep breath.', 'Notice one thing you can see, one thing you can hear, and one thing your body is touching.', 'Repeat for a minute, or stop whenever you want. This is a coping exercise, not treatment.']
      },
      {
        id: 'sleep', category: 'Rest', title: 'Sleep and mood: one gentle reset', read: '3 min', emoji: '🌙', color: 'teal',
        intro: 'Sleep can affect how we feel, and feeling overwhelmed can make rest harder. A tiny repeatable routine is a good place to start.',
        steps: ['Choose one wind-down cue, such as dimming a light or putting a device aside.', 'Try to keep a roughly consistent time to wake up when your schedule allows.', 'If sleep is not coming, do something quiet and low-pressure for a little while.', 'Be kind to yourself: one difficult night does not mean you have failed.', 'If sleep problems persist or affect your wellbeing, consider talking with a health professional.']
      },
      {
        id: 'ask', category: 'Connection', title: 'How to ask someone for help', read: '2 min', emoji: '🤝', color: 'gold',
        intro: 'You do not need to explain everything to begin. A small, specific ask can make a first conversation easier.',
        steps: ['Think of one person who has treated you with care.', 'Pick a way to reach them that feels comfortable: in person, a call, or a short message.', 'Try: “I have been finding things hard lately. Could you listen for a few minutes?”', 'You can say what you do not need right now, for example: “I am not looking for advice yet.”', 'If the first person cannot help, that does not mean you do not deserve support. Try a trusted adult, counsellor, or a helpline.']
      },
      {
        id: 'stress', category: 'Stress', title: 'Break a stressful task into one next step', read: '2 min', emoji: '🪴', color: 'violet',
        intro: 'When a task feels too large, making the next step smaller can make it easier to begin.',
        steps: ['Name the task without judging yourself.', 'Write down the smallest action that would move it forward.', 'Set a short timer if that helps, and pause when it ends.', 'If you feel stuck, ask someone to sit with you or help you choose the first step.', 'Rest is allowed. Your worth is not measured by a checklist.']
      },
      {
        id: 'feelings', category: 'Understanding', title: 'Putting a name to a feeling', read: '2 min', emoji: '🧭', color: 'teal',
        intro: 'Noticing a feeling is information, not a label for who you are.',
        steps: ['Pause and ask: “What am I noticing right now?”', 'Choose a word that feels close, or use your own words.', 'Notice where the feeling shows up in your body without trying to change it.', 'Ask yourself what might help in the next ten minutes.', 'If a feeling is intense or keeps returning, sharing it with a trusted person or professional can help.']
      },
      {
        id: 'support', category: 'Professional care', title: 'What to expect when talking to a counsellor', read: '3 min', emoji: '💬', color: 'gold',
        intro: 'Seeking support is a personal choice. A first meeting can be a chance to ask questions and see what feels comfortable.',
        steps: ['You can ask about the counsellor’s qualifications, approach, confidentiality and fees.', 'You can bring notes or start with “I am not sure where to begin.”', 'You can ask them to explain a question or slow down.', 'If the fit does not feel right, it is okay to ask about other options.', 'The profiles shown here are fictional samples and cannot arrange real care.']
      }
    ],
    verses: [
      { id: 'psalm34', feeling: 'loneliness', reference: 'Psalm 34:18 (KJV)', text: 'The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.' },
      { id: 'matthew11', feeling: 'anxiety', reference: 'Matthew 11:28 (KJV)', text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.' },
      { id: 'romans15', feeling: 'hope', reference: 'Romans 15:13 (KJV)', text: 'Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.' },
      { id: 'isaiah41', feeling: 'strength', reference: 'Isaiah 41:10 (KJV)', text: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.' },
      { id: 'philippians4', feeling: 'anxiety', reference: 'Philippians 4:6–7 (KJV)', text: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.' },
      { id: 'psalm46', feeling: 'strength', reference: 'Psalm 46:1 (KJV)', text: 'God is our refuge and strength, a very present help in trouble.' },
      { id: 'jeremiah29', feeling: 'hope', reference: 'Jeremiah 29:11 (KJV)', text: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.' },
      { id: 'psalm147', feeling: 'loneliness', reference: 'Psalm 147:3 (KJV)', text: 'He healeth the broken in heart, and bindeth up their wounds.' }
    ],
    readingPlan: [
      { day: 1, title: 'A place to rest', reference: 'Matthew 11:28–30', verseId: 'matthew11' },
      { day: 2, title: 'Near in hard moments', reference: 'Psalm 34:17–18', verseId: 'psalm34' },
      { day: 3, title: 'A steady presence', reference: 'Isaiah 41:10', verseId: 'isaiah41' },
      { day: 4, title: 'Peace and prayer', reference: 'Philippians 4:6–7', verseId: 'philippians4' },
      { day: 5, title: 'Hope for tomorrow', reference: 'Romans 15:13', verseId: 'romans15' },
      { day: 6, title: 'Help in trouble', reference: 'Psalm 46:1–3', verseId: 'psalm46' },
      { day: 7, title: 'Tender care', reference: 'Psalm 147:3', verseId: 'psalm147' }
    ],
    providers: [
      { id: 'p1', initials: 'AD', name: 'Amani Ndlovu', role: 'Sample counsellor', specialties: ['Anxiety', 'Life changes', 'Young people'], mode: 'Video or in-person · Johannesburg', about: 'A fictional sample profile showing how a support conversation could begin.', slots: ['Today · 16:00', 'Tomorrow · 10:30', 'Friday · 14:00'] },
      { id: 'p2', initials: 'NS', name: 'Nandi Sample', role: 'Sample psychologist', specialties: ['Mood', 'Stress', 'Study pressure'], mode: 'Video session', about: 'A fictional profile; qualifications and availability are not verified.', slots: ['Tomorrow · 12:00', 'Thursday · 09:30', 'Friday · 11:00'] },
      { id: 'p3', initials: 'TS', name: 'Thabo Sample', role: 'Sample social worker', specialties: ['Family support', 'Relationships', 'Referrals'], mode: 'In-person · Johannesburg', about: 'A fictional sample profile illustrating referral and consent steps only.', slots: ['Wednesday · 13:00', 'Thursday · 15:30', 'Friday · 09:00'] }
    ],
    demoReferrals: [
      { id: 'MB-2041', concern: 'Anxiety and stress', risk: 'Moderate', status: 'Awaiting review', consented: true },
      { id: 'MB-1987', concern: 'Mood support', risk: 'Low', status: 'Appointment offered', consented: true },
      { id: 'MB-2116', concern: 'Urgent support requested', risk: 'High', status: 'Priority follow-up', consented: true }
    ],
    officialSources: [
      { name: 'South African Depression and Anxiety Group (SADAG)', url: 'https://www.sadag.org/' },
      { name: 'LifeLine South Africa', url: 'https://lifelinesa.co.za/' },
      { name: 'South African Government — Government call centres and help lines', url: 'https://www.gov.za/about-government/government-call-centres-and-help-lines' },
      { name: 'Western Cape Government — emergency numbers', url: 'https://www.westerncape.gov.za/know-who-you-can-call-emergency' }
    ],
    crisisPatterns: [
      /\b(?:suicid(?:e|al))\b/i,
      /\bkill\s+myself\b/i,
      /\b(?:end|take)\s+my\s+life\b/i,
      /\b(?:want|wish)\s+to\s+die\b/i,
      /\bself[ -]?harm\b/i,
      /\bhurt\s+myself\b/i,
      /\bnot\s+safe\s+(?:with|by)\s+myself\b/i,
      /\bcan't\s+keep\s+myself\s+safe\b/i,
      /\bcannot\s+keep\s+myself\s+safe\b/i
    ]
  };
})();
