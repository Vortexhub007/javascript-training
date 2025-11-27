/*Exercice 6 - Les Jeux Vidéo du Calendrier PixelBay
Tags : for, loop, template strings
Objectif : Comprendre et appliquer la boucle for, les tableaux et les chaînes de caractères modèle (template strings).
Contexte : PixelBay crée un calendrier marketing où chaque mois est associé à un jeu vidéo phare pour les promotions mensuelles.
Énoncé :
Chez PixelBay, chaque mois de l'année est associé à un jeu vidéo phare. Votre mission est de créer un calendrier pour le magasin qui affiche le jeu vidéo associé à chaque mois.
Vous devez utiliser la boucle for pour parcourir le tableau des jeux et afficher un message pour chaque mois en utilisant le template string.*/

// === CALENDRIER MARKETING PIXELBAY ===

console.log("=== 🎮 Calendrier Marketing PixelBay 2024 ===\n");

// === DONNÉES : MOIS ET JEUX ===

// Tableau des 12 mois de l'année
const mois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
];

// Tableau des jeux phares (1 jeu par mois)
const jeuxPhares = [
  "The Legend of Zelda: Tears of the Kingdom",
  "FIFA 24",
  "Minecraft Legends",
  "Resident Evil 4 Remake",
  "The Last of Us Part II",
  "Street Fighter 6",
  "Final Fantasy XVI",
  "Baldur's Gate 3",
  "Starfield",
  "Spider-Man 2",
  "Call of Duty: Modern Warfare III",
  "Cyberpunk 2077: Phantom Liberty"
];

console.log(`Nombre de mois : ${mois.length}`);
console.log(`Nombre de jeux phares : ${jeuxPhares.length}`);

// === AFFICHAGE DU CALENDRIER ===

console.log(`Planning promotionnel de l'année : `);

// Parcourir les 12 mois avec une boucle for
for (let i = 0; i < mois.length; i++) {
  // Utilisation du template string pour un affichage élégant
  console.log(` ${mois[i]} : ${jeuxPhares[i]}`);
}

console.log(`=== Fin du calendrier ===`);
console.log(``);


// === STATISTIQUES BONUS ===
console.log(`Statistiques :`);
console.log(`Tous les mois sont couverts : ${mois.length === 12 ? "Oui" : "Non"}`);
console.log(`Un jeu par mois : ${mois.length === jeuxPhares.length ? "Oui" : "Non"}`);


/*## 📊 Résultat dans la Console

=== 🎮 Calendrier Marketing PixelBay 2024 ===

📋 Nombre de mois : 12
🎮 Nombre de jeux phares : 12

📅 Planning promotionnel de l'année :

🗓️  Janvier : The Legend of Zelda: Tears of the Kingdom
🗓️  Février : FIFA 24
🗓️  Mars : Minecraft Legends
🗓️  Avril : Resident Evil 4 Remake
🗓️  Mai : The Last of Us Part II
🗓️  Juin : Street Fighter 6
🗓️  Juillet : Final Fantasy XVI
🗓️  Août : Baldur's Gate 3
🗓️  Septembre : Starfield
🗓️  Octobre : Spider-Man 2
🗓️  Novembre : Call of Duty: Modern Warfare III
🗓️  Décembre : Cyberpunk 2077: Phantom Liberty

=== Fin du calendrier ===

📊 Statistiques :
✅ Tous les mois sont couverts : Oui
✅ Un jeu par mois : Oui*/