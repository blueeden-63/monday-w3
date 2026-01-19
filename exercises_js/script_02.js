// Créer un prompt qui demande un nombre, puis qui calcule la factorielle de ce nombre et l'affiche dans la console
let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
function factorial(n) {
    if (n < 0 || n === 0) { 
        return 0; // si n est négatif ou égal à 0 on retourne 0
    } else if (n === 1) {
        return 1; // si n = 1 on retourne 1
    } else {
        return n * factorial(n - 1); // on multiplie n par la factorielle de (n-1) donc on fait  n*(n-1)*(n-2)*...*1
    }
}
console.log("La factorielle est " + factorial(parseInt(number))); // parseInt() converti le prompt (string) en nombre (integer)