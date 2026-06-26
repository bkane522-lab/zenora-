const ZENORA_STORAGE_KEY = "zenora_v1_state";

const sessions = [
  {
    id: "serenite-soir",
    title: {
      fr: "Sérénité du soir",
      en: "Evening Serenity",
      nl: "Avondsereniteit"
    },
    category: "meditation",
    duration: 15,
    audio: "sounds/serenite-soir.mp3",
    icon: "✦",
    description: {
      fr: "Une séance douce pour relâcher la pression et retrouver le calme.",
      en: "A gentle session to release pressure and return to calm.",
      nl: "Een zachte sessie om spanning los te laten en rust te vinden."
    }
  },
  {
    id: "calme-profond",
    title: {
      fr: "Calme profond",
      en: "Deep Calm",
      nl: "Diepe Rust"
    },
    category: "meditation",
    duration: 20,
    audio: "sounds/calme-profond.mp3",
    icon: "◎",
    description: {
      fr: "Une immersion sonore lente pour apaiser le corps et l’esprit.",
      en: "A slow sound immersion to soothe body and mind.",
      nl: "Een langzame geluidsbeleving om lichaam en geest te kalmeren."
    }
  },
  {
    id: "respiration-4-6",
    title: {
      fr: "Respiration 4-6",
      en: "Breathing 4-6",
      nl: "Ademhaling 4-6"
    },
    category: "breathing",
    duration: 8,
    audio: "sounds/respiration-4-6.mp3",
    icon: "≋",
    description: {
      fr: "Un rythme simple pour ralentir, respirer et se recentrer.",
      en: "A simple rhythm to slow down, breathe and refocus.",
      nl: "Een eenvoudig ritme om te vertragen, ademen en herfocussen."
    }
  },
  {
    id: "routine-soir",
    title: {
      fr: "Routine du soir",
      en: "Evening Routine",
      nl: "Avondroutine"
    },
    category: "sleep",
    duration: 25,
    audio: "sounds/routine-soir.mp3",
    icon: "☾",
    description: {
      fr: "Une routine calme pour préparer une nuit plus paisible.",
      en: "A calm routine to prepare for a more peaceful night.",
      nl: "Een rustige routine om je voor te bereiden op een vredige nacht."
    }
  },
  {
    id: "pluie-douce",
    title: {
      fr: "Pluie douce",
      en: "Soft Rain",
      nl: "Zachte Regen"
    },
    category: "sleep",
    duration: 30,
    audio: "sounds/pluie-douce.mp3",
    icon: "☔",
    description: {
      fr: "Une ambiance de pluie légère pour se détendre et s’endormir.",
      en: "A soft rain atmosphere to relax and fall asleep.",
      nl: "Een zachte regensfeer om te ontspannen en in slaap te vallen."
    }
  },
  {
    id: "ocean-profond",
    title: {
      fr: "Océan profond",
      en: "Deep Ocean",
      nl: "Diepe Oceaan"
    },
    category: "sleep",
    duration: 35,
    audio: "sounds/ocean-profond.mp3",
    icon: "≈",
    description: {
      fr: "Des vagues profondes pour une sensation d’espace et d’apaisement.",
      en: "Deep waves for a feeling of space and calm.",
      nl: "Diepe golven voor een gevoel van ruimte en kalmte."
    }
  },
  {
    id: "focus-doux",
    title: {
      fr: "Focus doux",
      en: "Soft Focus",
      nl: "Zachte Focus"
    },
    category: "focus",
    duration: 18,
    audio: "sounds/focus-doux.mp3",
    icon: "◌",
    description: {
      fr: "Un son discret pour rester concentré sans tension.",
      en: "A subtle sound to stay focused without tension.",
      nl: "Een subtiel geluid om gefocust te blijven zonder spanning."
    }
  },
  {
    id: "foret-nocturne",
    title: {
      fr: "Forêt nocturne",
      en: "Night Forest",
      nl: "Nachtbos"
    },
    category: "sounds",
    duration: 28,
    audio: "sounds/foret-nocturne.mp3",
    icon: "🌙",
    description: {
      fr: "Une ambiance naturelle, douce et enveloppante.",
      en: "A natural, soft and enveloping atmosphere.",
      nl: "Een natuurlijke, zachte en omhullende sfeer."
    }
  }
];

const translations = {
  fr: {
    welcomeTitle: "Bienvenue sur ZENORA",
    welcomeText: "Votre espace de calme et de bien-être. Respirez, détendez-vous, dormez mieux et recentrez-vous chaque jour.",
    breathe: "Respirer",
    breatheShort: "Apaiser l’esprit",
    sleep: "Sommeil",
    sleepShort: "Mieux dormir",
    meditate: "Méditer",
    meditateShort: "Se recentrer",
    start: "Commencer",
    chooseLanguage: "Choisir ma langue",
    hello: "Prends soin de toi.",
    eachBreath: "Chaque respiration compte.",
    recommended: "Recommandé pour vous",
    meditation: "Méditation",
    breathing: "Respiration",
    sounds: "Sons",
    todayProgram: "Programme du jour",
    sessionsForYou: "Sessions pour vous",
    seeAll: "Voir tout",
    explore: "Explorer",
    discoverCalm: "Découvrez votre moment de calme.",
    searchPlaceholder: "Rechercher une session, un son...",
    guidedBreathing: "Respiration guidée",
    takeBreak: "Prenez une pause, respirez, recentrez-vous.",
    secondsLeft: "secondes restantes",
    inhale: "Inspirer",
    hold: "Retenir",
    exhale: "Expirer",
    classic: "Classique",
    relaxing: "Relaxant",
    calming: "Apaisement",
    startSession: "Démarrer",
    stopSession: "Arrêter",
    sleepIntro: "Préparez-vous à une nuit paisible et réparatrice.",
    featuredSession: "Séance à la une",
    eveningRoutine: "Routine du soir",
    guidedRelaxation: "Relaxation guidée",
    sleepSounds: "Sons pour dormir",
    sleepQuality: "Qualité du sommeil",
    comingSoon: "Bientôt disponible",
    sleepTimer: "Minuteur sommeil",
    yourProgress: "Votre progression",
    progressIntro: "Vous progressez régulièrement. Continuez ainsi.",
    calmOfDay: "Calme du jour",
    reached: "Atteint",
    totalMinutes: "Minutes totales",
    streak: "Série",
    days: "jours",
    favorites: "Favoris",
    weekActivity: "Activité de la semaine",
    resetProgress: "Réinitialiser la progression",
    profileSettings: "Profil & Réglages",
    customizeExperience: "Personnalisez votre expérience.",
    language: "Langue",
    notifications: "Notifications",
    reminders: "Rappels",
    offlineDownloads: "Téléchargement hors ligne",
    premiumLater: "Premium plus tard",
    ownSounds: "Vos sons",
    ownSoundsText: "Ajoutez vos fichiers MP3 dans le dossier /sounds puis modifiez les chemins dans app.js.",
    showSoundPaths: "Voir les fichiers attendus",
    privacySecurity: "Confidentialité & sécurité",
    privacyText: "Cette V1 garde vos données localement sur votre appareil avec localStorage. Aucun compte, aucun serveur, aucune donnée vendue.",
    home: "Accueil",
    progress: "Progrès",
    volume: "Volume",
    offline: "Hors ligne",
    timer: "Minuteur",
    all: "Tout",
    focus: "Focus",
    fileMissing: "Son introuvable pour l’instant. Mode ambiance démo activé.",
    premiumSoon: "Fonction Premium prévue plus tard.",
    timerSoon: "Minuteur sommeil prévu dans une prochaine version.",
    notificationsSoon: "Les notifications seront activées après publication PWA.",
    progressReset: "Progression réinitialisée.",
    favoriteAdded: "Ajouté aux favoris.",
    favoriteRemoved: "Retiré des favoris.",
    expectedFiles: "Fichiers attendus dans /sounds :",
    noResult: "Aucun résultat trouvé.",
    stayPresent: "Reste présent"
  },
  en: {
    welcomeTitle: "Welcome to ZENORA",
    welcomeText: "Your calm and well-being space. Breathe, relax, sleep better and recenter every day.",
    breathe: "Breathe",
    breatheShort: "Calm the mind",
    sleep: "Sleep",
    sleepShort: "Sleep better",
    meditate: "Meditate",
    meditateShort: "Recenter",
    start: "Start",
    chooseLanguage: "Choose my language",
    hello: "Take care of yourself.",
    eachBreath: "Every breath matters.",
    recommended: "Recommended for you",
    meditation: "Meditation",
    breathing: "Breathing",
    sounds: "Sounds",
    todayProgram: "Today’s program",
    sessionsForYou: "Sessions for you",
    seeAll: "See all",
    explore: "Explore",
    discoverCalm: "Discover your calm moment.",
    searchPlaceholder: "Search a session, a sound...",
    guidedBreathing: "Guided breathing",
    takeBreak: "Take a break, breathe, recenter.",
    secondsLeft: "seconds left",
    inhale: "Inhale",
    hold: "Hold",
    exhale: "Exhale",
    classic: "Classic",
    relaxing: "Relaxing",
    calming: "Calming",
    startSession: "Start",
    stopSession: "Stop",
    sleepIntro: "Prepare for a peaceful and restorative night.",
    featuredSession: "Featured session",
    eveningRoutine: "Evening routine",
    guidedRelaxation: "Guided relaxation",
    sleepSounds: "Sleep sounds",
    sleepQuality: "Sleep quality",
    comingSoon: "Coming soon",
    sleepTimer: "Sleep timer",
    yourProgress: "Your progress",
    progressIntro: "You are progressing regularly. Keep going.",
    calmOfDay: "Calm of the day",
    reached: "Reached",
    totalMinutes: "Total minutes",
    streak: "Streak",
    days: "days",
    favorites: "Favorites",
    weekActivity: "Weekly activity",
    resetProgress: "Reset progress",
    profileSettings: "Profile & Settings",
    customizeExperience: "Customize your experience.",
    language: "Language",
    notifications: "Notifications",
    reminders: "Reminders",
    offlineDownloads: "Offline downloads",
    premiumLater: "Premium later",
    ownSounds: "Your sounds",
    ownSoundsText: "Add your MP3 files in the /sounds folder, then edit paths in app.js.",
    showSoundPaths: "Show expected files",
    privacySecurity: "Privacy & security",
    privacyText: "This V1 keeps your data locally on your device with localStorage. No account, no server, no data sold.",
    home: "Home",
    progress: "Progress",
    volume: "Volume",
    offline: "Offline",
    timer: "Timer",
    all: "All",
    focus: "Focus",
    fileMissing: "Sound not found yet. Demo ambience mode enabled.",
    premiumSoon: "Premium feature planned later.",
    timerSoon: "Sleep timer planned in a future version.",
    notificationsSoon: "Notifications will be activated after PWA publication.",
    progressReset: "Progress reset.",
    favoriteAdded: "Added to favorites.",
    favoriteRemoved: "Removed from favorites.",
    expectedFiles: "Expected files in /sounds:",
    noResult: "No result found.",
    stayPresent: "Stay present"
  },
  nl: {
    welcomeTitle: "Welkom bij ZENORA",
    welcomeText: "Jouw ruimte voor rust en welzijn. Adem, ontspan, slaap beter en kom elke dag terug bij jezelf.",
    breathe: "Ademen",
    breatheShort: "De geest kalmeren",
    sleep: "Slaap",
    sleepShort: "Beter slapen",
    meditate: "Mediteren",
    meditateShort: "Hercentreren",
    start: "Beginnen",
    chooseLanguage: "Mijn taal kiezen",
    hello: "Zorg goed voor jezelf.",
    eachBreath: "Elke ademhaling telt.",
    recommended: "Aanbevolen voor jou",
    meditation: "Meditatie",
    breathing: "Ademhaling",
    sounds: "Geluiden",
    todayProgram: "Programma van vandaag",
    sessionsForYou: "Sessies voor jou",
    seeAll: "Alles zien",
    explore: "Ontdekken",
    discoverCalm: "Ontdek jouw moment van rust.",
    searchPlaceholder: "Zoek een sessie, een geluid...",
    guidedBreathing: "Begeleide ademhaling",
    takeBreak: "Neem pauze, adem, hercenter.",
    secondsLeft: "seconden over",
    inhale: "Inademen",
    hold: "Vasthouden",
    exhale: "Uitademen",
    classic: "Klassiek",
    relaxing: "Ontspannend",
    calming: "Kalmerend",
    startSession: "Starten",
    stopSession: "Stoppen",
    sleepIntro: "Bereid je voor op een rustige en herstellende nacht.",
    featuredSession: "Uitgelichte sessie",
    eveningRoutine: "Avondroutine",
    guidedRelaxation: "Begeleide ontspanning",
    sleepSounds: "Slaapgeluiden",
    sleepQuality: "Slaapkwaliteit",
    comingSoon: "Binnenkort",
    sleepTimer: "Slaaptimer",
    yourProgress: "Jouw voortgang",
    progressIntro: "Je gaat regelmatig vooruit. Ga zo door.",
    calmOfDay: "Rust van de dag",
    reached: "Bereikt",
    totalMinutes: "Totale minuten",
    streak: "Reeks",
    days: "dagen",
    favorites: "Favorieten",
    weekActivity: "Weekactiviteit",
    resetProgress: "Voortgang resetten",
    profileSettings: "Profiel & Instellingen",
    customizeExperience: "Personaliseer jouw ervaring.",
    language: "Taal",
    notifications: "Meldingen",
    reminders: "Herinneringen",
    offlineDownloads: "Offline downloads",
    premiumLater: "Premium later",
    ownSounds: "Jouw geluiden",
    ownSoundsText: "Voeg je MP3-bestanden toe in de map /sounds en pas daarna de paden aan in app.js.",
    showSoundPaths: "Verwachte bestanden tonen",
    privacySecurity: "Privacy & veiligheid",
    privacyText: "Deze V1 bewaart je gegevens lokaal op je apparaat met localStorage. Geen account, geen server, geen gegevensverkoop.",
    home: "Start",
    progress: "Voortgang",
    volume: "Volume",
    offline: "Offline",
    timer: "Timer",
    all: "Alles",
    focus: "Focus",
    fileMissing: "Geluid nog niet gevonden. Demo-ambience-modus geactiveerd.",
    premiumSoon: "Premiumfunctie later gepland.",
    timerSoon: "Slaaptimer gepland in een toekomstige versie.",
    notificationsSoon: "Meldingen worden geactiveerd na PWA-publicatie.",
    progressReset: "Voortgang gereset.",
    favoriteAdded: "Toegevoegd aan favorieten.",
    favoriteRemoved: "Verwijderd uit favorieten.",
    expectedFiles: "Verwachte bestanden in /sounds:",
    noResult: "Geen resultaat gevonden.",
    stayPresent: "Blijf aanwezig"
  }
};

let state = loadState();
let currentScreen = "welcome";
let previousScreen = "home";
let currentSessionId = "serenite-soir";
let currentCategory = "all";
let currentSearch = "";
let isPlaying = false;
let demoAudio = null;
let progressTicker = null;
let breathTimer = null;
let breathRunning = false;
let breathPattern = [4, 4, 6];
let breathStepIndex = 0;
let breathSeconds = 4;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", init);

function init() {
  applyLanguage(state.lang);
  renderAll();
  bindEvents();
  updateProgressUI();
  showScreen(state.hasStarted ? "home" : "welcome", false);
}

function loadState() {
  const fallback = {
    lang: "fr",
    hasStarted: false,
    favorites: [],
    totalMinutes: 0,
    todayMinutes: 0,
    goalMinutes: 10,
    lastActiveDate: todayKey(),
    streakDays: 0,
    week: {},
    notifications: false,
    reminders: true
  };

  try {
    const saved = JSON.parse(localStorage.getItem(ZENORA_STORAGE_KEY));
    const merged = { ...fallback, ...saved };

    if (merged.lastActiveDate !== todayKey()) {
      merged.todayMinutes = 0;
      merged.lastActiveDate = todayKey();
    }

    return merged;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(ZENORA_STORAGE_KEY, JSON.stringify(state));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function t(key) {
  return translations[state.lang]?.[key] || translations.fr[key] || key;
}

function localTitle(session) {
  return session.title[state.lang] || session.title.fr;
}

function localDescription(session) {
  return session.description[state.lang] || session.description.fr;
}

function bindEvents() {
  $("#startAppBtn")?.addEventListener("click", () => {
    state.hasStarted = true;
    saveState();
    showScreen("home");
  });

  $("#goLangBtn")?.addEventListener("click", () => {
    $("#languageSelect")?.focus();
    showScreen("profile");
  });

  $$(".lang-chip").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  $("#languageSelect")?.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });

  $$("[data-nav]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const screen = btn.dataset.nav;
      if (screen) showScreen(screen);
    });
  });

  $$("[data-back]").forEach((btn) => {
    btn.addEventListener("click", () => showScreen(previousScreen || "home"));
  });

  $("#searchInput")?.addEventListener("input", (event) => {
    currentSearch = event.target.value.trim().toLowerCase();
    renderExploreSessions();
  });

  $("#clearSearchBtn")?.addEventListener("click", () => {
    currentSearch = "";
    $("#searchInput").value = "";
    renderExploreSessions();
  });

  $("#favoriteBtn")?.addEventListener("click", toggleCurrentFavorite);

  $("#mainPlayBtn")?.addEventListener("click", toggleMainPlay);
  $("#prevBtn")?.addEventListener("click", playPrevious);
  $("#nextBtn")?.addEventListener("click", playNext);

  $("#downloadHintBtn")?.addEventListener("click", () => showToast(t("premiumSoon")));
  $("#timerBtn")?.addEventListener("click", () => showToast(t("timerSoon")));
  $("#sleepTimerBtn")?.addEventListener("click", () => showToast(t("timerSoon")));

  $("#volumeBtn")?.addEventListener("click", () => {
    const audio = $("#audioPlayer");
    audio.muted = !audio.muted;
    $("#volumeBtn").firstChild.textContent = audio.muted ? "🔇" : "🔊";
  });

  $("#seekBar")?.addEventListener("input", (event) => {
    const audio = $("#audioPlayer");
    if (!audio.duration || Number.isNaN(audio.duration)) return;
    audio.currentTime = (Number(event.target.value) / 100) * audio.duration;
  });

  const audio = $("#audioPlayer");

  audio?.addEventListener("timeupdate", updateAudioTime);
  audio?.addEventListener("loadedmetadata", updateAudioTime);
  audio?.addEventListener("ended", () => {
    stopPlayingUI();
    recordMinutes(1);
  });

  audio?.addEventListener("error", () => {
    if (isPlaying) {
      startDemoAmbience();
      showToast(t("fileMissing"));
      $("#audioHint").textContent = t("fileMissing");
    }
  });

  $("#breathToggle")?.addEventListener("click", toggleBreathing);

  $$(".exercise").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".exercise").forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");
      breathPattern = btn.dataset.pattern.split("-").map(Number);
      resetBreathingVisual();
    });
  });

  $("#notifToggle")?.addEventListener("change", (event) => {
    state.notifications = event.target.checked;
    saveState();
    showToast(t("notificationsSoon"));
  });

  $("#reminderToggle")?.addEventListener("change", (event) => {
    state.reminders = event.target.checked;
    saveState();
  });

  $("#showSoundPathsBtn")?.addEventListener("click", () => {
    const files = sessions.map((session) => session.audio).join("\n");
    alert(`${t("expectedFiles")}\n\n${files}`);
  });

  $("#resetProgressBtn")?.addEventListener("click", () => {
    state.totalMinutes = 0;
    state.todayMinutes = 0;
    state.streakDays = 0;
    state.week = {};
    saveState();
    updateProgressUI();
    showToast(t("progressReset"));
  });

  document.addEventListener("click", (event) => {
    const playBtn = event.target.closest("[data-play]");
    if (playBtn) {
      const id = playBtn.dataset.play;
      openPlayer(id, true);
    }

    const filterBtn = event.target.closest("[data-filter]");
    if (filterBtn) {
      currentCategory = filterBtn.dataset.filter || "all";
      showScreen("explore");
      renderExploreSessions();
    }
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  state.lang = lang;
  saveState();

  applyLanguage(lang);
  renderAll();
  updateProgressUI();

  const select = $("#languageSelect");
  if (select) select.value = lang;

  $$(".lang-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.lang === lang);
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });

  $$("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = t(key);
  });

  const select = $("#languageSelect");
  if (select) select.value = lang;

  const notifToggle = $("#notifToggle");
  const reminderToggle = $("#reminderToggle");

  if (notifToggle) notifToggle.checked = Boolean(state.notifications);
  if (reminderToggle) reminderToggle.checked = Boolean(state.reminders);

  $$(".lang-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.lang === lang);
  });
}

function renderAll() {
  renderHomeSessions();
  renderCategories();
  renderExploreSessions();
  renderSleepCards();
  renderPlayer();
}

function renderHomeSessions() {
  const container = $("#homeSessions");
  if (!container) return;

  const chosen = sessions.slice(0, 4);
  container.innerHTML = chosen.map(sessionCardTemplate).join("");
}

function renderCategories() {
  const container = $("#categoryRow");
  if (!container) return;

  const categories = [
    ["all", t("all")],
    ["meditation", t("meditation")],
    ["sleep", t("sleep")],
    ["breathing", t("breathing")],
    ["sounds", t("sounds")],
    ["focus", t("focus")]
  ];

  container.innerHTML = categories.map(([id, label]) => {
    const active = id === currentCategory ? "active" : "";
    return `<button class="category-chip ${active}" data-category="${id}">${label}</button>`;
  }).join("");

  $$("#categoryRow .category-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.category;
      renderCategories();
      renderExploreSessions();
    });
  });
}

function renderExploreSessions() {
  const container = $("#exploreSessions");
  if (!container) return;

  let filtered = [...sessions];

  if (currentCategory !== "all") {
    filtered = filtered.filter((session) => session.category === currentCategory);
  }

  if (currentSearch) {
    filtered = filtered.filter((session) => {
      const content = `${localTitle(session)} ${localDescription(session)} ${session.category}`.toLowerCase();
      return content.includes(currentSearch);
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">${t("noResult")}</div>`;
    return;
  }

  container.innerHTML = filtered.map(sessionCardTemplate).join("");
}

function renderSleepCards() {
  const container = $("#sleepCards");
  if (!container) return;

  const sleepSessions = sessions.filter((session) => session.category === "sleep");

  container.innerHTML = sleepSessions.map((session) => `
    <article class="sleep-card">
      <div>
        <div class="session-thumb">${session.icon}</div>
        <h4>${localTitle(session)}</h4>
        <p>${session.duration} min</p>
      </div>
      <button data-play="${session.id}" aria-label="Play">▶</button>
    </article>
  `).join("");
}

function sessionCardTemplate(session) {
  const favorite = state.favorites.includes(session.id) ? "♥" : "♡";

  return `
    <article class="session-card">
      <div class="session-thumb">${session.icon}</div>
      <div class="session-body">
        <h4>${localTitle(session)}</h4>
        <p>${session.duration} min · ${categoryLabel(session.category)}</p>
      </div>
      <div class="session-actions">
        <button class="icon-btn" onclick="toggleFavorite('${session.id}')" aria-label="Favori">${favorite}</button>
        <button class="icon-btn play" data-play="${session.id}" aria-label="Play">▶</button>
      </div>
    </article>
  `;
}

function categoryLabel(category) {
  const map = {
    meditation: t("meditation"),
    sleep: t("sleep"),
    breathing: t("breathing"),
    sounds: t("sounds"),
    focus: t("focus")
  };

  return map[category] || category;
}

function showScreen(screen, savePrevious = true) {
  if (savePrevious && currentScreen !== screen) {
    previousScreen = currentScreen;
  }

  currentScreen = screen;

  $$(".screen").forEach((item) => {
    item.classList.toggle("active", item.dataset.screen === screen);
  });

  const showNav = screen !== "welcome" && screen !== "player";
  $(".bottom-nav")?.classList.toggle("visible", showNav);

  $$(".bottom-nav button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.nav === screen);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openPlayer(id, autoplay = false) {
  currentSessionId = id;
  renderPlayer();
  showScreen("player");

  if (autoplay) {
    setTimeout(() => playCurrentSession(), 120);
  }
}

function renderPlayer() {
  const session = getCurrentSession();
  if (!session) return;

  $("#playerTitle").textContent = localTitle(session);
  $("#playerDescription").textContent = localDescription(session);
  $("#favoriteBtn").textContent = state.favorites.includes(session.id) ? "♥" : "♡";
  $("#audioHint").textContent = "";

  const audio = $("#audioPlayer");
  if (audio && audio.dataset.sessionId !== session.id) {
    audio.pause();
    audio.src = session.audio;
    audio.dataset.sessionId = session.id;
    audio.load();
    stopDemoAmbience();
    stopPlayingUI();
    resetAudioTime();
  }
}

function getCurrentSession() {
  return sessions.find((session) => session.id === currentSessionId) || sessions[0];
}

async function toggleMainPlay() {
  if (isPlaying) {
    pauseCurrentSession();
  } else {
    await playCurrentSession();
  }
}

async function playCurrentSession() {
  const session = getCurrentSession();
  const audio = $("#audioPlayer");

  if (!session || !audio) return;

  renderPlayer();

  try {
    await audio.play();
    startPlayingUI();
    stopDemoAmbience();
  } catch {
    startDemoAmbience();
    startPlayingUI();
    showToast(t("fileMissing"));
    $("#audioHint").textContent = t("fileMissing");
  }
}

function pauseCurrentSession() {
  const audio = $("#audioPlayer");
  audio?.pause();
  stopDemoAmbience();
  stopPlayingUI();
}

function startPlayingUI() {
  isPlaying = true;
  $("#mainPlayBtn").textContent = "⏸";

  if (!progressTicker) {
    progressTicker = setInterval(() => {
      if (isPlaying) recordMinutes(1);
    }, 60000);
  }
}

function stopPlayingUI() {
  isPlaying = false;
  $("#mainPlayBtn").textContent = "▶";

  if (progressTicker) {
    clearInterval(progressTicker);
    progressTicker = null;
  }
}

function playPrevious() {
  const index = sessions.findIndex((session) => session.id === currentSessionId);
  const nextIndex = index <= 0 ? sessions.length - 1 : index - 1;
  openPlayer(sessions[nextIndex].id, true);
}

function playNext() {
  const index = sessions.findIndex((session) => session.id === currentSessionId);
  const nextIndex = index >= sessions.length - 1 ? 0 : index + 1;
  openPlayer(sessions[nextIndex].id, true);
}

function updateAudioTime() {
  const audio = $("#audioPlayer");
  if (!audio) return;

  const current = audio.currentTime || 0;
  const duration = audio.duration || 0;

  $("#currentTime").textContent = formatTime(current);
  $("#durationTime").textContent = duration ? formatTime(duration) : "0:00";

  if (duration > 0) {
    $("#seekBar").value = Math.round((current / duration) * 100);
  }
}

function resetAudioTime() {
  $("#currentTime").textContent = "0:00";
  $("#durationTime").textContent = "0:00";
  $("#seekBar").value = 0;
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.floor(seconds || 0));
  const mins = Math.floor(safe / 60);
  const secs = String(safe % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function startDemoAmbience() {
  if (demoAudio) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const gain = context.createGain();
  const osc1 = context.createOscillator();
  const osc2 = context.createOscillator();

  osc1.type = "sine";
  osc2.type = "triangle";
  osc1.frequency.value = 174;
  osc2.frequency.value = 220;

  gain.gain.value = 0.025;

  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(context.destination);

  osc1.start();
  osc2.start();

  demoAudio = {
    context,
    osc1,
    osc2,
    gain
  };
}

function stopDemoAmbience() {
  if (!demoAudio) return;

  try {
    demoAudio.osc1.stop();
    demoAudio.osc2.stop();
    demoAudio.context.close();
  } catch {}

  demoAudio = null;
}

function toggleFavorite(id) {
  const exists = state.favorites.includes(id);

  if (exists) {
    state.favorites = state.favorites.filter((item) => item !== id);
    showToast(t("favoriteRemoved"));
  } else {
    state.favorites.push(id);
    showToast(t("favoriteAdded"));
  }

  saveState();
  renderAll();
  updateProgressUI();
}

function toggleCurrentFavorite() {
  toggleFavorite(currentSessionId);
  $("#favoriteBtn").textContent = state.favorites.includes(currentSessionId) ? "♥" : "♡";
}

window.toggleFavorite = toggleFavorite;

function recordMinutes(minutes) {
  state.totalMinutes += minutes;
  state.todayMinutes += minutes;
  state.lastActiveDate = todayKey();

  const key = todayKey();
  state.week[key] = (state.week[key] || 0) + minutes;

  if (state.todayMinutes >= state.goalMinutes && state.streakDays === 0) {
    state.streakDays = 1;
  }

  saveState();
  updateProgressUI();
}

function updateProgressUI() {
  const percent = Math.min(100, Math.round((state.todayMinutes / state.goalMinutes) * 100));

  $("#todayMinutes") && ($("#todayMinutes").textContent = state.todayMinutes);
  $("#goalMinutes") && ($("#goalMinutes").textContent = state.goalMinutes);
  $("#progressPercent") && ($("#progressPercent").textContent = `${percent}%`);
  $("#totalMinutes") && ($("#totalMinutes").textContent = state.totalMinutes);
  $("#streakDays") && ($("#streakDays").textContent = state.streakDays);
  $("#favoriteCount") && ($("#favoriteCount").textContent = state.favorites.length);

  const ring = $("#homeRing");
  if (ring) {
    ring.style.setProperty("--value", `${percent}%`);
    ring.querySelector("span").textContent = `${percent}%`;
  }

  const status = $("#todayStatus");
  if (status) {
    status.textContent = percent >= 100 ? "Objectif atteint" : t("stayPresent");
  }

  renderWeekBars();
}

function renderWeekBars() {
  const container = $("#weekBars");
  if (!container) return;

  const days = getLastSevenDays();

  container.innerHTML = days.map((day) => {
    const value = state.week[day.key] || 0;
    const height = Math.max(8, Math.min(100, (value / state.goalMinutes) * 100));

    return `
      <div class="bar-wrap">
        <div class="bar" style="height:${height}%"></div>
        <span class="bar-label">${day.label}</span>
      </div>
    `;
  }).join("");
}

function getLastSevenDays() {
  const formatter = new Intl.DateTimeFormat(state.lang, { weekday: "short" });
  const days = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    days.push({
      key: date.toISOString().slice(0, 10),
      label: formatter.format(date).slice(0, 3)
    });
  }

  return days;
}

function toggleBreathing() {
  if (breathRunning) {
    stopBreathing();
  } else {
    startBreathing();
  }
}

function startBreathing() {
  breathRunning = true;
  breathStepIndex = 0;
  breathSeconds = breathPattern[0];

  $("#breathToggle").textContent = t("stopSession");
  updateBreathingStep();

  breathTimer = setInterval(() => {
    breathSeconds -= 1;

    if (breathSeconds <= 0) {
      breathStepIndex = (breathStepIndex + 1) % 3;
      breathSeconds = breathPattern[breathStepIndex];

      if (breathSeconds === 0) {
        breathStepIndex = (breathStepIndex + 1) % 3;
        breathSeconds = breathPattern[breathStepIndex];
      }
    }

    updateBreathingStep();
  }, 1000);
}

function stopBreathing() {
  breathRunning = false;
  clearInterval(breathTimer);
  breathTimer = null;
  $("#breathToggle").textContent = t("startSession");
  resetBreathingVisual();
  recordMinutes(1);
}

function resetBreathingVisual() {
  breathStepIndex = 0;
  breathSeconds = breathPattern[0];

  $("#breathPhase").textContent = t("inhale");
  $("#breathCount").textContent = breathSeconds;

  const circle = $("#breathCircle");
  circle?.classList.remove("inhale", "hold", "exhale");
  circle?.classList.add("inhale");

  $$(".breath-steps span").forEach((item, index) => {
    item.classList.toggle("active", index === 0);
  });
}

function updateBreathingStep() {
  const phases = [t("inhale"), t("hold"), t("exhale")];
  const classes = ["inhale", "hold", "exhale"];

  $("#breathPhase").textContent = phases[breathStepIndex];
  $("#breathCount").textContent = breathSeconds;

  const circle = $("#breathCircle");
  circle?.classList.remove("inhale", "hold", "exhale");
  circle?.classList.add(classes[breathStepIndex]);

  $$(".breath-steps span").forEach((item, index) => {
    item.classList.toggle("active", index === breathStepIndex);
  });
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}
