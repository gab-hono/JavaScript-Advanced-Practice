/* Dans cet exercice, tu vas créer une fonction qui recherche une sous-chaîne (un mot ou une séquence de lettres) dans une autre chaîne de caractères.

    Le but est de retourner l’indice de la première occurrence de cette sous-chaîne si elle existe, ou -1 si elle n’apparaît pas.
    
    Contraintes :
    - Les deux chaînes contiennent uniquement des lettres minuscules de l’alphabet anglais (a à z)
    - Langage : JavaScript.

    🎯 Objectif
    
    Créer une fonction strStr(haystack, needle) qui retourne :
    - l’indice (index) du premier caractère de la première occurrence de needle dans haystack,
    - ou -1 si needle n’apparaît pas.

    Exemples :

        // Exemple 1
        strStr("sunandsun", "sun");
        // Résultat attendu : 0
        // Explication : "sun" apparaît aux indices 0 et 6, mais la première occurrence est à 0.

        // Exemple 2
        strStr("adalovelace", "luv");
        // Résultat attendu : -1
        // Explication : "luv" n'apparaît pas dans "adalovelace".

    Étapes suggérées
    - Parcours la chaîne haystack caractère par caractère.
    - À chaque position, vérifie si la sous-chaîne à partir de cet indice correspond à needle.
    - Si oui → retourne l’indice courant
    - Si tu arrives à la fin sans trouver de correspondance → retourne -1.

    Astuce 💡 : tu peux utiliser la méthode substring() ou slice() pour comparer des morceaux de la chaîne. */

function strStr (haystack, needle) {

    if (needle === '') {
        return 0;
    }

    for (let i=0; i<=haystack.length - needle.length; i++) {
        let subString = haystack.substring(i, i+needle.length);

        if (subString===needle) {
            return i;
        }
    }
    return -1;

}

//OTRA SOLUCIÓN :
// function strStr (haystack, needle) {
// console.log(haystack.indexOf(needle));}

console.log(strStr("Holanda", "Hola"));
console.log(strStr('Sundance', 'dance'));