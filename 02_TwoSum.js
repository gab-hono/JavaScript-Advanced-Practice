/* Dans cet exercice, tu vas écrire une fonction JavaScript qui cherche deux nombres dans un tableau dont la somme correspond à une valeur donnée 🧮

    Tu disposes :
    - d’un tableau d’entiers nommé nums,
    - d’un nombre entier nommé target (la somme recherchée).
    
    Ta mission est de retourner les indices des deux éléments du tableau dont la somme est égale à target.

    Contraintes :
    - Il existe exactement une seule combinaison possible dans chaque tableau donné.
    - Tu ne peux pas utiliser deux fois le même élément.
    - Les indices peuvent être renvoyés dans n’importe quel ordre.

    Exemples :

        // Exemple 1
        twoSum([2, 7, 11, 15], 9);
        // Résultat attendu : [0, 1]

        // Exemple 2
        twoSum([3, 2, 4], 6);
        // Résultat attendu : [1, 2]

        // Exemple 3
        twoSum([3, 3], 6);
        // Résultat attendu : [0, 1]

    Consignes :
    - Crée une fonction twoSum(nums, target) qui retourne un tableau contenant les deux indices trouvés.
    - Tu peux utiliser des boucles, des conditions et/ou des structures de données comme un objet pour stocker les valeurs déjà vues. */

function twoSum(nums, target) {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target && i!=j) {
                console.log([i, j]);
            }
        }
    }
}

twoSum([1, 3, 6, 8], 7);
twoSum([0, 3, 2, 1], 2);
twoSum([1, 2, 2, 5], 4);