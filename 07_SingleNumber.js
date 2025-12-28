/* Dans cet exercice, tu vas écrire une fonction qui trouve l’unique nombre non dupliqué dans un tableau d’entiers.

    Le tableau contient toujours un nombre impair d’éléments : chaque nombre apparaît deux fois sauf un seul, qui n’apparaît qu’une fois 🔍

    Contraintes :
    - Chaque élément du tableau apparaît exactement deux fois, sauf un seul élément qui apparaît une seule fois
    - Langage : JavaScript.

    🎯 Objectif : Créer une fonction singleNumber(nums) qui retourne l’unique nombre du tableau qui n’a pas de doublon.

        Exemples :

        // Exemple 1
        singleNumber([2, 2, 1]);
        // Résultat attendu : 1

        // Exemple 2
        singleNumber([4, 1, 2, 1, 2]);
        // Résultat attendu : 4

        // Exemple 3
        singleNumber([1]);
        // Résultat attendu : 1

    Étapes suggérées
    - Crée une fonction singleNumber() qui prend en paramètre un tableau nums.
    - Analyse comment détecter un élément unique quand tous les autres apparaissent en double.
    - Retourne le nombre isolé trouvé dans le tableau.

    Indice 💡 : Essaie de penser à une opération mathématique ou binaire qui “annule” les paires identiques. */

function singleNumber(nums) {
    for (let i=0; i<nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            console.log(nums[i]);
        }
    }
}
singleNumber([1, 2, 2, 3, 3]);
singleNumber([1, 1, 2, 3, 3]);