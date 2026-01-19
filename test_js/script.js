console.log("coucou depuis la console");

// Exercice portée des variables (var et let)
let data1 = "variable en let définie dans le bloc principal";
let data3 = "variable en let définie dans le bloc Principal";

{ //début du sous-bloc

    data1 = "variable en let modifiée dans le sous-bloc";
    var data2 = "variable en var définie dans le sous-bloc";
    data3 = "variable en let modifiée dans le sous-bloc";

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
console.log(data3); // "variable en let modifiée dans le sous-bloc"

// Exercice nombre (number)
let a = 1;
let b = 1;
a++
console.log(a);
console.log(b += 2);

// Exercice string (string)
let c = "Bonjour", d = "Monde";
console.log(c + " " + d);

// Exercice tableau (array)
let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
console.log(statusDeTHP.length); // affiche le nombre d'éléments dans le tableau
statusDeTHP.push("Flibustier") // ajoute un élément à la fin du tableau
statusDeTHP.unshift("Pirate") // ajoute un élément au début du tableau
console.log(statusDeTHP);

// Exercice concaténation (concatenation)
let e = 3;
console.log("Bonjour à tous les "+ e);
console.log(e + "3");

// Exercice interpolation (interpolation)
let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
console.log(statement);

// Exercice split (split)
const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson[0]); // "Git"
console.log(lesson[5]); // "JS"

// Exercice objet (object)
let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris", "Lyon", "Montpellier"],
    successRate: 0.80,
    sessionMoto: "keep pushing to the top"
};
console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

let attributName = "successRate";
console.log(THPSessionNum2[attributName]); //j'accède à un attribut via une variable