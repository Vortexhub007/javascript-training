/*Exercice 8 - Les Promotions
Tags : function, console
Objectif : Comprendre et appliquer les fonctions en JavaScript.
Énoncé :
Chez PixelBay, différentes promotions sont appliquées en fonction des événements et des périodes de l'année. Votre mission est de créer des fonctions pour calculer les prix des jeux après l'application des différentes promotions.
Vous devez écrire des fonctions pour les scénarios suivants :
1. Promotion d'été : Applique une réduction de 20% sur le prix d'origine.
2. Promotion d'hiver : Applique une réduction de 30% sur le prix d'origine.
3. Promotion spéciale : Applique une réduction personnalisée en pourcentage, passée en paramètre de la fonction.*/



// === SYSTÈME DE PROMOTIONS PIXELBAY ===

console.log("=== Système de Promotions PixelBay ===");

// ============================================
// FONCTION 1 : PROMOTION D'ÉTÉ (-20%)
// ============================================

function promotionEte(prixOriginal) {
  // Calcul : Réduction de 20%
  const reduction = 20;
  const prixReduit = prixOriginal * (1 - reduction / 100);
  
  return prixReduit;
}

// ============================================
// FONCTION 2 : PROMOTION D'HIVER (-30%)
// ============================================

function promotionHiver(prixOriginal) {
  // Calcul : Réduction de 30%
  const reduction = 30;
  const prixReduit = prixOriginal * (1 - reduction / 100);
  
  return prixReduit;
}

// ============================================
// FONCTION 3 : PROMOTION PERSONNALISÉE
// ============================================

function promotionSpeciale(prixOriginal, pourcentageReduction) {
  // Calcul : Réduction variable (passée en paramètre)
  const prixReduit = prixOriginal * (1 - pourcentageReduction / 100);
  
  return prixReduit;
}

// ============================================
// FONCTION BONUS : AFFICHAGE FORMATÉ
// ============================================

function afficherPromotion(nomPromotion, prixOriginal, prixReduit, reduction) {
  const economie = prixOriginal - prixReduit;
  
  console.log(` ${nomPromotion}`);
  console.log(`   Prix original : ${prixOriginal.toFixed(2)}€`);
  console.log(`   Réduction : -${reduction}%`);
  console.log(`   Prix réduit : ${prixReduit.toFixed(2)}€`);
  console.log(`    Économie : ${economie.toFixed(2)}€`);
  console.log(""); // Ligne vide
}

// ============================================
// TESTS DES FONCTIONS
// ============================================

// Prix de base d'un jeu
const prixJeu = 109.99;

console.log(` Jeu vidéo : ${prixJeu}€`);

// Test 1 : Promotion d'été
const prixEte = promotionEte(prixJeu);
afficherPromotion("PROMOTION D'ÉTÉ ", prixJeu, prixEte, 20);

// Test 2 : Promotion d'hiver
const prixHiver = promotionHiver(prixJeu);
afficherPromotion("PROMOTION D'HIVER ", prixJeu, prixHiver, 30);

// Test 3 : Promotion spéciale (-15%)
const prixSpecial15 = promotionSpeciale(prixJeu, 15);
afficherPromotion("PROMOTION SPÉCIALE ", prixJeu, prixSpecial15, 15);

// Test 4 : Promotion spéciale (-50%)
const prixSpecial50 = promotionSpeciale(prixJeu, 50);
afficherPromotion("MÉGA PROMO ", prixJeu, prixSpecial50, 50);

// ============================================
// COMPARAISON DES PROMOTIONS
// ============================================

console.log(`Comparaison des promotions pour un jeu à ${prixJeu}€ :`);
console.log("─────────────────────────────────────────────────");
console.log(`Été (-20%)      : ${promotionEte(prixJeu).toFixed(2)}€`);
console.log(`Hiver (-30%)    : ${promotionHiver(prixJeu).toFixed(2)}€`);
console.log(`Spéciale (-15%) : ${promotionSpeciale(prixJeu, 15).toFixed(2)}€`);
console.log(`Spéciale (-50%) : ${promotionSpeciale(prixJeu, 50).toFixed(2)}€`);

console.log("\n=== Fin du système de promotions ===");


/* ## 📊 Résultat dans la Console

=== 🎉 Système de Promotions PixelBay ===

🎮 Jeu vidéo : 59.99€

📦 PROMOTION D'ÉTÉ ☀️
   Prix original : 59.99€
   Réduction : -20%
   Prix réduit : 47.99€
   💰 Économie : 12.00€

📦 PROMOTION D'HIVER ❄️
   Prix original : 59.99€
   Réduction : -30%
   Prix réduit : 41.99€
   💰 Économie : 18.00€

📦 PROMOTION SPÉCIALE 🎁
   Prix original : 59.99€
   Réduction : -15%
   Prix réduit : 50.99€
   💰 Économie : 9.00€

📦 MÉGA PROMO 🔥
   Prix original : 59.99€
   Réduction : -50%
   Prix réduit : 30.00€
   💰 Économie : 29.99€

📊 Comparaison des promotions pour un jeu à 59.99€ :
─────────────────────────────────────────────────
Été (-20%)      : 47.99€
Hiver (-30%)    : 41.99€
Spéciale (-15%) : 50.99€
Spéciale (-50%) : 30.00€

=== Fin du système de promotions === */