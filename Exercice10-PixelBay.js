/*Exercice 10 - Gestion des Inventaires
Tags : array method push() shift() forEach
Objectif : Apprendre à créer et manipuler des tableaux en JavaScript.
Contexte : PixelBay gère son inventaire de produits (manettes, consoles, accessoires). Vous devez ajouter, supprimer et afficher les articles en stock.
Énoncé :
Votre programme doit accomplir les tâches suivantes :
1. Création de l'Inventaire : Déclarez un tableau inventaire contenant les noms de cinq articles.
2. Ajout d'Articles : Ajoutez deux nouveaux articles.
3. Suppression d'un Article : Supprimez le premier article.
4. Affichage de l'Inventaire : Utilisez une methode pour pour afficher tous les articles.*/




// === GESTION DE L'INVENTAIRE PIXELBAY ===

console.log("=== Gestion de l'Inventaire PixelBay ===");



const inventaire = [
  "Manette PS5",
  "Console Xbox Series X",
  "Casque Gaming",
  "Clavier Mécanique",
  "Souris Gaming"
];

console.log("Inventaire initial :");
console.log(`Nombre d'articles : ${inventaire.length}`);

// Afficher les articles
inventaire.forEach((article, index) => {
  console.log(`${index + 1}. ${article}`);
});

console.log();


console.log(" Ajout de nouveaux articles...");

// Ajouter le premier article
inventaire.push("Écran Gaming 27 pouces");
console.log(`Article ajouté : "Écran Gaming 27 pouces"`);
console.log(`Nombre d'articles : ${inventaire.length}`);

// Ajouter le deuxième article
inventaire.push("Tapis de souris RGB");
console.log(`Article ajouté : "Tapis de souris RGB"`);
console.log(`Nombre d'articles : ${inventaire.length}`);

console.log("Inventaire après ajouts :");
inventaire.forEach((article, index) => {
  console.log(`${index + 1}. ${article}`);
});

console.log();

// ============================================
// ÉTAPE 3 : SUPPRESSION DU PREMIER ARTICLE
// ============================================

console.log("Suppression du premier article...");

const articleSupprime = inventaire.shift();

console.log(`Article supprimé : "${articleSupprime}"`);
console.log(`Nombre d'articles restants : ${inventaire.length}`);

console.log("Inventaire après suppression :");
inventaire.forEach((article, index) => {
  console.log(`${index + 1}. ${article}`);
});

console.log();

// ============================================
// ÉTAPE 4 : AFFICHAGE FINAL DÉTAILLÉ
// ============================================

console.log("Inventaire Final PixelBay");
console.log("╔═══════════════════════════════════════════════╗");
console.log("║           LISTE DES ARTICLES EN STOCK         ║");
console.log("╠═══════════════════════════════════════════════╣");

inventaire.forEach((article, index) => {
  // Formatage avec padding pour l'alignement
  const numero = `${index + 1}.`.padEnd(4);
  const articleFormate = article.padEnd(35);
  console.log(`║ ${numero}${articleFormate}       ║`);
});

console.log("╚═══════════════════════════════════════════════╝");
console.log(`Total : ${inventaire.length} articles en stock`);

// ============================================
// BONUS : STATISTIQUES
// ============================================

console.log("\n" + "=".repeat(50) + "\n");
console.log("Statistiques de gestion :");
console.log(`• Articles initiaux : 5`);
console.log(`• Articles ajoutés : 2`);
console.log(`• Articles supprimés : 1`);
console.log(`• Stock final : ${inventaire.length} articles`);

console.log("=== Fin de la gestion d'inventaire ===");


/*## 📊 Résultat dans la Console

=== 📦 Gestion de l'Inventaire PixelBay ===

📋 Inventaire initial :
Nombre d'articles : 5

1. Manette PS5
2. Console Xbox Series X
3. Casque Gaming
4. Clavier Mécanique
5. Souris Gaming

==================================================

➕ Ajout de nouveaux articles...

✅ Article ajouté : "Écran Gaming 27 pouces"
Nombre d'articles : 6
✅ Article ajouté : "Tapis de souris RGB"
Nombre d'articles : 7

📋 Inventaire après ajouts :
1. Manette PS5
2. Console Xbox Series X
3. Casque Gaming
4. Clavier Mécanique
5. Souris Gaming
6. Écran Gaming 27 pouces
7. Tapis de souris RGB

==================================================

➖ Suppression du premier article...

❌ Article supprimé : "Manette PS5"
Nombre d'articles restants : 6

📋 Inventaire après suppression :
1. Console Xbox Series X
2. Casque Gaming
3. Clavier Mécanique
4. Souris Gaming
5. Écran Gaming 27 pouces
6. Tapis de souris RGB

==================================================

📊 Inventaire Final PixelBay

╔═══════════════════════════════════════════════╗
║           LISTE DES ARTICLES EN STOCK        ║
╠═══════════════════════════════════════════════╣
║ 1.  Console Xbox Series X                    ║
║ 2.  Casque Gaming                            ║
║ 3.  Clavier Mécanique                        ║
║ 4.  Souris Gaming                            ║
║ 5.  Écran Gaming 27 pouces                   ║
║ 6.  Tapis de souris RGB                      ║
╚═══════════════════════════════════════════════╝

Total : 6 articles en stock

==================================================

📈 Statistiques de gestion :
- Articles initiaux : 5
- Articles ajoutés : 2
- Articles supprimés : 1
- Stock final : 6 articles

=== Fin de la gestion d'inventaire ===*/