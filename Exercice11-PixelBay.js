/*Exercice 11 - La Bataille de Popularité des Jeux Vidéo
Tags : object, properties, methods

Objectif : Comprendre et manipuler des objets en JavaScript.

Contexte : PixelBay compare deux jeux vidéo phares de sa collection pour déterminer lequel est le plus populaire selon une formule de popularité.

Énoncé :

Concevez deux objets représentant deux jeux vidéo. Chaque objet doit inclure :

Titre, Année de Sortie, Genre, Score
affichage() : Affiche toutes les informations du jeu
getPopularite() : Calcule la popularité : (score * année de sortie) / 100
Ensuite, comparez les popularités des deux jeux et affichez le plus populaire avec ses informations complètes et son score de popularité.*/

// === LA BATAILLE DE POPULARITÉ PIXELBAY ===

console.log("=== Bataille de Popularité des Jeux Vidéo ===");

// ============================================
// CRÉATION DU PREMIER JEU
// ============================================

const jeu1 = {
  // PROPRIÉTÉS (données du jeu)
  titre: "The Legend of Zelda: Tears of the Kingdom",
  anneeSortie: 2023,
  genre: "Action-Aventure",
  score: 96,

  // MÉTHODE 1 : Affichage complet des informations
  affichage: function () {
    console.log("╔═══════════════════════════════════════════════╗");
    console.log("║            INFORMATIONS DU JEU                ║");
    console.log("╠═══════════════════════════════════════════════╣");
    console.log(`║ Titre       : ${this.titre.padEnd(31)} ║`);
    console.log(`║ Année       : ${String(this.anneeSortie).padEnd(31)} ║`);
    console.log(`║ Genre       : ${this.genre.padEnd(31)} ║`);
    console.log(`║ Score       : ${String(this.score).padEnd(31)}/100 ║`);
    console.log("╚═══════════════════════════════════════════════╝");
  },

  // MÉTHODE 2 : Calcul de la popularité
  getPopularite: function () {
    // Formule : (score × année de sortie) / 100
    const popularite = (this.score * this.anneeSortie) / 100;
    return popularite;
  },
};

// ============================================
// CRÉATION DU DEUXIÈME JEU
// ============================================

const jeu2 = {
  titre: "Baldur's Gate 3",
  anneeSortie: 2023,
  genre: "RPG",
  score: 97,

  affichage: function () {
    console.log("╔═══════════════════════════════════════════════╗");
    console.log("║            INFORMATIONS DU JEU                ║");
    console.log("╠═══════════════════════════════════════════════╣");
    console.log(`║ Titre       : ${this.titre.padEnd(31)} ║`);
    console.log(`║ Année       : ${String(this.anneeSortie).padEnd(31)} ║`);
    console.log(`║ Genre       : ${this.genre.padEnd(31)} ║`);
    console.log(`║ Score       : ${String(this.score).padEnd(31)}/100 ║`);
    console.log("╚═══════════════════════════════════════════════╝");
  },

  getPopularite: function () {
    const popularite = (this.score * this.anneeSortie) / 100;
    return popularite;
  },
};

// ============================================
// AFFICHAGE DES DEUX JEUX
// ============================================

console.log("JEU 1 :");
jeu1.affichage();
const popularite1 = jeu1.getPopularite();
console.log(`Score de popularité : ${popularite1.toFixed(2)}`);

console.log("=".repeat(50) + "\n");

console.log("JEU 2 :");
jeu2.affichage();
const popularite2 = jeu2.getPopularite();
console.log(`Score de popularité : ${popularite2.toFixed(2)}`);

console.log("=".repeat(50) + "\n");

// ============================================
// COMPARAISON DES POPULARITÉS
// ============================================

console.log("COMPARAISON DES POPULARITÉS");

console.log(`${jeu1.titre} : ${popularite1.toFixed(2)}`);
console.log(`${jeu2.titre} : ${popularite2.toFixed(2)}`);

// Déterminer le gagnant
let jeuGagnant;
let populariteMax;

if (popularite1 > popularite2) {
  jeuGagnant = jeu1;
  populariteMax = popularite1;
} else if (popularite2 > popularite1) {
  jeuGagnant = jeu2;
  populariteMax = popularite2;
} else {
  console.log("ÉGALITÉ ! Les deux jeux ont la même popularité.");
  console.log("=== Fin de la bataille ===");
  // Arrêter le script si égalité
  process.exit();
}

// ============================================
// AFFICHAGE DU GAGNANT
// ============================================

console.log("LE GAGNANT EST :");
jeuGagnant.affichage();
console.log(`Score de popularité : ${populariteMax.toFixed(2)}`);

// Calcul de la différence
const difference = Math.abs(popularite1 - popularite2);
console.log(`Différence : ${difference.toFixed(2)} points`);

console.log("=== Fin de la bataille ===");

/* ## 📊 Résultat dans la Console

=== 🎮 Bataille de Popularité des Jeux Vidéo ===

🎮 JEU 1 :

╔═══════════════════════════════════════════════╗
║            INFORMATIONS DU JEU                ║
╠═══════════════════════════════════════════════╣
║ Titre       : The Legend of Zelda: Tears of the Kingdom ║
║ Année       : 2023                            ║
║ Genre       : Action-Aventure                 ║
║ Score       : 96                              /100 ║
╚═══════════════════════════════════════════════╝
📊 Score de popularité : 1942.08

==================================================

🎮 JEU 2 :

╔═══════════════════════════════════════════════╗
║            INFORMATIONS DU JEU                ║
╠═══════════════════════════════════════════════╣
║ Titre       : Baldur's Gate 3                 ║
║ Année       : 2023                            ║
║ Genre       : RPG                             ║
║ Score       : 97                              /100 ║
╚═══════════════════════════════════════════════╝
📊 Score de popularité : 1962.31

==================================================

⚔️ COMPARAISON DES POPULARITÉS

The Legend of Zelda: Tears of the Kingdom : 1942.08
Baldur's Gate 3 : 1962.31

🏆 LE GAGNANT EST :

╔═══════════════════════════════════════════════╗
║            INFORMATIONS DU JEU                ║
╠═══════════════════════════════════════════════╣
║ Titre       : Baldur's Gate 3                 ║
║ Année       : 2023                            ║
║ Genre       : RPG                             ║
║ Score       : 97                              /100 ║
╚═══════════════════════════════════════════════╝

⭐ Score de popularité : 1962.31
📈 Différence : 20.23 points

=== Fin de la bataille === */
