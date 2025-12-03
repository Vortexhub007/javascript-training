/*Exercice 13 - Analyse Avancée de la Collection
Tags : function, object, reduce(), method

Objectif : Manipuler un tableau d'objets pour gérer une collection.

Contexte : PixelBay souhaite analyser sa collection de jeux en détail. L'équipe a besoin d'afficher les jeux individuellement, de consulter toute la collection, et surtout de calculer les scores moyens pour évaluer la qualité des jeux.

Énoncé :

Implémentez :

afficherJeu(jeu): Affiche les détails d'un jeu
afficherCollection(collection): Affiche tous les jeux
calculerMoyenneScore(jeu): Moyenne des scores d'un jeu
calculerMoyenneScoresCollection(collection): Moyenne de la collection*/

// === ANALYSE AVANCÉE DE LA COLLECTION PIXELBAY ===

console.log("=== 🎮 Analyse Avancée de la Collection PixelBay ===\n");

// ============================================
// FONCTION 1 : AFFICHER UN JEU INDIVIDUEL
// ============================================

function afficherJeu(jeu) {
  console.log("╔═════════════════════════════════════════════════════╗");
  console.log("║            FICHE DÉTAILLÉE DU JEU                   ║");
  console.log("╠═════════════════════════════════════════════════════╣");

  // Informations de base
  console.log(`║ Titre        : ${jeu.titre.padEnd(33)} ║`);
  console.log(`║ Année        : ${String(jeu.anneeSortie).padEnd(33)} ║`);
  console.log(`║ Genre        : ${jeu.genre.padEnd(33)} ║`);
  console.log(`║ Plateforme   : ${jeu.plateforme.padEnd(33)} ║`);

  // Scores individuels
  console.log("║ Scores       :                                      ║");
  jeu.scores.forEach((score, index) => {
    const critique = `Critique ${index + 1}`;
    console.log(
      `║    ${critique.padEnd(13)}: ${String(score).padEnd(33)}/100 ║`
    );
  });

  // Moyenne des scores
  const moyenne = calculerMoyenneScore(jeu);
  console.log("╠═════════════════════════════════════════════════════╣");
  console.log(`║ Moyenne      : ${moyenne.toFixed(2).padEnd(33)}/100 ║`);
  console.log("╚═════════════════════════════════════════════════════╝");
}

// ============================================
// FONCTION 2 : AFFICHER TOUTE LA COLLECTION
// ============================================

function afficherCollection(collection) {
  console.log("╔═══════════════════════════════════════════════════════╗");
  console.log("║              COLLECTION COMPLÈTE                      ║");
  console.log("╠═══════════════════════════════════════════════════════╣");
  console.log(`║ Nombre de jeux : ${String(collection.length).padEnd(37)} ║`);
  console.log("╚═══════════════════════════════════════════════════════╝\n");

  // Afficher chaque jeu
  collection.forEach((jeu, index) => {
    console.log(`\n${index + 1}. ${jeu.titre.toUpperCase()}\n`);

    const moyenne = calculerMoyenneScore(jeu);

    console.log(` Année : ${jeu.anneeSortie}`);
    console.log(` Genre : ${jeu.genre}`);
    console.log(` Plateforme : ${jeu.plateforme}`);
    console.log(` Scores : [${jeu.scores.join(", ")}]`);
    console.log(` Moyenne : ${moyenne.toFixed(2)}/100`);

    // Barre de progression visuelle
    const barreLength = Math.round(moyenne / 2); // Sur 50 caractères
    const barre = "█".repeat(barreLength) + "░".repeat(50 - barreLength);
    console.log(`   ${barre} ${moyenne.toFixed(1)}%`);
  });
}

// ============================================
// FONCTION 3 : CALCULER LA MOYENNE D'UN JEU
// ============================================

function calculerMoyenneScore(jeu) {
  // Utiliser reduce() pour additionner tous les scores
  const sommeScores = jeu.scores.reduce((accumulateur, score) => {
    return accumulateur + score;
  }, 0);

  // Diviser par le nombre de scores
  const moyenne = sommeScores / jeu.scores.length;

  return moyenne;
}

// ============================================
// FONCTION 4 : MOYENNE DE LA COLLECTION
// ============================================

function calculerMoyenneScoresCollection(collection) {
  // Méthode 1 : Calculer la moyenne de chaque jeu, puis la moyenne des moyennes
  const sommeMoyennes = collection.reduce((accumulateur, jeu) => {
    const moyenneJeu = calculerMoyenneScore(jeu);
    return accumulateur + moyenneJeu;
  }, 0);

  const moyenneCollection = sommeMoyennes / collection.length;

  return moyenneCollection;
}

// ============================================
// FONCTIONS BONUS : ANALYSES SUPPLÉMENTAIRES
// ============================================

function statistiquesDetaillees(collection) {
  console.log("╔═══════════════════════════════════════════════════════╗");
  console.log("║           STATISTIQUES DÉTAILLÉES                     ║");
  console.log("╠═══════════════════════════════════════════════════════╣");

  // Moyenne générale
  const moyenneGenerale = calculerMoyenneScoresCollection(collection);
  console.log(
    `║ Moyenne générale : ${moyenneGenerale.toFixed(2).padEnd(31)}/100 ║`
  );

  // Meilleur jeu
  const meilleurJeu = collection.reduce((max, jeu) => {
    const moyenneJeu = calculerMoyenneScore(jeu);
    const moyenneMax = calculerMoyenneScore(max);
    return moyenneJeu > moyenneMax ? jeu : max;
  });
  const meilleureMoyenne = calculerMoyenneScore(meilleurJeu);
  console.log(`║ Meilleur jeu   : ${meilleurJeu.titre.padEnd(31)} ║`);
  console.log(
    `║ Score          : ${meilleureMoyenne.toFixed(2).padEnd(31)}/100 ║`
  );

  // Pire jeu
  const pireJeu = collection.reduce((min, jeu) => {
    const moyenneJeu = calculerMoyenneScore(jeu);
    const moyenneMin = calculerMoyenneScore(min);
    return moyenneJeu < moyenneMin ? jeu : min;
  });
  const pireMoyenne = calculerMoyenneScore(pireJeu);
  console.log(`║ Jeu le moins bien noté : ${pireJeu.titre.padEnd(21)} ║`);
  console.log(`║ Score          : ${pireMoyenne.toFixed(2).padEnd(31)}/100 ║`);

  // Nombre total de critiques
  const totalCritiques = collection.reduce(
    (acc, jeu) => acc + jeu.scores.length,
    0
  );
  console.log(`║ Total critiques : ${String(totalCritiques).padEnd(30)} ║`);

  // Score le plus élevé toutes critiques confondues
  const tousLesScores = collection.reduce(
    (acc, jeu) => acc.concat(jeu.scores),
    []
  );
  const scoreMax = Math.max(...tousLesScores);
  const scoreMin = Math.min(...tousLesScores);
  console.log(`║ Score maximum  : ${String(scoreMax).padEnd(31)}/100 ║`);
  console.log(`║ Score minimum  : ${String(scoreMin).padEnd(31)}/100 ║`);

  console.log("╚═════════════════════════════════════════════════════╝");
}

function trouverJeuxParQualite(collection) {
  const excellent = [];
  const tresBon = [];
  const bon = [];
  const moyen = [];

  collection.forEach((jeu) => {
    const moyenne = calculerMoyenneScore(jeu);

    if (moyenne >= 95) {
      excellent.push(jeu);
    } else if (moyenne >= 90) {
      tresBon.push(jeu);
    } else if (moyenne >= 80) {
      bon.push(jeu);
    } else {
      moyen.push(jeu);
    }
  });

  console.log("\nRÉPARTITION PAR QUALITÉ :\n");
  console.log(`Excellent (≥95) : ${excellent.length} jeu(x)`);
  excellent.forEach((j) =>
    console.log(` • ${j.titre} (${calculerMoyenneScore(j).toFixed(1)})`)
  );

  console.log(`\nTrès bon (90-94) : ${tresBon.length} jeu(x)`);
  tresBon.forEach((j) =>
    console.log(` • ${j.titre} (${calculerMoyenneScore(j).toFixed(1)})`)
  );

  console.log(`\nBon (80-89) : ${bon.length} jeu(x)`);
  bon.forEach((j) =>
    console.log(` • ${j.titre} (${calculerMoyenneScore(j).toFixed(1)})`)
  );

  console.log(`\nMoyen (<80) : ${moyen.length} jeu(x)`);
  moyen.forEach((j) =>
    console.log(` • ${j.titre} (${calculerMoyenneScore(j).toFixed(1)})`)
  );
}

// ============================================
// CRÉATION DE LA COLLECTION
// ============================================

const collection = [
  {
    titre: "The Legend of Zelda: Tears of the Kingdom",
    anneeSortie: 2023,
    genre: "Action-Aventure",
    plateforme: "Nintendo Switch",
    scores: [96, 97, 95, 98, 96], // Notes de 5 critiques
  },
  {
    titre: "Baldur's Gate 3",
    anneeSortie: 2023,
    genre: "RPG",
    plateforme: "PC / PS5",
    scores: [97, 96, 98, 97, 95],
  },
  {
    titre: "Elden Ring",
    anneeSortie: 2022,
    genre: "Action-RPG",
    plateforme: "Multi",
    scores: [96, 97, 94, 95, 96],
  },
  {
    titre: "Red Dead Redemption 2",
    anneeSortie: 2018,
    genre: "Action-Aventure",
    plateforme: "Multi",
    scores: [97, 98, 96, 97, 99],
  },
  {
    titre: "The Last of Us Part II",
    anneeSortie: 2020,
    genre: "Action-Aventure",
    plateforme: "PS4 / PS5",
    scores: [93, 94, 91, 95, 92],
  },
];

// ============================================
// TESTS DES FONCTIONS
// ============================================

console.log("TEST 1 : AFFICHAGE D'UN JEU INDIVIDUEL\n");
afficherJeu(collection[0]);

console.log("\n" + "=".repeat(60) + "\n");

console.log("TEST 2 : AFFICHAGE DE LA COLLECTION COMPLÈTE\n");
afficherCollection(collection);

console.log("\n" + "=".repeat(60) + "\n");

console.log("TEST 3 : CALCUL DE LA MOYENNE D'UN JEU\n");
const jeuTest = collection[1]; // Baldur's Gate 3
const moyenneJeuTest = calculerMoyenneScore(jeuTest);
console.log(`Moyenne de "${jeuTest.titre}" :`);
console.log(`Scores : [${jeuTest.scores.join(", ")}]`);
console.log(`Moyenne : ${moyenneJeuTest.toFixed(2)}/100`);

console.log("\n" + "=".repeat(60) + "\n");

console.log("TEST 4 : MOYENNE DE LA COLLECTION\n");
const moyenneCollection = calculerMoyenneScoresCollection(collection);
console.log(
  `Moyenne générale de la collection : ${moyenneCollection.toFixed(2)}/100`
);

console.log("\n" + "=".repeat(60) + "\n");

console.log("ANALYSES SUPPLÉMENTAIRES\n");
statistiquesDetaillees(collection);

console.log("\n" + "=".repeat(60) + "\n");

trouverJeuxParQualite(collection);

console.log("\n=== Fin de l'analyse ===");
