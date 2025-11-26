/*Exercice 2 - Exploration des Jeux chez PixelBay
Tags : array, console

Objectif : S'initier à la création et la manipulation de tableaux en JavaScript.

Contexte : PixelBay souhaite cataloguer ses jeux vidéo dans un système informatisé. Vous devez créer et modifier un tableau contenant les noms des jeux en stock.

Énoncé :

Création du Tableau de Jeux : Créez un tableau jeux contenant au moins cinq noms de jeux vidéo.
Affichage du Deuxième Jeu : Affichez le nom du deuxième jeu du tableau dans la console.
Modification du Troisième Jeu : Modifiez le nom du troisième jeu du tableau, puis affichez le nouveau nom dans la console.
Conseils :

Rappelez-vous que les indices des tableaux en JavaScript commencent à 0.*/

// === CRÉATION DU CATALOGUE DE JEUX ===

console.log("=== Catalogue PixelBay ===");

// Étape 1 : Créer un tableau avec 5 jeux vidéo
const jeux = [
  "The Legend of Zelda",
  "Super Mario Odyssey",
  "Pokemon Legends",
  "Minecraft",
  "FIFA 24"
];

console.log("Catalogue initial :");
console.log(jeux);
console.log(""); // Ligne vide pour l'aération

// === ACCÈS AUX ÉLÉMENTS ===

// Étape 2 : Afficher le DEUXIÈME jeu (index 1)
console.log("Affichage du 2ème jeu :");
console.log("Le deuxième jeu est : " + jeux[1]);
console.log(""); // Ligne vide

// === MODIFICATION D'UN ÉLÉMENT ===

// Étape 3 : Modifier le TROISIÈME jeu (index 2)
console.log("Modification du 3ème jeu :");
console.log("Ancien nom : " + jeux[2]);

// On modifie le jeu à l'index 2
jeux[2] = "Pokemon Scarlet";

console.log("Nouveau nom : " + jeux[2]);
console.log(""); // Ligne vide

// === AFFICHAGE FINAL ===
console.log("Catalogue mis à jour :");
console.log(jeux);


/*## 📊 Résultat dans la Console

=== 🎮 Catalogue PixelBay ===

📋 Catalogue initial :
[ 'The Legend of Zelda', 'Super Mario Odyssey', 'Pokemon Legends', 'Minecraft', 'FIFA 24' ]

🔍 Affichage du 2ème jeu :
Le deuxième jeu est : Super Mario Odyssey

✏️ Modification du 3ème jeu :
Ancien nom : Pokemon Legends
Nouveau nom : Pokemon Scarlet

📋 Catalogue mis à jour :
[ 'The Legend of Zelda', 'Super Mario Odyssey', 'Pokemon Scarlet', 'Minecraft', 'FIFA 24' ]*/