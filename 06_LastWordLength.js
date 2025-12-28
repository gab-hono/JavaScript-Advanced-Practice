/* Dans cet exercice, tu vas écrire une fonction qui retourne la longueur du dernier mot d’une chaîne contenant des mots et des espaces.

    Un mot est défini comme une sous-chaîne maximale ne contenant aucun espace.

    Contraintes :
    - str contient uniquement des lettres anglaises et des espaces (' ').
    - Il y a au moins un mot dans str.
    - Langage : JavaScript.

    🎯 Objectif . Créer une fonction lastWordLength(str) qui retourne un entier : la longueur du dernier mot de la chaîne str.

        Exemples :

        // Exemple 1
        lastWordLength("Hello World");
        // Résultat attendu : 5  (dernier mot "World")

        // Exemple 2
        lastWordLength("   grace hopper   invented   the bug  ");
        // Résultat attendu : 3  (dernier mot "bug")

        // Exemple 3
        lastWordLength("corgis are so joyful");
        // Résultat attendu : 6  (dernier mot "joyful")
    
    Étapes suggérées
    - Ignore les espaces de fin : pars de la fin de la chaîne et avance vers la gauche jusqu’au premier caractère non espace.
    - Compte le nombre de caractères consécutifs (non espaces) à partir de cette position, toujours vers la gauche.
    - Arrête-toi dès que tu rencontres un espace ou le début de la chaîne : le compteur correspond à la longueur du dernier mot.
    - Retourne cette longueur.
    
    Astuce 💡 : tu peux résoudre l’exercice sans créer de nouveau tableau (pas de split() nécessaire), en parcourant la chaîne une seule fois depuis la fin. */

function lastWordLength(str) {
    const splitStr = str.trim().split(' ');
    const lastWord = splitStr[splitStr.length - 1];

    console.log(lastWord, lastWord.length);

/*     const reverseStr = splitStr.reverse();
    
    for (let i=0; i<reverseStr.length; i++) {
        const lastWord = reverseStr[0];
        console.log(lastWord.length, lastWord);
    } */
}

lastWordLength('Hola cómo estás');
lastWordLength(`Ce matin j'ai mangé des pommes`);