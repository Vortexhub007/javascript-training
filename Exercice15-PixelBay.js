const readlineSync = require('readline-sync');
/* Exercice 15 - BONUS : Calculateur d'Année Bissextile
Tags : function, readline-sync, bonus

Objectif : Comprendre et appliquer les fonctions avec interaction utilisateur en Node.js.

Note : Cet exercice est optionnel et nécessite l'installation de readline-sync.

Contexte : PixelBay souhaite créer un événement spécial tous les 29 février (jour qui n'existe que les années bissextiles). Vous devez créer un script pour vérifier si une année donnée est bissextile.

Énoncé :

Une année est bissextile selon ces règles :

Elle est divisible par 4 ET pas divisible par 100, OU
Elle est divisible par 400
Votre Mission :

Créer une fonction isBissextile(annee) qui retourne true si l'année est bissextile, false sinon.
Récupérer l'entrée utilisateur : Demander à l'utilisateur d'entrer une année avec readline-sync.
Afficher le résultat : Indiquez si l'année entrée est bissextile ou non (l'événement PixelBay aura lieu cette année-là ou non).
Exemples :

2000 est bissextile (divisible par 400)
2024 est bissextile (divisible par 4, pas par 100)
1900 n'est pas bissextile (divisible par 100 mais pas par 400)
2023 n'est pas bissextile (pas divisible par 4) */

function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let anneeUtilisateur = readlineSync.question("Veuillez entrer une année : ");
let isBisextile = bisextile(Number(anneeUtilisateur));

if(isBisextile) {
    console.log(anneeUtilisateur + " est une année bisextile.");
} else {
    console.log(anneeUtilisateur + " n'est pas une année bisextile.");
}
