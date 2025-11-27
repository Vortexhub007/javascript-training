/*Exercice 5 - Le Réapprovisionnement chez PixelBay
Tags : while, loop

Objectif : Comprendre et appliquer la boucle while en JavaScript.

Contexte : PixelBay reçoit des livraisons régulières de jeux vidéo. Vous devez déterminer combien de livraisons sont nécessaires pour atteindre le stock cible.

Énoncé :
Chez PixelBay, un grand effort est nécessaire pour maintenir le stock de jeux vidéo. Chaque livraison apporte 5 jeux vidéo au magasin. Votre mission est d'aider le gérant à déterminer combien de livraisons seront nécessaires pour atteindre le stock cible.

Les étapes sont les suivantes :

-Initiez un compteur pour le nombre de livraisons.
-Tant que le stock n'atteint pas le niveau cible, ajoutez des jeux vidéo au stock et augmentez le compteur de livraisons.
-Affichez le nombre total de livraisons une fois que le stock cible est atteint.

Considérez que :

Chaque livraison apporte exactement 5 jeux vidéo.
Le stock cible du magasin est de 100 jeux vidéo.*/


// === RÉAPPROVISIONNEMENT PIXELBAY ===

console.log("=== Gestion du Réapprovisionnement PixelBay ===");

// === DONNÉES INITIALES ===
let stockActuel = 0;                    // Stock de départ
const stockCible = 100;                 // Objectif à atteindre
const jeuxParLivraison = 5;             // Nombre de jeux par livraison
let nombreLivraisons = 0;               // Compteur de livraisons

console.log("État initial :");
console.log("Stock actuel : " + stockActuel + " jeux");
console.log("Stock cible : " + stockCible + " jeux");
console.log("Jeux par livraison : " + jeuxParLivraison + " jeux");
console.log(""); // Ligne vide

// === BOUCLE DE RÉAPPROVISIONNEMENT ===
console.log("Début des livraisons...");

// Tant que le stock n'atteint pas le stock cible
while (stockActuel < stockCible) {
  // Incrémenter le compteur de livraisons
  nombreLivraisons++;
  
  // Ajouter les jeux de la livraison au stock
  stockActuel += jeuxParLivraison; // Équivalent à : stockActuel = stockActuel + jeuxParLivraison
  
  // Afficher le détail de chaque livraison
  console.log("Livraison n°" + nombreLivraisons + " → Stock : " + stockActuel + " jeux");
}

// === RÉSULTAT FINAL ===
console.log("Stock cible atteint !");
console.log(""); // Ligne vide
console.log("Résumé :");
console.log("Nombre total de livraisons : " + nombreLivraisons);
console.log("Stock final : " + stockActuel + " jeux");

// Vérification si on a dépassé le stock cible
if (stockActuel > stockCible) {
  let surplus = stockActuel - stockCible;
  console.log("Surplus : +" + surplus + " jeux au-dessus de l'objectif");
}

console.log("=== Fin du réapprovisionnement ===");


/*## 📊 Résultat dans la Console

=== 📦 Gestion du Réapprovisionnement PixelBay ===

📊 État initial :
Stock actuel : 0 jeux
Stock cible : 100 jeux
Jeux par livraison : 5 jeux

🚚 Début des livraisons...

Livraison n°1 → Stock : 5 jeux
Livraison n°2 → Stock : 10 jeux
Livraison n°3 → Stock : 15 jeux
Livraison n°4 → Stock : 20 jeux
Livraison n°5 → Stock : 25 jeux
Livraison n°6 → Stock : 30 jeux
Livraison n°7 → Stock : 35 jeux
Livraison n°8 → Stock : 40 jeux
Livraison n°9 → Stock : 45 jeux
Livraison n°10 → Stock : 50 jeux
Livraison n°11 → Stock : 55 jeux
Livraison n°12 → Stock : 60 jeux
Livraison n°13 → Stock : 65 jeux
Livraison n°14 → Stock : 70 jeux
Livraison n°15 → Stock : 75 jeux
Livraison n°16 → Stock : 80 jeux
Livraison n°17 → Stock : 85 jeux
Livraison n°18 → Stock : 90 jeux
Livraison n°19 → Stock : 95 jeux
Livraison n°20 → Stock : 100 jeux

✅ Stock cible atteint !

📋 Résumé :
Nombre total de livraisons : 20
Stock final : 100 jeux

=== Fin du réapprovisionnement ===*/