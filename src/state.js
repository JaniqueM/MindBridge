(function () {
  'use strict';
  var STORAGE_KEY = 'mindbridge-demo-v1';
  var memoryState = null;
  function freshState() {
    return {
      profile: null,
      theme: 'light',
      moods: [],
      journal: [],
      planDone: {},
      faithNotes: '',
      bookings: [],
      referralPreviews: [],
      referralStatus: {},
      publishedResources: [],
      approvedProviders: []
    };
  }
  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function load() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) { memoryState = freshState(); return clone(memoryState); }
      var parsed = JSON.parse(raw);
      memoryState = Object.assign(freshState(), parsed && typeof parsed === 'object' ? parsed : {});
      return clone(memoryState);
    } catch (error) {
      memoryState = memoryState || freshState();
      return clone(memoryState);
    }
  }
  function save(nextState) {
    memoryState = Object.assign(freshState(), nextState || {});
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryState)); } catch (error) { /* Keep this session usable when storage is unavailable. */ }
    return clone(memoryState);
  }
  function update(patch) {
    var next = Object.assign({}, load(), patch || {});
    return save(next);
  }
  function reset() {
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (error) { /* The in-memory reset still succeeds. */ }
    memoryState = freshState();
    return clone(memoryState);
  }
  function hasLocalStorage() {
    try { var key = STORAGE_KEY + '-probe'; window.localStorage.setItem(key, '1'); window.localStorage.removeItem(key); return true; }
    catch (error) { return false; }
  }
  window.MB_STORE = { load: load, save: save, update: update, reset: reset, hasLocalStorage: hasLocalStorage, key: STORAGE_KEY };
})();
