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

const companyName = "PixelBay";
let stockInitialeJeux = 500;
let PriceUnitJeu = 15;

console.log("Le nom de la boutique est " + companyName);
console.log("Le nombre initial de jeux en stock est de " + stockInitialeJeux);
console.log("Le prix initial d'un jeux en stock est de " + PriceUnitJeu + "€.");


let updateNbJeu = stockInitialeJeux * 0.3;
let resultUpdateNbJeu = stockInitialeJeux - updateNbJeu;

console.log("Le nombre unitaire de jeu vendu en une journer est de " + updateNbJeu);
console.log("Après la mise à jour, le nombre de jeux en stock est de " + resultUpdateNbJeu);

let resultPriceUnitJeu = PriceUnitJeu * 0.7;

console.log("Après la mise à jour, le Prix Unitaire d'un jeux en stock est de " + resultPriceUnitJeu);
