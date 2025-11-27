/*Exercice 4 - Affichage des Jours de la Semaine
Tags : array, for, loop

Objectif : Comprendre et appliquer la boucle for en JavaScript et faire des opérations sur un tableau.

Contexte : PixelBay organise ses activités hebdomadaires. Vous devez afficher tous les jours de la semaine pour la planification interne.

Énoncé :

PixelBay souhaite améliorer l'organisation interne et la planification de ses activités hebdomadaires. Votre tâche est de créer un script qui parcourt un tableau contenant les jours de la semaine et les affiche un par un dans la console.

Instructions :

Création du Tableau : Déclarez un tableau joursSemaine contenant les noms des jours de la semaine, du lundi au dimanche.
Affichage des Jours : Utilisez une boucle for pour parcourir le tableau et afficher chaque jour dans la console.*/




// === PLANIFICATION HEBDOMADAIRE PIXELBAY ===

console.log("=== Planning Hebdomadaire de PixelBay ===");

// Étape 1 : Créer le tableau des jours de la semaine
const joursSemaine = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche"
];

console.log(" Nombre de jours dans la semaine : " + joursSemaine.length);
console.log(""); // Ligne vide

// Étape 2 : Parcourir et afficher chaque jour avec une boucle for
console.log("Liste des jours :");

for (let i = 0; i < joursSemaine.length; i++) {
  console.log("Jour " + (i + 1) + " : " + joursSemaine[i]);
}

console.log("=== Fin du planning ===");


/* ## Résultat dans la Console

=== Planning Hebdomadaire de PixelBay ===

 Nombre de jours dans la semaine : 7

 Liste des jours :

Jour 1 : Lundi
Jour 2 : Mardi
Jour 3 : Mercredi
Jour 4 : Jeudi
Jour 5 : Vendredi
Jour 6 : Samedi
Jour 7 : Dimanche

=== Fin du planning === */