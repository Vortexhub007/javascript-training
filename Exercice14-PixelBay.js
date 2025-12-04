/* Exercice 14 - Filtrage de la Collection
Tags : array, filter(), method

Objectif : Apprendre à utiliser la méthode filter sur un tableau d'objets.

Contexte : PixelBay souhaite filtrer sa collection de jeux pour proposer des recommandations ciblées. Le magasin a besoin de chercher les jeux modernes (sortis après une certaine année) et les jeux par genre (par exemple tous les jeux d'aventure).

Énoncé :

Développez :

Filtrer par Année : Sélectionner les jeux sortis après une certaine année
Filtrer par Genre : Sélectionner les jeux d'un genre spécifique */


function filtrerParAnnee(collection, anneeMin) {
  const jeuxFiltres = collection.filter(jeu => {
    return jeu.anneeSortie >= anneeMin;
  });
  
  return jeuxFiltres;
}

function filtrerParGenre(collection, genreRecherche) {
  const jeuxFiltres = collection.filter(jeu => {
    return jeu.genre === genreRecherche;
  });
  
  return jeuxFiltres;
}

function afficherResultatsFiltre(jeux, critere) {
  console.log("-------------------------------------------------------");
  console.log("Resultats du filtrage : " + critere);
  console.log("-------------------------------------------------------");
  console.log("Nombre de jeux trouves : " + jeux.length);
  console.log("");
  
  if (jeux.length === 0) {
    console.log("Aucun jeu ne correspond aux criteres.");
  } else {
    jeux.forEach((jeu, index) => {
      console.log((index + 1) + ". " + jeu.titre);
      console.log("   Annee : " + jeu.anneeSortie);
      console.log("   Genre : " + jeu.genre);
      console.log("   Plateforme : " + jeu.plateforme);
      console.log("");
    });
  }
  
  console.log("-------------------------------------------------------");
}

function filtrerParAnneeEtGenre(collection, anneeMin, genreRecherche) {
  const jeuxFiltres = collection.filter(jeu => {
    return jeu.anneeSortie >= anneeMin && jeu.genre === genreRecherche;
  });
  
  return jeuxFiltres;
}

function filtrerParPlateforme(collection, plateforme) {
  const jeuxFiltres = collection.filter(jeu => {
    return jeu.plateforme.includes(plateforme);
  });
  
  return jeuxFiltres;
}

const collection = [
  {
    titre: "The Legend of Zelda: Tears of the Kingdom",
    anneeSortie: 2023,
    genre: "Action-Aventure",
    plateforme: "Nintendo Switch"
  },
  {
    titre: "Baldur's Gate 3",
    anneeSortie: 2023,
    genre: "RPG",
    plateforme: "PC / PS5"
  },
  {
    titre: "Elden Ring",
    anneeSortie: 2022,
    genre: "Action-RPG",
    plateforme: "Multi"
  },
  {
    titre: "Red Dead Redemption 2",
    anneeSortie: 2018,
    genre: "Action-Aventure",
    plateforme: "Multi"
  },
  {
    titre: "The Last of Us Part II",
    anneeSortie: 2020,
    genre: "Action-Aventure",
    plateforme: "PS4 / PS5"
  },
  {
    titre: "Super Mario Odyssey",
    anneeSortie: 2017,
    genre: "Plateforme",
    plateforme: "Nintendo Switch"
  },
  {
    titre: "Final Fantasy VII Remake",
    anneeSortie: 2020,
    genre: "RPG",
    plateforme: "PS4 / PS5"
  },
  {
    titre: "God of War Ragnarok",
    anneeSortie: 2022,
    genre: "Action-Aventure",
    plateforme: "PS4 / PS5"
  }
];

console.log("TEST 1 : Filtrage par annee\n");
const jeuxRecents = filtrerParAnnee(collection, 2022);
afficherResultatsFiltre(jeuxRecents, "Jeux sortis depuis 2022");

console.log("\n" + "=".repeat(60) + "\n");

console.log("TEST 2 : Filtrage par genre\n");
const jeuxAventure = filtrerParGenre(collection, "Action-Aventure");
afficherResultatsFiltre(jeuxAventure, "Genre : Action-Aventure");

console.log("\n" + "=".repeat(60) + "\n");

console.log("TEST 3 : Filtrage RPG\n");
const jeuxRPG = filtrerParGenre(collection, "RPG");
afficherResultatsFiltre(jeuxRPG, "Genre : RPG");

console.log("\n" + "=".repeat(60) + "\n");

console.log("TEST 4 : Filtrage combine (annee ET genre)\n");
const jeuxRecentAventure = filtrerParAnneeEtGenre(collection, 2020, "Action-Aventure");
afficherResultatsFiltre(jeuxRecentAventure, "Action-Aventure depuis 2020");

console.log("\n" + "=".repeat(60) + "\n");

console.log("TEST 5 : Filtrage par plateforme\n");
const jeuxPS5 = filtrerParPlateforme(collection, "PS5");
afficherResultatsFiltre(jeuxPS5, "Plateforme : PS5");

console.log("\nFin du filtrage");