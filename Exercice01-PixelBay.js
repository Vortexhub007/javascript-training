/* Exercice 1 - Le Défi du Magasin PixelBay
Tags : let, const, console

Objectif : Comprendre la différence entre let et const en déclarant des variables.

Contexte : C'est le premier jour chez PixelBay ! Vous devez gérer le stock de jeux et calculer les revenus d'une promotion spéciale.

Énoncé :

Initialement, vous avez 500 jeux en stock et chaque jeu rapporte en moyenne 15 €.

Création de la boutique : Déclarez le nom de la boutique et le nombre initial de jeux en stock.

Promotion Spéciale :

Suite à une promotion spéciale, 30% des jeux sont vendus en une journée. 
Mettez à jour le nombre de jeux en stock.

Calculer le CA total de cette vente (montant total des ventes).

Affichage : Affichez le nom de la boutique, le nombre de jeux en stock, le stock mis à jour et les revenus de la vente en euros en utilisant la concaténation classique. */

// === DONNÉES INITIALES ===
// Utiliser const car ces valeurs ne changent pas
const nomBoutique = "PixelBay";
const stockInitial = 500;
const prixParJeu = 15; // en euros
const pourcentagePromo = 30; // 30% de réduction

console.log("=== Bienvenue chez " + nomBoutique + " ! ===\n");

// === CALCULS DE LA PROMOTION ===

// Étape 1 : Calculer combien de jeux sont vendus (30% de 500)
// Formule : (pourcentage / 100) × stock initial
const jeuxVendus = (pourcentagePromo / 100) * stockInitial;

// Étape 2 : Calculer le nouveau stock
// Utiliser let car cette valeur va changer (le stock évolue)
let stockActuel = stockInitial - jeuxVendus;

// Étape 3 : Calculer le chiffre d'affaires (CA)
// CA = nombre de jeux vendus × prix unitaire
const chiffreAffaires = jeuxVendus * prixParJeu;

// === AFFICHAGE DES RÉSULTATS ===
console.log("État du stock :");
console.log("Stock initial : " + stockInitial + " jeux");
console.log("Jeux vendus pendant la promo : " + jeuxVendus + " jeux");
console.log("Stock restant : " + stockActuel + " jeux");

console.log("Résultats financiers :");
console.log("Chiffre d'affaires généré : " + chiffreAffaires + " €");


/*## 📝 Explication des Concepts

### **const vs let**

- **`const`** = valeur **constante** (ne peut pas être réassignée)
- Utilisé pour : "nomBoutique", "stockInitial", "prixParJeu", "chiffreAffaires"
- Ces valeurs ne changent pas pendant l'exécution

- **`let`** = valeur **variable** (peut être modifiée)
  - Utilisé pour : "stockActuel"
  - Le stock évolue au fil des ventes

### **Calcul du pourcentage**

Pour calculer 30% de 500 :
(30 / 100) × 500 = 0.30 × 500 = 150 jeux vendus*/