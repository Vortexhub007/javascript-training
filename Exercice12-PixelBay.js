/*Exercice 12 - Programmation de la Collection de Jeux
Tags : function, object, reduce(), method

Objectif : Manipuler des objets et des tableaux.

Contexte : PixelBay gère deux types de collections : les jeux rétro (classiques) et les jeux modernes. L'équipe a besoin de fonctions pour créer les jeux, afficher les listes, et analyser les collections pour mieux comprendre l'évolution des années de sortie.

Énoncé :

Créer des Jeux : Fonction creerJeu pour créer des objets de jeu.
Afficher la Collection : Fonction afficherListeJeux qui affiche les détails.
Analyser la Collection : Fonction calculerMoyenneAnneesSortie avec reduce().*/

// === COLLECTION DE JEUX PIXELBAY ===

console.log("=== Gestion de la Collection de Jeux PixelBay ===\n");

// ============================================
// FONCTION 1 : CRÉER UN JEU
// ============================================

function creerJeu(titre, anneeSortie, genre, plateforme, score) {
  // Retourne un objet représentant un jeu vidéo
  return {
    titre: titre,
    anneeSortie: anneeSortie,
    genre: genre,
    plateforme: plateforme,
    score: score,
    
    // Méthode pour afficher un jeu individuel
    afficher() {
      console.log(`${this.titre}`);
      console.log(` Année : ${this.anneeSortie}`);
      console.log(` Genre : ${this.genre}`);
      console.log(` Plateforme : ${this.plateforme}`);
      console.log(` Score : ${this.score}/100`);
    }
  };
}

// ============================================
// FONCTION 2 : AFFICHER LA LISTE DES JEUX
// ============================================

function afficherListeJeux(jeux, nomCollection) {
  console.log(`╔${"═".repeat(50)}╗`);
  console.log(`║  ${nomCollection.padEnd(46)}  ║`);
  console.log(`╠${"═".repeat(50)}╣`);
  console.log(`║  Nombre de jeux : ${String(jeux.length).padEnd(30)} ║`);
  console.log(`╚${"═".repeat(50)}╝\n`);
  
  // Parcourir et afficher chaque jeu
  jeux.forEach((jeu, index) => {
    console.log(`${index + 1}. ${jeu.titre} (${jeu.anneeSortie})`);
    console.log(`   Genre : ${jeu.genre} | Plateforme : ${jeu.plateforme} | Score : ${jeu.score}/100`);
    console.log(""); // Ligne vide
  });
}

// ============================================
// FONCTION 3 : CALCULER LA MOYENNE DES ANNÉES
// ============================================

function calculerMoyenneAnneesSortie(jeux) {
  // Utiliser reduce() pour faire la somme des années
  const sommeAnnees = jeux.reduce((accumulateur, jeu) => {
    return accumulateur + jeu.anneeSortie;
  }, 0); // 0 = valeur initiale de l'accumulateur
  
  // Calculer la moyenne
  const moyenne = sommeAnnees / jeux.length;
  
  return moyenne;
}

// ============================================
// FONCTION BONUS : ANALYSER LA COLLECTION
// ============================================

function analyserCollection(jeux, nomCollection) {
  console.log(`ANALYSE DE "${nomCollection}"`);
  
  // Moyenne des années
  const moyenneAnnees = calculerMoyenneAnneesSortie(jeux);
  console.log(`Année moyenne de sortie : ${moyenneAnnees.toFixed(0)}`);
  
  // Jeu le plus ancien
  const plusAncien = jeux.reduce((min, jeu) => 
    jeu.anneeSortie < min.anneeSortie ? jeu : min
  );
  console.log(`Jeu le plus ancien : ${plusAncien.titre} (${plusAncien.anneeSortie})`);
  
  // Jeu le plus récent
  const plusRecent = jeux.reduce((max, jeu) => 
    jeu.anneeSortie > max.anneeSortie ? jeu : max
  );
  console.log(`Jeu le plus récent : ${plusRecent.titre} (${plusRecent.anneeSortie})`);
  
  // Score moyen
  const moyenneScores = jeux.reduce((acc, jeu) => acc + jeu.score, 0) / jeux.length;
  console.log(`Score moyen : ${moyenneScores.toFixed(0)}/100`);
  
  // Meilleur jeu (score max)
  const meilleurJeu = jeux.reduce((max, jeu) => 
    jeu.score > max.score ? jeu : max
  );
  console.log(`Meilleur jeu : ${meilleurJeu.titre} (${meilleurJeu.score}/100)`);
  
  console.log("");
}

// ============================================
// CRÉATION DES COLLECTIONS
// ============================================

// Collection 1 : Jeux Rétro (1985-2000)
const jeuxRetro = [
  creerJeu("Super Mario Bros", 1985, "Plateforme", "NES", 94),
  creerJeu("The Legend of Zelda", 1986, "Action-Aventure", "NES", 95),
  creerJeu("Final Fantasy VII", 1997, "RPG", "PlayStation", 92),
  creerJeu("GoldenEye 007", 1997, "FPS", "Nintendo 64", 88),
  creerJeu("Half-Life", 1998, "FPS", "PC", 96)
];

// Collection 2 : Jeux Modernes (2017-2023)
const jeuxModernes = [
  creerJeu("The Legend of Zelda: Breath of the Wild", 2017, "Action-Aventure", "Switch", 97),
  creerJeu("Red Dead Redemption 2", 2018, "Action-Aventure", "Multi", 97),
  creerJeu("The Last of Us Part II", 2020, "Action-Aventure", "PS4/PS5", 93),
  creerJeu("Elden Ring", 2022, "Action-RPG", "Multi", 96),
  creerJeu("Baldur's Gate 3", 2023, "RPG", "Multi", 96)
];

// ============================================
// AFFICHAGE DES COLLECTIONS
// ============================================

console.log("COLLECTION RÉTRO");
afficherListeJeux(jeuxRetro, "JEUX RÉTRO (1985-2000)");

console.log("=".repeat(60));

console.log("COLLECTION MODERNE");
afficherListeJeux(jeuxModernes, "JEUX MODERNES (2017-2023)");

console.log("=".repeat(60));

// ============================================
// ANALYSES DES COLLECTIONS
// ============================================

analyserCollection(jeuxRetro, "JEUX RÉTRO");
console.log("=".repeat(60));

analyserCollection(jeuxModernes, "JEUX MODERNES");
console.log("=".repeat(60));

// ============================================
// COMPARAISON DES DEUX COLLECTIONS
// ============================================

console.log("COMPARAISON DES COLLECTIONS");

const moyenneRetro = calculerMoyenneAnneesSortie(jeuxRetro);
const moyenneModerne = calculerMoyenneAnneesSortie(jeuxModernes);

console.log(`Année moyenne (Rétro) : ${moyenneRetro.toFixed(0)}`);
console.log(`Année moyenne (Moderne) : ${moyenneModerne.toFixed(0)}`);
console.log(`Écart temporel : ${(moyenneModerne - moyenneRetro).toFixed(0)} ans`);

const scoresMoyenRetro = jeuxRetro.reduce((acc, jeu) => acc + jeu.score, 0) / jeuxRetro.length;
const scoresMoyenModerne = jeuxModernes.reduce((acc, jeu) => acc + jeu.score, 0) / jeuxModernes.length;

console.log(`Score moyen (Rétro) : ${scoresMoyenRetro.toFixed(1)}/100`);
console.log(`Score moyen (Moderne) : ${scoresMoyenModerne.toFixed(1)}/100`);

if (scoresMoyenModerne > scoresMoyenRetro) {
  console.log("Les jeux modernes ont un meilleur score en moyenne");
} else {
  console.log("Les jeux rétro ont un meilleur score en moyenne");
}

console.log("=== Fin de l'analyse ===");


/* ## 📊 Résultat dans la Console (extrait)

=== 🎮 Gestion de la Collection de Jeux PixelBay ===

🕹️  COLLECTION RÉTRO

╔══════════════════════════════════════════════════╗
║  JEUX RÉTRO (1985-2000)                          ║
╠══════════════════════════════════════════════════╣
║  Nombre de jeux : 5                              ║
╚══════════════════════════════════════════════════╝

1. Super Mario Bros (1985)
   Genre : Plateforme | Plateforme : NES | Score : 94/100

2. The Legend of Zelda (1986)
   Genre : Action-Aventure | Plateforme : NES | Score : 95/100

3. Final Fantasy VII (1997)
   Genre : RPG | Plateforme : PlayStation | Score : 92/100

4. GoldenEye 007 (1997)
   Genre : FPS | Plateforme : Nintendo 64 | Score : 88/100

5. Half-Life (1998)
   Genre : FPS | Plateforme : PC | Score : 96/100

============================================================

📊 ANALYSE DE "JEUX RÉTRO"

📅 Année moyenne de sortie : 1992.6
🕰️  Jeu le plus ancien : Super Mario Bros (1985)
🆕 Jeu le plus récent : Half-Life (1998)
⭐ Score moyen : 93.0/100
🏆 Meilleur jeu : Half-Life (96/100)

============================================================

⚖️  COMPARAISON DES COLLECTIONS

Année moyenne (Rétro) : 1992.6
Année moyenne (Moderne) : 2020.0
Écart temporel : 27.4 ans

Score moyen (Rétro) : 93.0/100
Score moyen (Moderne) : 95.8/100
📈 Les jeux modernes ont un meilleur score en moyenne

=== Fin de l'analyse === */