# ZENORA — Immersive Calm V2

Version complète du projet ZENORA, basée sur la première app déjà commencée et améliorée pour être plus premium, plus mobile et plus cohérente.

## Ce qui change dans la V2

- Langue corrigée : l'app démarre en français par défaut avec traduction complète FR / EN / NL.
- Nouveau stockage `zenora.state.v2` pour éviter que l'ancienne version reste bloquée en anglais dans le navigateur.
- Design plus compact : moins de scroll, cartes plus basses, navigation fixe mieux espacée.
- Nouveau module **Météo intérieure** : l'utilisateur choisit son état du moment et ZENORA recommande une session adaptée.
- Nouveau module **AuraLab** : ambiance générative immédiate sans fichier MP3.
- Sons génératifs WebAudio : l'app fonctionne même sans fichiers audio externes.
- Minuteur sommeil avec fondu progressif.
- Respiration guidée 4-4-6, 4-7-8, 5-5 + mode calme immédiat 60 secondes.
- Progression locale, favoris, série et activité hebdomadaire.
- Icônes PWA recréées.
- Service worker mis à jour pour éviter le cache de la V1.

## Fichiers inclus

- `index.html` : structure complète de l'application
- `style.css` : design mobile premium sombre, glassmorphism, aurora, orb animé
- `script.js` : navigation, traduction, audio génératif, respiration, progression, minuteur
- `manifest.webmanifest` : installation PWA Android/iOS
- `sw.js` : cache hors-ligne
- `icons/` : icônes PWA 192 et 512 px
- `audio/` : dossier prévu pour ajouter de vrais MP3 plus tard

## Déploiement sur Vercel ou GitHub Pages

Envoyez tous les fichiers à la racine du projet, puis redéployez.

Après déploiement, si l'ancienne version reste affichée sur Android :
1. Ouvrir le site dans Chrome.
2. Aller dans les paramètres du site.
3. Effacer les données du site.
4. Recharger.

La V2 utilise un nouveau cache, mais Android peut parfois garder une ancienne PWA installée.

## Ajouter vos sons MP3 plus tard

Cette version fonctionne sans MP3 grâce à WebAudio. Pour utiliser vos propres sons :
1. Ajoutez vos fichiers dans `audio/`.
2. Ajoutez une propriété `src: "audio/nom-du-son.mp3"` dans les objets `tracks` dans `script.js`.
3. Remplacez ou adaptez le moteur audio selon vos fichiers.

## Note importante

ZENORA est une app de bien-être et de relaxation. Elle ne remplace pas un professionnel de santé ni un service d'urgence.


## Audio ajouté
- `audio/halodouxremastered.mp3`
- piste intégrée : Halo doux
- durée détectée du fichier : environ 6:04

Après déploiement, si l’ancienne app apparaît encore, vider le cache/la PWA sur le téléphone.
