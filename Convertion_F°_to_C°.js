// <!-- formule de conversion des fahrenheit en celsius -->
/* Exercice d'introduction aux fonctions (cf. sur teams exemple de code pour une fonction):

on va convertir des fahrenheit en celsius*/

import readlineSync from "readline-sync"; //cf ligne pour les explications

// -------------------------------------------------------------------------------------------------------------
//On determine d'abord les etapes de conversions et les variables qui vont avec:

let F = 98.6;

let C = ((F - 32) * 5) / 9;

console.log(C);

// -------------------------------------------------------------------------------------------------------------
//On veut pouvoir réutiliser ce bloc de donnés dans le code donc on va créer un fonction

// function fToC(fValue) {
//   console.log(((fValue - 32) * 5) / 9);
// }

// le bloc function( l.17 à l.19) permet de déclarer la fonction "fToC"
/*fValue correspond au parametre de la fonction (on peut mettre plusieurs parametres a la suite),
elle sert de "variable" ce qui evite de déclarer une variable en dehors de la fonction.
On pourra lui attribuer une valeur directement dans le champs des parametres au moment de l"appel" de la fonction*/

fToC(12); // appel de la fonction en indiquant l'argument (=la valeur que doit utiliser la fonction)

// il faut "appeler" la fonction pour pouvoir l'executer
// NE PAS HESITER A FAIRE DES CONSOLE.LOG POUR VERIFIER QUE LA SYNTAXE EST JUSTE TOUT AU LONG DE L'ECRITURE DU CODE!!!!!!!
// -------------------------------------------------------------------------------------------------------------

/* On va essayer de poser la question a l'utilisateur pour qu'il puisse entrer une température*/

/* import readlineSync from 'readline-sync'=> CETTE LIGNE DE CODE DOIT ETRE LA 1ER DU CODE 
car elle sert de plugin permettant de lire/ecrire du texte dans le terminal */
const nom = Number(readlineSync.question("Quel temperature ? "));

function fToC(fValue, symbol) {
  //le parametre "symbol" permet d'ajouter un strings dans les arguments
  if (typeof fValue != "number") {
    console.log(`ERREUR`);
  } else {
    console.log(`${(fValue - 32) * 5 / 9} ${symbol}`)
  }
}

fToC(nom,"°")
