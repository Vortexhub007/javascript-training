/*Exercice 3 - La Quête du Magasin
Tags : if, else, console

Objectif : Comprendre l'utilisation des structures conditionnelles if, else en JavaScript.

Contexte : Selon les ventes du jour, PixelBay doit prendre différentes décisions stratégiques pour sa boutique.

Énoncé :

C'est un jour spécial pour le magasin ! En fonction des ventes de jeux vidéo, le magasin décide d'entreprendre différentes actions.

Les règles sont les suivantes :

Si le nombre de jeux vendus est supérieur à 100, le magasin organise une grande promotion.
Si le nombre de jeux vendus est entre 50 et 100, le magasin effectue une réorganisation de son espace de vente.
Si le nombre de jeux vendus est inférieur à 50, le magasin lance une campagne de publicité.
Considérez que :

const NOM_DU_MAGASIN = "PixelBay";
let jeuxVendus = 60; (vous pouvez changer cette valeur pour tester différentes conditions)*/



// === DONNÉES DU MAGASIN ===
const NOM_DU_MAGASIN = "PixelBay";
let jeuxVendus = 101; // Vous pouvez changer cette valeur pour tester

console.log("=== Gestion du Magasin " + NOM_DU_MAGASIN + " ===\n");
console.log("Nombre de jeux vendus aujourd'hui : " + jeuxVendus);
console.log(""); // Ligne vide

// === STRUCTURE CONDITIONNELLE ===

// Condition 1 : Plus de 100 jeux vendus
if (jeuxVendus > 100) {
  console.log("EXCELLENTES VENTES !");
  console.log("Décision : Organisation d'une GRANDE PROMOTION !");
  console.log("Raison : Vous avez vendu plus de 100 jeux.");
}
// Condition 2 : Entre 50 et 100 jeux vendus
else if (jeuxVendus >= 50) {
  console.log("BONNES VENTES !");
  console.log("Décision : RÉORGANISATION de l'espace de vente.");
  console.log("Raison : Vous avez vendu entre 50 et 100 jeux.");
}
// Condition 3 : Moins de 50 jeux vendus
else {
  console.log("VENTES FAIBLES...");
  console.log("Décision : Lancement d'une CAMPAGNE DE PUBLICITÉ.");
  console.log("Raison : Vous avez vendu moins de 50 jeux.");
}

console.log("=== Fin de l'analyse quotidienne ===");


/*## Tests avec Différentes Valeurs

### **Test 1 : jeuxVendus = 60**

=== Gestion du Magasin PixelBay ===

 Nombre de jeux vendus aujourd'hui : 60

 BONNES VENTES !
 Décision : RÉORGANISATION de l'espace de vente.
 Raison : Vous avez vendu entre 50 et 100 jeux.

=== Fin de l'analyse quotidienne ===


### **Test 2 : jeuxVendus = 120**

 Nombre de jeux vendus aujourd'hui : 120

 EXCELLENTES VENTES !
 Décision : Organisation d'une GRANDE PROMOTION !
 Raison : Vous avez vendu plus de 100 jeux.

### **Test 3 : jeuxVendus = 30**

 Nombre de jeux vendus aujourd'hui : 30

 VENTES FAIBLES...
 Décision : Lancement d'une CAMPAGNE DE PUBLICITÉ.
 Raison : Vous avez vendu moins de 50 jeux.*/