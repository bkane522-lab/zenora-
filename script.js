const Zenora = (() => {
  const STORAGE_KEY = "zenora.state.v2";
  const DEFAULT_STATE = {
    onboarded: false,
    lang: "fr",
    mood: "calm",
    favorites: [],
    totalSeconds: 0,
    dailySeconds: {},
    streak: 0,
    volume: 0.7,
    currentTrackId: "halodoux"
  };

  const I18N = {
    fr: {
      onboardingLabel: "Votre espace", welcomeTitle: "Bienvenue sur ZENORA", welcomeText: "Un cocon immersif pour respirer, ralentir, dormir mieux et retrouver un peu de calme.",
      promiseBreathe: "Respirer", promiseBreatheSub: "Apaiser l’esprit", promiseSleep: "Sommeil", promiseSleepSub: "Créer un rituel", promiseSounds: "Sons", promiseSoundsSub: "Ambiances longues",
      start: "Commencer", openHome: "Entrer directement", homeTitle: "Prends soin de toi.", homeSub: "Chaque respiration compte.",
      moodLabel: "Météo intérieure", moodTitle: "Comment tu te sens maintenant ?", moodCalm: "Calme", moodAnxious: "Anxieux", moodTired: "Fatigué", moodHeavy: "Trop lourd",
      recommended: "Recommandé pour vous", shortcutBreathe: "Mode guidé", shortcutSleep: "Rituel du soir", shortcutSounds: "Ambiances 3D", shortcutSupport: "60 secondes", supportTitleShort: "Refuge",
      dailyProgram: "Programme du jour", stayPresent: "Reste présent", sessionsForYou: "Sessions pour vous", seeAll: "Voir tout",
      exploreTitle: "Explorer", exploreSub: "Choisissez une ambiance, sans rythme, sans pression.", searchPlaceholder: "Rechercher une session, un son...",
      catAll: "Tout", catMeditation: "Méditation", catSleep: "Sommeil", catBreathe: "Respiration", catSounds: "Sons", catFocus: "Focus",
      labLabel: "AuraLab", labTitle: "Créer une ambiance instantanée", labText: "Un son génératif calme, sans fichier MP3, qui évolue lentement.", launchLab: "Lancer",
      breatheTitle: "Respiration guidée", breatheSub: "Prenez une pause, respirez, revenez ici.", secondsLeft: "secondes restantes", phaseInhale: "Inspirer", phaseHold: "Retenir", phaseExhale: "Expirer", classic: "Classique", relaxing: "Relaxant", soothing: "Apaisement", startBreath: "Démarrer", pause: "Pause", sos60: "Calme immédiat 60 s", sosRunning: "60 s en cours", softGuide: "Guide doux", softGuideText: "Posez les pieds au sol, relâchez les épaules, puis laissez l’expiration devenir plus longue que l’inspiration.",
      sleepTitle: "Sommeil", sleepSub: "Préparez une nuit paisible et réparatrice.", featuredSession: "Séance à la une", sleepFeatureMeta: "60 min · Fondu progressif", ritual1: "Baisser la lumière", ritual2: "Respirer lentement", ritual3: "Lancer un son doux", soundsToSleep: "Sons pour dormir", sleepTimerLabel: "Minuteur sommeil", fadeText: "Le son baisse doucement avant l’arrêt.", setTimer: "Régler",
      supportTitle: "Mode refuge", supportSub: "Un espace simple quand tout paraît trop lourd.", sosLabel: "Ancrage 60 secondes", refugeTitle: "Revenir au présent, doucement", refugeText: "Regardez autour de vous : nommez 5 choses visibles, 4 sensations corporelles, 3 sons, 2 odeurs ou textures, puis une chose que vous pouvez faire maintenant.", launchBreathing: "Lancer la respiration", important: "Important", importantText: "ZENORA peut aider à se poser, mais ne remplace pas un professionnel. Si vous êtes en danger immédiat, contactez les urgences locales ou une personne de confiance.",
      progressTitle: "Votre progression", progressSub: "Chaque petit moment compte.", calmToday: "Calme du jour", reached: "Atteint", totalMinutesLabel: "Minutes totales", streakLabel: "Série", days: "jours", favoritesLabel: "Favoris", weekActivity: "Activité de la semaine", resetProgress: "Réinitialiser la progression",
      navHome: "Accueil", navExplore: "Explorer", navBreathe: "Respirer", navSleep: "Sommeil", navProgress: "Progrès", navSounds: "Sons",
      timerSheetText: "Le son baissera progressivement avant de s’arrêter.", disable: "Désactiver", volume: "Volume", close: "Fermer", noTrack: "Aucune piste", tapPlay: "Touchez lecture pour commencer", noResult: "Aucune session trouvée.", resetConfirm: "Réinitialiser votre progression ZENORA ?", timerOff: "—", timerSet: "minuteur", minutes: "min", meditation: "Méditation", sleep: "Sommeil", breathe: "Respiration", sounds: "Sons", focus: "Focus", soundMeditation: "Méditation sonore", fadeProgressive: "Fondu progressif",
      phaseNames: { inhale: "Inspirez", hold: "Retenez", exhale: "Expirez" }
    },
    en: {
      onboardingLabel: "Your space", welcomeTitle: "Welcome to ZENORA", welcomeText: "An immersive cocoon to breathe, slow down, sleep better and find a little calm.",
      promiseBreathe: "Breathe", promiseBreatheSub: "Ease the mind", promiseSleep: "Sleep", promiseSleepSub: "Create a ritual", promiseSounds: "Sounds", promiseSoundsSub: "Long atmospheres",
      start: "Start", openHome: "Enter directly", homeTitle: "Take care of yourself.", homeSub: "Every breath matters.",
      moodLabel: "Inner weather", moodTitle: "How do you feel right now?", moodCalm: "Calm", moodAnxious: "Anxious", moodTired: "Tired", moodHeavy: "Too heavy",
      recommended: "Recommended for you", shortcutBreathe: "Guided mode", shortcutSleep: "Evening ritual", shortcutSounds: "3D atmospheres", shortcutSupport: "60 seconds", supportTitleShort: "Refuge",
      dailyProgram: "Today's program", stayPresent: "Stay present", sessionsForYou: "Sessions for you", seeAll: "See all",
      exploreTitle: "Explore", exploreSub: "Choose a calm atmosphere, no beat, no pressure.", searchPlaceholder: "Search a session, a sound...",
      catAll: "All", catMeditation: "Meditation", catSleep: "Sleep", catBreathe: "Breathing", catSounds: "Sounds", catFocus: "Focus",
      labLabel: "AuraLab", labTitle: "Create an instant atmosphere", labText: "A calm generative sound, with no MP3 file, slowly evolving.", launchLab: "Launch",
      breatheTitle: "Guided breathing", breatheSub: "Take a pause, breathe, come back here.", secondsLeft: "seconds left", phaseInhale: "Inhale", phaseHold: "Hold", phaseExhale: "Exhale", classic: "Classic", relaxing: "Relaxing", soothing: "Soothing", startBreath: "Start", pause: "Pause", sos60: "Immediate calm 60s", sosRunning: "60s running", softGuide: "Soft guide", softGuideText: "Place your feet on the floor, release your shoulders, then let the exhale become longer than the inhale.",
      sleepTitle: "Sleep", sleepSub: "Prepare a peaceful and restorative night.", featuredSession: "Featured session", sleepFeatureMeta: "60 min · Progressive fade", ritual1: "Dim the light", ritual2: "Breathe slowly", ritual3: "Play a soft sound", soundsToSleep: "Sounds for sleep", sleepTimerLabel: "Sleep timer", fadeText: "The sound fades gently before stopping.", setTimer: "Set",
      supportTitle: "Refuge mode", supportSub: "A simple space when everything feels too heavy.", sosLabel: "60-second grounding", refugeTitle: "Come back to the present, gently", refugeText: "Look around: name 5 visible things, 4 body sensations, 3 sounds, 2 smells or textures, then one thing you can do now.", launchBreathing: "Launch breathing", important: "Important", importantText: "ZENORA may help you settle, but it does not replace a professional. If you are in immediate danger, contact local emergency services or someone you trust.",
      progressTitle: "Your progress", progressSub: "Every small moment counts.", calmToday: "Today's calm", reached: "Reached", totalMinutesLabel: "Total minutes", streakLabel: "Streak", days: "days", favoritesLabel: "Favorites", weekActivity: "Weekly activity", resetProgress: "Reset progress",
      navHome: "Home", navExplore: "Explore", navBreathe: "Breathe", navSleep: "Sleep", navProgress: "Progress", navSounds: "Sounds",
      timerSheetText: "The sound will gradually fade before stopping.", disable: "Disable", volume: "Volume", close: "Close", noTrack: "No track", tapPlay: "Tap play to start", noResult: "No session found.", resetConfirm: "Reset your ZENORA progress?", timerOff: "—", timerSet: "timer", minutes: "min", meditation: "Meditation", sleep: "Sleep", breathe: "Breathing", sounds: "Sounds", focus: "Focus", soundMeditation: "Sound meditation", fadeProgressive: "Progressive fade",
      phaseNames: { inhale: "Inhale", hold: "Hold", exhale: "Exhale" }
    },
    nl: {
      onboardingLabel: "Jouw ruimte", welcomeTitle: "Welkom bij ZENORA", welcomeText: "Een zachte cocon om te ademen, te vertragen, beter te slapen en wat rust terug te vinden.",
      promiseBreathe: "Ademen", promiseBreatheSub: "De geest kalmeren", promiseSleep: "Slaap", promiseSleepSub: "Een ritueel maken", promiseSounds: "Geluiden", promiseSoundsSub: "Lange sferen",
      start: "Beginnen", openHome: "Direct openen", homeTitle: "Zorg goed voor jezelf.", homeSub: "Elke ademhaling telt.",
      moodLabel: "Innerlijk weer", moodTitle: "Hoe voel je je nu?", moodCalm: "Rustig", moodAnxious: "Onrustig", moodTired: "Moe", moodHeavy: "Te zwaar",
      recommended: "Aanbevolen voor jou", shortcutBreathe: "Geleide modus", shortcutSleep: "Avondritueel", shortcutSounds: "3D-sferen", shortcutSupport: "60 seconden", supportTitleShort: "Schuilplek",
      dailyProgram: "Programma van vandaag", stayPresent: "Blijf aanwezig", sessionsForYou: "Sessies voor jou", seeAll: "Alles zien",
      exploreTitle: "Ontdekken", exploreSub: "Kies een rustige sfeer, zonder beat, zonder druk.", searchPlaceholder: "Zoek een sessie, een geluid...",
      catAll: "Alles", catMeditation: "Meditatie", catSleep: "Slaap", catBreathe: "Ademhaling", catSounds: "Geluiden", catFocus: "Focus",
      labLabel: "AuraLab", labTitle: "Maak direct een sfeer", labText: "Een kalm generatief geluid, zonder MP3-bestand, dat langzaam evolueert.", launchLab: "Starten",
      breatheTitle: "Geleide ademhaling", breatheSub: "Neem pauze, adem, kom hier terug.", secondsLeft: "seconden over", phaseInhale: "Inademen", phaseHold: "Vasthouden", phaseExhale: "Uitademen", classic: "Klassiek", relaxing: "Ontspannend", soothing: "Kalmerend", startBreath: "Starten", pause: "Pauze", sos60: "Directe rust 60 s", sosRunning: "60 s bezig", softGuide: "Zachte gids", softGuideText: "Zet je voeten op de grond, ontspan je schouders en laat de uitademing langer worden dan de inademing.",
      sleepTitle: "Slaap", sleepSub: "Bereid een rustige en herstellende nacht voor.", featuredSession: "Uitgelichte sessie", sleepFeatureMeta: "60 min · Geleidelijke fade", ritual1: "Licht dimmen", ritual2: "Langzaam ademen", ritual3: "Zacht geluid starten", soundsToSleep: "Geluiden om te slapen", sleepTimerLabel: "Slaaptimer", fadeText: "Het geluid vervaagt zacht voordat het stopt.", setTimer: "Instellen",
      supportTitle: "Schuilmodus", supportSub: "Een eenvoudige ruimte wanneer alles te zwaar voelt.", sosLabel: "60 seconden aarden", refugeTitle: "Zacht terug naar het nu", refugeText: "Kijk om je heen: noem 5 zichtbare dingen, 4 lichaamsgevoelens, 3 geluiden, 2 geuren of texturen, en één ding dat je nu kunt doen.", launchBreathing: "Ademhaling starten", important: "Belangrijk", importantText: "ZENORA kan helpen om tot rust te komen, maar vervangt geen professional. Ben je direct in gevaar, bel de lokale hulpdiensten of iemand die je vertrouwt.",
      progressTitle: "Jouw voortgang", progressSub: "Elk klein moment telt.", calmToday: "Rust vandaag", reached: "Bereikt", totalMinutesLabel: "Totale minuten", streakLabel: "Reeks", days: "dagen", favoritesLabel: "Favorieten", weekActivity: "Weekactiviteit", resetProgress: "Voortgang resetten",
      navHome: "Home", navExplore: "Ontdekken", navBreathe: "Ademen", navSleep: "Slaap", navProgress: "Voortgang", navSounds: "Geluiden",
      timerSheetText: "Het geluid zal geleidelijk vervagen voordat het stopt.", disable: "Uitschakelen", volume: "Volume", close: "Sluiten", noTrack: "Geen track", tapPlay: "Tik op play om te starten", noResult: "Geen sessie gevonden.", resetConfirm: "Je ZENORA-voortgang resetten?", timerOff: "—", timerSet: "timer", minutes: "min", meditation: "Meditatie", sleep: "Slaap", breathe: "Ademhaling", sounds: "Geluiden", focus: "Focus", soundMeditation: "Geluidsmeditatie", fadeProgressive: "Geleidelijke fade",
      phaseNames: { inhale: "Adem in", hold: "Houd vast", exhale: "Adem uit" }
    }
  };

  const tracks = [
    {
      id: "halodoux",
      title: { fr: "Halo doux", en: "Soft halo", nl: "Zachte halo" },
      duration: "6:04",
      category: "sleep",
      icon: "◉",
      mood: "tired",
      sound: "mp3",
      src: "audio/halodouxremastered.mp3",
      srcs: ["audio/halodouxremastered.mp3", "audio/Halo doux (Remastered).mp3"]
    },
    {
      id: "hypnosezen",
      title: { fr: "Hypnose zen", en: "Zen hypnosis", nl: "Zen hypnose" },
      duration: "5:54",
      category: "sounds",
      icon: "◌",
      mood: "calm",
      sound: "mp3",
      src: "audio/hypnosezenremastered.mp3",
      srcs: ["audio/hypnosezenremastered.mp3", "audio/hypnose zen remastered.mp3", "audio/Hypnose zen (Remastered).mp3"]
    },
    {
      id: "flutehypnotique",
      title: { fr: "Flute hypnotique", en: "Hypnotic flute", nl: "Hypnotische fluit" },
      duration: "7:34",
      category: "sounds",
      icon: "≋",
      mood: "calm",
      sound: "mp3",
      src: "audio/flutehypnotique.mp3",
      srcs: ["audio/flutehypnotique.mp3", "audio/Flûtehypnotique.mp3", "audio/flûtehypnotique.mp3", "audio/Flutehypnotique.mp3", "audio/flute hypnotique.mp3"]
    },
    {
      id: "echointerieur",
      title: { fr: "Écho intérieur", en: "Inner echo", nl: "Innerlijke echo" },
      duration: "10:50",
      category: "meditation",
      icon: "◎",
      mood: "heavy",
      sound: "mp3",
      src: "audio/echointerieur.mp3",
      srcs: ["audio/echointerieur.mp3", "audio/Échointérieur.mp3", "audio/échointerieur.mp3", "audio/echo interieur.mp3"]
    },
    {
      id: "souffledhypnose",
      title: { fr: "Souffle d’hypnose", en: "Hypnotic breath", nl: "Hypnotische adem" },
      duration: "11:42",
      category: "sleep",
      icon: "✦",
      mood: "anxious",
      sound: "mp3",
      src: "audio/souffledhypnose.mp3",
      srcs: ["audio/souffledhypnose.mp3", "audio/Souffled’hypnose.mp3", "audio/Souffle d’hypnose.mp3", "audio/souffle dhypnose.mp3"]
    },

    {
      id: "respiration-4-6",
      title: { fr: "Respiration 4-6", en: "Breathing 4-6", nl: "Ademhaling 4-6" },
      duration: 8,
      category: "breathe",
      icon: "≋",
      mood: "calm",
      sound: "softgen",
      layers: { base: 96, second: 144, filter: 380, noise: 0.018, shimmer: 0 }
    },
    {
      id: "focus-doux",
      title: { fr: "Focus doux", en: "Soft focus", nl: "Zachte focus" },
      duration: 12,
      category: "focus",
      icon: "◇",
      mood: "calm",
      sound: "softgen",
      layers: { base: 110, second: 165, filter: 440, noise: 0.014, shimmer: 0 }
    },
    {
      id: "auralab",
      title: { fr: "AuraLab doux", en: "Soft AuraLab", nl: "Zachte AuraLab" },
      duration: 15,
      category: "sounds",
      icon: "⬢",
      mood: "calm",
      sound: "softgen",
      layers: { base: 82, second: 123, filter: 320, noise: 0.016, shimmer: 0 }
    }
  ];

  let state = loadState();
  let currentScreen = "onboarding";
  let currentCategory = "all";
  let searchTerm = "";
  let currentTrackIndex = 0;
  let sleepTimer = null;
  let sleepTimerMinutes = 0;
  let progressInterval = null;
  let audioEngine = null;
  let breath = { running: false, patternName: "4-4-6", phases: [], phaseIndex: 0, remaining: 4, timer: null, emergencyTimeout: null };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const t = (key) => I18N[state.lang]?.[key] ?? I18N.fr[key] ?? key;
  const titleOf = (track) => track.title[state.lang] || track.title.fr;
  const categoryLabel = (category) => ({ meditation: t("meditation"), sleep: t("sleep"), breathe: t("breathe"), sounds: t("sounds"), focus: t("focus") }[category] || category);

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : { ...DEFAULT_STATE };
    } catch (_) {
      return { ...DEFAULT_STATE };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function todayKey(date = new Date()) {
    const d = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return d.toISOString().slice(0, 10);
  }

  function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
  function durationLabel(track) { return typeof track.duration === "string" ? track.duration : `${track.duration} ${t("minutes")}`; }
  function minutesLabel(track) { return `${durationLabel(track)} · ${categoryLabel(track.category)}`; }

  function init() {
    installServiceWorker();
    seedDailyState();
    bindEvents();
    setCurrentTrack(state.currentTrackId || tracks[0].id, false);
    applyLanguage();
    updateRecommended();
    renderAllTracks();
    updateProgressUI();
    setVolume(state.volume);
    setBreathPattern("4-4-6");
    showScreen(state.onboarded ? "home" : "onboarding");
    document.body.classList.add("ready");
  }

  function installServiceWorker() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
    }
  }

  function seedDailyState() {
    const key = todayKey();
    if (!state.dailySeconds[key]) state.dailySeconds[key] = 0;
    saveState();
  }

  function bindEvents() {
    $("#startAppBtn").addEventListener("click", () => {
      state.onboarded = true;
      saveState();
      showScreen("home");
    });
    $("#skipOnboardingBtn").addEventListener("click", () => {
      state.onboarded = true;
      saveState();
      showScreen("home");
    });

    document.addEventListener("click", (event) => {
      const jump = event.target.closest("[data-jump]");
      if (jump) {
        const filter = jump.dataset.filter;
        if (filter) setCategory(filter);
        showScreen(jump.dataset.jump);
      }
      const play = event.target.closest("[data-play-track]");
      if (play) playTrack(play.dataset.playTrack);
    });

    $$(".lang-btn").forEach(btn => btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      saveState();
      applyLanguage();
      renderAllTracks();
      updateRecommended();
      setCurrentTrack(tracks[currentTrackIndex]?.id || tracks[0].id, false);
      updateProgressUI();
      setBreathPattern(breath.patternName);
    }));

    $$(".chip").forEach(chip => chip.addEventListener("click", () => setCategory(chip.dataset.category)));
    $$(".mood-chip").forEach(btn => btn.addEventListener("click", () => setMood(btn.dataset.mood)));

    $("#searchInput").addEventListener("input", (event) => {
      searchTerm = event.target.value.trim().toLowerCase();
      renderExploreTracks();
    });
    $("#clearSearch").addEventListener("click", () => {
      searchTerm = "";
      $("#searchInput").value = "";
      renderExploreTracks();
    });

    $("#playBtn").addEventListener("click", togglePlayback);
    $("#prevBtn").addEventListener("click", () => skipTrack(-1));
    $("#nextBtn").addEventListener("click", () => skipTrack(1));
    $("#timerBtn").addEventListener("click", openTimerSheet);
    $("#sleepTimerShortcut").addEventListener("click", openTimerSheet);
    $("#closeTimerSheet").addEventListener("click", closeTimerSheet);
    $("#timerSheet").addEventListener("click", event => { if (event.target.id === "timerSheet") closeTimerSheet(); });
    $$(".timer-options button").forEach(btn => btn.addEventListener("click", () => setSleepTimer(Number(btn.dataset.timer))));
    $("#volumeSlider").addEventListener("input", event => setVolume(Number(event.target.value)));

    $$(".preset").forEach(btn => btn.addEventListener("click", () => setBreathPattern(btn.dataset.pattern)));
    $("#breathToggle").addEventListener("click", toggleBreath);
    $("#emergencyBtn").addEventListener("click", startEmergencyBreath);
    $("#refugeStart").addEventListener("click", startEmergencyBreath);

    $("#resetProgress").addEventListener("click", () => {
      if (!confirm(t("resetConfirm"))) return;
      state.totalSeconds = 0;
      state.dailySeconds = { [todayKey()]: 0 };
      state.streak = 0;
      saveState();
      updateProgressUI();
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopProgressTicker();
      else if (audioEngine?.playing) startProgressTicker();
    });
  }

  function applyLanguage() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
    $$('[data-i18n-placeholder]').forEach(node => { node.placeholder = t(node.dataset.i18nPlaceholder); });
    $$(".lang-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === state.lang));

    const sleepFeatured = tracks.find(track => track.id === "souffledhypnose") || tracks.find(track => track.category === "sleep") || tracks[0];
    if ($("#sleepFeatureTitle")) $("#sleepFeatureTitle").textContent = titleOf(sleepFeatured);
    const sleepFeatureButton = $(".sleep-feature");
    if (sleepFeatureButton) sleepFeatureButton.dataset.playTrack = sleepFeatured.id;

    $("#timerStatus").textContent = sleepTimerMinutes ? `${sleepTimerMinutes} ${t("minutes")}` : t("timerOff");
    setBreathDisplay(currentBreathPhaseKey() || "inhale", breath.remaining || getPattern(breath.patternName)[0].seconds);
  }

  function showScreen(screenName) {
    currentScreen = screenName;
    $$(".screen").forEach(screen => screen.classList.toggle("active", screen.dataset.screen === screenName));
    $$(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.jump === screenName));
    const nav = $(".bottom-nav");
    nav.style.display = screenName === "onboarding" ? "none" : "grid";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setMood(mood) {
    state.mood = mood;
    saveState();
    $$(".mood-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.mood === mood));
    updateRecommended();
  }

  function updateRecommended() {
    $$(".mood-chip").forEach(btn => btn.classList.toggle("active", btn.dataset.mood === state.mood));
    const recommended = tracks.find(track => track.mood === state.mood) || tracks[0];
    $("#recommendedCard").dataset.playTrack = recommended.id;
    $("#recommendedTitle").textContent = titleOf(recommended);
    $("#recommendedMeta").textContent = `${categoryLabel(recommended.category)} · ${durationLabel(recommended)}`;
  }

  function setCategory(category) {
    currentCategory = category;
    $$(".chip").forEach(chip => chip.classList.toggle("active", chip.dataset.category === category));
    renderExploreTracks();
  }

  function renderAllTracks() {
    renderHomeTracks();
    renderExploreTracks();
    renderSleepTracks();
  }

  function renderHomeTracks() {
    const picks = [state.mood, "anxious", "tired", "calm"].flatMap(mood => tracks.filter(track => track.mood === mood)).filter(uniqueTrack).slice(0, 4);
    const container = $("#homeTracks");
    container.innerHTML = picks.map(trackCardHTML).join("");
    bindTrackButtons(container);
    markActiveCards();
  }

  function uniqueTrack(track, index, arr) { return arr.findIndex(item => item.id === track.id) === index; }

  function renderExploreTracks() {
    const container = $("#tracksContainer");
    const query = searchTerm.toLowerCase();
    const filtered = tracks.filter(track => {
      const matchesCategory = currentCategory === "all" || track.category === currentCategory;
      const blob = `${titleOf(track)} ${categoryLabel(track.category)} ${track.id}`.toLowerCase();
      const matchesSearch = !query || blob.includes(query);
      return matchesCategory && matchesSearch;
    });
    container.innerHTML = filtered.length ? filtered.map(trackCardHTML).join("") : `<div class="empty-state">${t("noResult")}</div>`;
    bindTrackButtons(container);
    markActiveCards();
  }

  function renderSleepTracks() {
    const container = $("#sleepTracks");
    const sleepTracks = tracks.filter(track => track.category === "sleep" || track.sound === "forest").slice(0, 5);
    container.innerHTML = sleepTracks.map(track => `
      <button class="sound-tile glass-card" data-track-id="${track.id}">
        <div class="track-art" aria-hidden="true">${track.icon}</div>
        <div><strong>${titleOf(track)}</strong><small>${durationLabel(track)}</small></div>
      </button>
    `).join("");
    bindTrackButtons(container);
  }

  function trackCardHTML(track) {
    const isFav = state.favorites.includes(track.id);
    return `
      <article class="track-card" data-track-card="${track.id}">
        <div class="track-art" aria-hidden="true">${track.icon}</div>
        <div class="track-main">
          <strong>${titleOf(track)}</strong>
          <small>${minutesLabel(track)}</small>
        </div>
        <button class="favorite-btn ${isFav ? "active" : ""}" data-fav="${track.id}" aria-label="Favori">${isFav ? "♥" : "♡"}</button>
        <button class="play-track-btn" data-track-id="${track.id}" aria-label="Lire ${titleOf(track)}">▶</button>
      </article>
    `;
  }

  function bindTrackButtons(root) {
    $$('[data-track-id]', root).forEach(btn => {
      btn.addEventListener("click", event => {
        event.stopPropagation();
        playTrack(btn.dataset.trackId);
      });
    });
    $$('[data-fav]', root).forEach(btn => {
      btn.addEventListener("click", event => {
        event.stopPropagation();
        toggleFavorite(btn.dataset.fav);
      });
    });
  }

  function toggleFavorite(trackId) {
    const exists = state.favorites.includes(trackId);
    state.favorites = exists ? state.favorites.filter(id => id !== trackId) : [...state.favorites, trackId];
    saveState();
    renderAllTracks();
    updateProgressUI();
  }

  function setCurrentTrack(trackId, updateEngine = true) {
    const index = tracks.findIndex(track => track.id === trackId);
    currentTrackIndex = index >= 0 ? index : 0;
    const track = tracks[currentTrackIndex];
    state.currentTrackId = track.id;
    saveState();
    $("#currentTrackTitle").textContent = titleOf(track);
    $("#currentTrackMeta").textContent = sleepTimerMinutes ? `${minutesLabel(track)} · ${t("timerSet")} ${sleepTimerMinutes} ${t("minutes")}` : minutesLabel(track);
    markActiveCards();
    if (updateEngine && audioEngine) audioEngine.setTrack(track);
  }

  function markActiveCards() {
    $$('[data-track-card]').forEach(card => card.classList.toggle("active-track", card.dataset.trackCard === tracks[currentTrackIndex]?.id));
  }

  async function playTrack(trackId) {
    setCurrentTrack(trackId, true);
    await ensureAudio();
    audioEngine.setTrack(tracks[currentTrackIndex]);
    audioEngine.play();
    startProgressTicker();
    updatePlayerButtons(true);
    $("#miniPlayer").classList.remove("hidden");
    document.body.classList.add("audio-on");
  }

  async function togglePlayback() {
    await ensureAudio();
    if (audioEngine.playing) {
      audioEngine.pause();
      stopProgressTicker();
      updatePlayerButtons(false);
    } else {
      audioEngine.setTrack(tracks[currentTrackIndex]);
      audioEngine.play();
      startProgressTicker();
      updatePlayerButtons(true);
      $("#miniPlayer").classList.remove("hidden");
    }
  }

  function skipTrack(direction) {
    const next = (currentTrackIndex + direction + tracks.length) % tracks.length;
    const wasPlaying = audioEngine?.playing;
    setCurrentTrack(tracks[next].id, true);
    if (wasPlaying) playTrack(tracks[next].id);
  }

  function updatePlayerButtons(isPlaying) {
    $("#playBtn").textContent = isPlaying ? "Ⅱ" : "▶";
    document.body.classList.toggle("audio-on", Boolean(isPlaying));
    $$(".play-track-btn[data-track-id]").forEach(btn => {
      btn.textContent = btn.dataset.trackId === tracks[currentTrackIndex].id && isPlaying ? "Ⅱ" : "▶";
    });
    if (!isPlaying && !sleepTimerMinutes) document.body.classList.remove("audio-on");
  }

  async function ensureAudio() {
    if (!audioEngine) audioEngine = createAudioEngine(state.volume);
    await audioEngine.resume();
  }

  function createAudioEngine(volume = 0.7) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const master = ctx.createGain();
    master.gain.value = volume;
    master.connect(ctx.destination);

    let nodes = [];
    let currentTrack = null;
    let playing = false;
    let mediaEl = null;
    let sourceOut = null;

    function resume() { return ctx.state === "suspended" ? ctx.resume() : Promise.resolve(); }
    function setVolume(value) { master.gain.setTargetAtTime(value, ctx.currentTime, 0.08); }

    function getSources(track) {
      if (!track) return [];
      if (Array.isArray(track.srcs) && track.srcs.length) return track.srcs;
      return track.src ? [track.src] : [];
    }

    function stopNodes() {
      if (mediaEl) {
        try {
          mediaEl.pause();
          mediaEl.removeAttribute("src");
          mediaEl.load();
        } catch (_) {}
        mediaEl = null;
      }
      nodes.forEach(node => {
        try {
          if (node.stop) node.stop(ctx.currentTime + 0.05);
          if (node.disconnect) setTimeout(() => { try { node.disconnect(); } catch (_) {} }, 140);
        } catch (_) {}
      });
      nodes = [];
      sourceOut = null;
    }

    function setTrack(track) {
      currentTrack = track;
      if (playing) {
        stopNodes();
        buildTrack(track);
      }
    }

    function buildMediaTrack(track) {
      const sources = getSources(track);
      if (!sources.length) return false;

      sourceOut = ctx.createGain();
      sourceOut.gain.value = 0.0001;
      sourceOut.connect(master);
      sourceOut.gain.exponentialRampToValueAtTime(0.92, ctx.currentTime + 1.4);
      nodes.push(sourceOut);

      let sourceIndex = 0;

      const trySource = () => {
        if (!playing) return;
        if (mediaEl) {
          try { mediaEl.pause(); mediaEl.removeAttribute("src"); mediaEl.load(); } catch (_) {}
          mediaEl = null;
        }

        mediaEl = new Audio(sources[sourceIndex]);
        mediaEl.preload = "auto";
        mediaEl.loop = Boolean(track.loop);
        mediaEl.volume = 1;

        const mediaSource = ctx.createMediaElementSource(mediaEl);
        mediaSource.connect(sourceOut);
        nodes.push(mediaSource);

        mediaEl.addEventListener("ended", () => {
          playing = false;
          stopProgressTicker();
          updatePlayerButtons(false);
        }, { once: true });

        mediaEl.addEventListener("error", () => {
          sourceIndex += 1;
          if (sourceIndex < sources.length) {
            trySource();
          } else {
            playing = false;
            stopProgressTicker();
            updatePlayerButtons(false);
            console.warn("Audio introuvable :", track.id, sources);
            alert(`Le fichier audio de « ${titleOf(track)} » est introuvable. Vérifie le nom exact dans le dossier audio.`);
          }
        }, { once: true });

        mediaEl.play().catch(() => {
          playing = false;
          stopProgressTicker();
          updatePlayerButtons(false);
        });
      };

      trySource();
      return true;
    }

    function makeNoiseBuffer() {
      const length = ctx.sampleRate * 3;
      const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let last = 0;
      for (let i = 0; i < length; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.018 * white) / 1.018;
        data[i] = last * 0.55;
      }
      return buffer;
    }

    function slowLfo(targetParam, amount, seconds, offset = 0) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 1 / seconds;
      gain.gain.value = amount;
      osc.connect(gain).connect(targetParam);
      osc.start(ctx.currentTime + offset);
      nodes.push(osc, gain);
    }

    function buildGeneratedTrack(track) {
      const cfg = track.layers || { base: 82, second: 123, filter: 320, noise: 0.012, shimmer: 0 };
      const baseOut = ctx.createGain();
      baseOut.gain.value = 0.0001;
      baseOut.connect(master);
      baseOut.gain.exponentialRampToValueAtTime(0.32, ctx.currentTime + 2.4);
      nodes.push(baseOut);

      const freqs = [cfg.base, cfg.second, cfg.base * 0.5];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;

        osc.type = "sine";
        osc.frequency.value = Math.min(freq, 180);
        filter.type = "lowpass";
        filter.frequency.value = 360;
        filter.Q.value = 0.35;
        gain.gain.value = idx === 0 ? 0.022 : 0.009;
        osc.detune.value = (idx - 1) * 2;

        if (pan) {
          pan.pan.value = idx % 2 ? 0.18 : -0.18;
          osc.connect(filter).connect(gain).connect(pan).connect(baseOut);
          slowLfo(pan.pan, idx % 2 ? -0.08 : 0.08, 24 + idx * 8, idx * 0.25);
          nodes.push(pan);
        } else {
          osc.connect(filter).connect(gain).connect(baseOut);
        }

        osc.start();
        nodes.push(osc, gain, filter);
      });

      const noise = ctx.createBufferSource();
      noise.buffer = makeNoiseBuffer();
      noise.loop = true;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = Math.min(cfg.filter || 320, 420);
      filter.Q.value = 0.3;
      const noiseGain = ctx.createGain();
      noiseGain.gain.value = Math.min(cfg.noise || 0.012, 0.018);
      noise.connect(filter).connect(noiseGain).connect(baseOut);
      slowLfo(filter.frequency, 18, 26);
      noise.start();
      nodes.push(noise, filter, noiseGain);
    }

    function buildTrack(track) {
      if (track?.sound === "mp3" || track?.src || track?.srcs) {
        buildMediaTrack(track);
        return;
      }
      buildGeneratedTrack(track);
    }

    function play() {
      if (!currentTrack) currentTrack = tracks[0];
      if (playing) return;
      playing = true;
      buildTrack(currentTrack);
    }

    function pause() {
      if (!playing) return;
      playing = false;
      stopNodes();
    }

    function fadeOutAndPause(seconds = 10) {
      const previous = Math.max(master.gain.value, 0.0001);
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(previous, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + seconds);
      setTimeout(() => {
        pause();
        master.gain.setValueAtTime(state.volume, ctx.currentTime);
        updatePlayerButtons(false);
      }, seconds * 1000 + 150);
    }

    return { get playing() { return playing; }, resume, play, pause, setTrack, setVolume, fadeOutAndPause };
  }

  function setVolume(value) {
    state.volume = clamp(value, 0, 1);
    saveState();
    $("#volumeSlider").value = state.volume;
    if (audioEngine) audioEngine.setVolume(state.volume);
  }

  function startProgressTicker() {
    if (progressInterval || document.hidden) return;
    progressInterval = setInterval(() => {
      const key = todayKey();
      state.totalSeconds += 1;
      state.dailySeconds[key] = (state.dailySeconds[key] || 0) + 1;
      if (state.dailySeconds[key] >= 60) computeStreak();
      if (state.totalSeconds % 5 === 0) saveState();
      updateProgressUI();
    }, 1000);
  }

  function stopProgressTicker() {
    if (!progressInterval) return;
    clearInterval(progressInterval);
    progressInterval = null;
    saveState();
  }

  function computeStreak() {
    let count = 0;
    const date = new Date();
    for (let i = 0; i < 365; i++) {
      const key = todayKey(date);
      if ((state.dailySeconds[key] || 0) >= 60) count += 1;
      else if (i > 0) break;
      date.setDate(date.getDate() - 1);
    }
    state.streak = count;
  }

  function updateProgressUI() {
    const todaySeconds = state.dailySeconds[todayKey()] || 0;
    const goal = 10 * 60;
    const percent = Math.round(clamp((todaySeconds / goal) * 100, 0, 100));
    $("#dailyProgressCircle").textContent = `${percent}%`;
    $(".progress-ring")?.style.setProperty("--progress", percent);
    $("#dailyMinutes").textContent = Math.floor(todaySeconds / 60);
    $("#calmPercent").textContent = `${percent}%`;
    $("#totalMinutes").textContent = Math.floor(state.totalSeconds / 60);
    $("#streakDays").textContent = state.streak || 0;
    $("#favoriteCount").textContent = state.favorites.length;
    renderWeekBars();
  }

  function renderWeekBars() {
    const container = $("#weekBars");
    const locale = state.lang === "en" ? "en-US" : state.lang === "nl" ? "nl-NL" : "fr-FR";
    const formatter = new Intl.DateTimeFormat(locale, { weekday: "short" });
    const days = [];
    const date = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(date);
      d.setDate(date.getDate() - i);
      const seconds = state.dailySeconds[todayKey(d)] || 0;
      const height = clamp(Math.round((seconds / 600) * 118), 8, 118);
      days.push({ label: formatter.format(d).replace(".", "").slice(0, 3), height });
    }
    container.innerHTML = days.map(day => `<div class="week-day"><div class="week-bar" style="--h:${day.height}px"></div><span>${day.label}</span></div>`).join("");
  }

  function openTimerSheet() {
    $("#timerSheet").classList.add("open");
    $("#timerSheet").setAttribute("aria-hidden", "false");
    $$(".timer-options button").forEach(btn => btn.classList.toggle("active", Number(btn.dataset.timer) === sleepTimerMinutes));
  }

  function closeTimerSheet() {
    $("#timerSheet").classList.remove("open");
    $("#timerSheet").setAttribute("aria-hidden", "true");
  }

  function setSleepTimer(minutes) {
    sleepTimerMinutes = minutes;
    if (sleepTimer) clearTimeout(sleepTimer);
    sleepTimer = null;
    $$(".timer-options button").forEach(btn => btn.classList.toggle("active", Number(btn.dataset.timer) === minutes));
    $("#timerStatus").textContent = minutes ? `${minutes} ${t("minutes")}` : t("timerOff");
    if (minutes > 0) {
      sleepTimer = setTimeout(() => {
        if (audioEngine?.playing) audioEngine.fadeOutAndPause(12);
        stopProgressTicker();
        sleepTimerMinutes = 0;
        $("#timerStatus").textContent = t("timerOff");
      }, minutes * 60 * 1000);
      $("#currentTrackMeta").textContent = `${minutesLabel(tracks[currentTrackIndex])} · ${t("timerSet")} ${minutes} ${t("minutes")}`;
    } else {
      $("#currentTrackMeta").textContent = minutesLabel(tracks[currentTrackIndex]);
    }
  }

  function setBreathPattern(patternName) {
    breath.patternName = patternName;
    $$(".preset").forEach(btn => btn.classList.toggle("active", btn.dataset.pattern === patternName));
    if (breath.running) startBreath();
    else {
      breath.remaining = getPattern(patternName)[0].seconds;
      setBreathDisplay("inhale", breath.remaining);
    }
  }

  function getPattern(patternName) {
    if (patternName === "4-7-8") return [
      { key: "inhale", seconds: 4 }, { key: "hold", seconds: 7 }, { key: "exhale", seconds: 8 }
    ];
    if (patternName === "5-5") return [
      { key: "inhale", seconds: 5 }, { key: "exhale", seconds: 5 }
    ];
    return [
      { key: "inhale", seconds: 4 }, { key: "hold", seconds: 4 }, { key: "exhale", seconds: 6 }
    ];
  }

  function currentBreathPhaseKey() {
    return breath.phases[breath.phaseIndex]?.key || "inhale";
  }

  function toggleBreath() {
    if (breath.running) stopBreath();
    else startBreath();
  }

  function startBreath() {
    stopBreath(false);
    breath.running = true;
    breath.phases = getPattern(breath.patternName);
    breath.phaseIndex = 0;
    $("#breathToggle").textContent = t("pause");
    tickBreathPhase();
  }

  function stopBreath(resetText = true) {
    breath.running = false;
    clearInterval(breath.timer);
    clearTimeout(breath.emergencyTimeout);
    breath.timer = null;
    if (resetText) $("#breathToggle").textContent = t("startBreath");
  }

  function tickBreathPhase() {
    const phase = breath.phases[breath.phaseIndex];
    breath.remaining = phase.seconds;
    setBreathDisplay(phase.key, breath.remaining);
    clearInterval(breath.timer);
    breath.timer = setInterval(() => {
      breath.remaining -= 1;
      if (breath.remaining <= 0) {
        breath.phaseIndex = (breath.phaseIndex + 1) % breath.phases.length;
        tickBreathPhase();
      } else {
        setBreathDisplay(phase.key, breath.remaining);
      }
    }, 1000);
  }

  function setBreathDisplay(phaseKey, seconds) {
    const names = t("phaseNames") || I18N.fr.phaseNames;
    $("#breathPhase").textContent = names[phaseKey] || names.inhale;
    $("#breathCount").textContent = seconds;
    const orb = $("#breathOrb");
    orb.classList.remove("inhale", "hold", "exhale");
    orb.classList.add(phaseKey);
    $("#phaseIn").classList.toggle("active", phaseKey === "inhale");
    $("#phaseHold").classList.toggle("active", phaseKey === "hold");
    $("#phaseOut").classList.toggle("active", phaseKey === "exhale");
  }

  function startEmergencyBreath() {
    showScreen("breathe");
    setBreathPattern("4-4-6");
    startBreath();
    $("#emergencyBtn").textContent = t("sosRunning");
    clearTimeout(breath.emergencyTimeout);
    breath.emergencyTimeout = setTimeout(() => {
      stopBreath();
      $("#emergencyBtn").textContent = t("sos60");
    }, 60000);
  }

  return { init };
})();

document.addEventListener("DOMContentLoaded", Zenora.init);
