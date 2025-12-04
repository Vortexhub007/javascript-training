/*Exercice 7 - Le Code Secret chez PixelBay
Tags : switch, case, console
Objectif : Comprendre et appliquer la structure de contrôle switch case en JavaScript.
Contexte : Les employés de PixelBay utilisent un système de codes secrets pour communiquer les tâches urgentes à accomplir dans la boutique.
Énoncé :
Chez PixelBay, les employés utilisent des codes secrets pour communiquer entre eux sur différentes tâches ou événements dans la boutique. En tant que nouveau gérant, vous devez apprendre à interpréter ces codes.
Les codes et leurs significations sont les suivantes :
* "Alpha" : "Lancer la promotion de la semaine!"
* "Bravo" : "Réorganiser la section des jeux rétro!"
* "Charlie" : "Préparer la zone de démonstration pour les nouveaux arrivages!"
* "Delta" : "Vérifier l'inventaire des accessoires!"
Pour cet exercice en Node.js, testez avec différentes valeurs de codeSecret.*/



// === SYSTÈME DE CODES SECRETS PIXELBAY ===

console.log("=== Système de Codes Secrets PixelBay ===");

// === DÉFINITION DU CODE SECRET ===
// Changez cette valeur pour tester différents codes
const codeSecret = "Alpha"; // Essayez : "Alpha", "Bravo", "Charlie", "Delta", "Zulu"

console.log(`Code reçu : ${codeSecret}`);

// === INTERPRÉTATION DU CODE AVEC SWITCH ===

switch (codeSecret) {
  case "Alpha":
    console.log(" ACTION : Lancer la promotion de la semaine !");
    console.log(" Tâches :");
    console.log("   - Préparer les affiches promotionnelles");
    console.log("   - Mettre à jour les prix dans le système");
    console.log("   - Informer l'équipe de vente");
    break;

  case "Bravo":
    console.log(" ACTION : Réorganiser la section des jeux rétro !");
    console.log(" Tâches :");
    console.log("   - Trier les jeux par console");
    console.log("   - Nettoyer les étagères");
    console.log("   - Vérifier l'état des cartouches");
    break;

  case "Charlie":
    console.log(" ACTION : Préparer la zone de démonstration pour les nouveaux arrivages !");
    console.log(" Tâches :");
    console.log("   - Installer les consoles de démo");
    console.log("   - Configurer les écrans");
    console.log("   - Télécharger les versions d'essai");
    break;

  case "Delta":
    console.log(" ACTION : Vérifier l'inventaire des accessoires !");
    console.log(" Tâches :");
    console.log("   - Compter les manettes en stock");
    console.log("   - Vérifier les câbles HDMI");
    console.log("   - Commander les articles manquants");
    break;

  default:
    console.log(" ERREUR : Code secret non reconnu !");
    console.log(" Codes valides :");
    console.log("   - Alpha : Promotion");
    console.log("   - Bravo : Réorganisation");
    console.log("   - Charlie : Zone de démo");
    console.log("   - Delta : Inventaire");
    break;
}

console.log("=== Fin de la transmission ===");


/*## 📊 Résultats selon les Codes

### **Test 1 : codeSecret = "Alpha"**

=== 🔐 Système de Codes Secrets PixelBay ===

📡 Code reçu : "Alpha"

🎉 ACTION : Lancer la promotion de la semaine !
📋 Tâches :
   - Préparer les affiches promotionnelles
   - Mettre à jour les prix dans le système
   - Informer l'équipe de vente

=== Fin de la transmission ===


### **Test 2 : codeSecret = "Bravo"**

📡 Code reçu : "Bravo"

🕹️ ACTION : Réorganiser la section des jeux rétro !
📋 Tâches :
   - Trier les jeux par console
   - Nettoyer les étagères
   - Vérifier l'état des cartouches

=== Fin de la transmission ===


### **Test 3 : codeSecret = "Zulu" (invalide)**

📡 Code reçu : "Zulu"

❌ ERREUR : Code secret non reconnu !
📋 Codes valides :
   - Alpha : Promotion
   - Bravo : Réorganisation
   - Charlie : Zone de démo
   - Delta : Inventaire

=== Fin de la transmission === */