/*
** PERSONNAL PROJECT, 2020
** js_learning
** File description:
** calculatrice
*/


var mode;
var a0, a1;

while (mode != 1 && mode != 2 && mode != 3 && mode != 4) {
    mode = Number(prompt("Choisissez un mode de calcul (de 1 à 4) ?\n\n1 - Addition\n2 - Soustraction\n3 - Multiplication\n4 - Division\n\n"));
}

while (isNaN(a0)) {
    a0 = Number(prompt('premier nombre :\n'));
}

while (isNaN(a1)) {
    a1 = Number(prompt('second nombre :\n'));
}

function addition(a0, a1) {
    return (a0 + a1);
}

function soustraction(a0, a1) {
    return (a0 - a1);
}

function multiplication(a0, a1) {
    return (a0 * a1);
}

function division(a0, a1) {
    if (a1 == 0)
        throw new Error("division by zero !");
    return (a0 / a1);
}

try {
    switch(parseInt(mode)) {
        case 1:
            var result = addition(a0, a1);
            break;
        case 2:
            var result = soustraction(a0, a1);
            break;
        case 3:
            var result = multiplication(a0, a1);
            break;
        case 4:
            var result = division(a0, a1);
            break;
        default:
            throw new Error("Une erreur est survenue");
    }
    alert("voici le resultat : " + result);
}
catch(error) {
    alert(error);
}
