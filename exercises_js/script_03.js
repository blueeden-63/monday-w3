// Créer un prompt qui demande un nombre d'étages pour créer une pyramide

let number = prompt("Ohhh Ramsou je t'avais dit que je démissionnais mais combien d'étage souhaite tu pour cette dernière pyramide ?");
function pyramid(n) {
    if (n < 0 || n === 0) {
        return " Mais Ramsou tu te fou du monde on peut pas créer une pyramide à 0 etages ";
    }
    else {
        let pyramidstring = ""; // crée une variable pour stocker la pyramide
        for (let i = 1; i <= n; i++) { // on crée une boucle pour chaque étage avec i qui va de 1 à n
            pyramidstring += " ".repeat(n - i) + "#".repeat(i) + "\n";  // ajoute les espaces et les # pour chaque étage
        }   
    return "Tadammm voici ta pyramide Ramsou :\n" + pyramidstring; // \n pour un retour à la ligne 
    }
}

console.log(pyramid(parseInt(number)))
