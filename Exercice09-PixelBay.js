/*Exercice 9 - Le Défi FizzBuzz
Tags : loop, modulo, function
Objectif : Comprendre l'utilisation de l'opérateur modulo dans les boucles et les conditions.
Contexte : PixelBay lance un défi de programmation à ses développeurs pour tester leurs compétences logiques avec l'opérateur modulo.
Énoncé :
PixelBay lance un nouveau défi à ses développeurs : le célèbre jeu FizzBuzz.
Qu'est-ce que le Modulo ?
Le modulo est un opérateur arithmétique qui retourne le reste de la division entière entre deux nombres. Par exemple, 5 % 2 retourne 1 car 5 divisé par 2 laisse un reste de 1.
Votre Mission :
Créez une fonction qui affiche dans la console les nombres de 1 à 151 avec les modifications suivantes :
* Pour les Multiples de 3 : Affichez "Fizz" au lieu du nombre.
* Pour les Multiples de 5 : Affichez "Buzz" au lieu du nombre.
* Pour les Multiples de 3 et de 5 : Affichez "FizzBuzz" au lieu du nombre.*/



// === DÉFI FIZZBUZZ PIXELBAY ===

console.log("=== Défi FizzBuzz PixelBay ===");

// ============================================
// FONCTION FIZZBUZZ
// ============================================

function fizzBuzz(limite) {
  console.log(`Affichage de 1 à ${limite} :`);
  
  // Parcourir les nombres de 1 à limite
  for (let i = 1; i <= limite; i++) {
    
    // CONDITION 1 : Divisible par 3 ET par 5 (donc par 15)
    // ⚠️ IMPORTANT : Cette condition doit être AVANT les autres !
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    
    // CONDITION 2 : Divisible par 3 uniquement
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    
    // CONDITION 3 : Divisible par 5 uniquement
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    
    // CONDITION 4 : Aucune des conditions précédentes
    else {
      console.log(i);
    }
  }
  
  console.log("Défi terminé !");
}

// ============================================
// APPEL DE LA FONCTION
// ============================================

fizzBuzz(151);

// ============================================
// VERSION ALTERNATIVE : Plus compact
// ============================================

console.log("--- Version Alternative ---");

function fizzBuzzCompact(limite) {
  for (let i = 1; i <= limite; i++) {
    let resultat = "";
    
    // Construire la chaîne progressivement
    if (i % 3 === 0) resultat += "Fizz";
    if (i % 5 === 0) resultat += "Buzz";
    
    // Si resultat est vide, afficher le nombre
    console.log(resultat || i);
  }
}

// Test avec les 30 premiers nombres
fizzBuzzCompact(30);


/*## 📊 Résultat dans la Console (extrait)
=== 🎯 Défi FizzBuzz PixelBay ===

📊 Affichage de 1 à 151 :

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
...
149
Buzz
151

✅ Défi terminé ! */