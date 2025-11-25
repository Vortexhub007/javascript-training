// 
console.log("Hello Word");
console.log("Hello Word");

const nom="toto";
console.log(nom);

console.log("Salut " + nom);
const names=["Valentin", "Sarah", "Melissa"]
console.log(names[0]);

let age = 18;
if (typeof age !== "nombre") {
    console.log("Entrer un age");
}
else if(age < 0) {
    console.log("C'est un age plus petit que 0");
}
else if(age > 18) {
    console.log("Tu as le droit de conduire");
}
else if(age === 18) {
    console.log("Bon Anniversaire");
}
else {
    console.log("Rentre à pied !");
}