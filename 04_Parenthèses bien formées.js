/* Dans cet exercice, tu vas créer une fonction qui vérifie si une chaîne de caractères composée uniquement de parenthèses et de crochets est valide 🧐

    Une chaîne est considérée comme valide si :
    - chaque parenthèse ouvrante est refermée par le même type de parenthèse ;
    - les parenthèses sont refermées dans le bon ordre ;
    - chaque parenthèse fermante correspond à une ouvrante existante.

    Contraintes :
    - La chaîne contient uniquement les caractères ()[]{}.
    - Le langage utilisé est JavaScript.

    🎯 Objectif : Créer une fonction isValid(str) qui retourne true si la chaîne est bien formée, et false sinon.

    Exemples :

        // Exemple 1
        isValid("()");
        // Résultat attendu : true

        // Exemple 2
        isValid("()[]{}");
        // Résultat attendu : true

        // Exemple 3
        isValid("(]");
        // Résultat attendu : false

        // Exemple 4
        isValid("([])");
        // Résultat attendu : true

        // Exemple 5
        isValid("([)]");
        // Résultat attendu : false

        Étapes suggérées
        - Parcours la chaîne caractère par caractère.
        - Utilise un tableau (pile) pour enregistrer les parenthèses ouvrantes rencontrées.

        Lorsqu’une parenthèse fermante apparaît :
        - vérifie que la dernière parenthèse ouvrante correspond bien au bon type ;
        - si ce n’est pas le cas, la chaîne est invalide.
        
        À la fin, la pile doit être vide pour que la chaîne soit considérée comme valide.
        
        Indice 💡 : tu peux utiliser un objet pour faire correspondre les types de parenthèses, par exemple :
        
        const pairs = { ')': '(', ']': '[', '}': '{' }; */

function isValid(str) {
    const stack = [];

    const pairs = { 
    ')': '(', 
    ']': '[', 
    '}': '{' 
    };

    const openers = Object.values(pairs);
    const closers = Object.keys(pairs);

    for (let character of str) {
        if (openers.includes(character)) {
            stack.push(character);
        }
        else if (closers.includes(character)) {
            if (stack.length === 0) {
                return false
            }
            const lastOpen = stack.pop();
            const expectedOpen = pairs[character];

            if (lastOpen !== expectedOpen) {
                return false;
            }
        }
    }
    if (stack.length === 0) {
        return true;
        } else {
        return false;
    }
}

console.log(isValid("[](){}"));
console.log(isValid('[[]]'));
console.log(isValid('[[(]]'));
console.log(isValid('([)]'));