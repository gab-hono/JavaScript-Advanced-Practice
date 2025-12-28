/* Objectifs 🎯
    L’objectif de cet exercice est de :
        - t’exercer dans la manipulation de variable
        - créer et manipuler des fonctions
        - comprendre les paramètres de fonction
        - (optionnel) savoir mettre en place une condition
        - (bonus) créer une page HTML reliée à un script JavaScript
        - (bonus) apprendre à manipuler les valeurs de retour d’une fonction

            Note — Tous ces termes sont nouveaux et donc pas toujours compréhensibles quand on découvre le développement. 🤔 Pour t’aider à repérer les termes qui te seront utiles dans ton apprentissage et plus tard dans ta vie de dev, nous les avons mis en italique dans cet exercice.

        La pratique va te permettre de donner du sens à ces termes mais si tu as le moindre doute sur leur compréhension, profite-en pour en parler avec d’autres apprenant·es ou l’encadrant·e qui sont là pour t’aider. 🙋 N’oublie pas que lorsqu’on pose une question souvent on aide l’autre en retour car iel pourra te donner des explications — ce qui lui permet de s’assurer qu’iel a bien compris — ou alors se rendre compte qu’iel n’a pas vraiment compris non plus et vous chercherez ensemble comment y voir plus clair.

    Étape 1 : premier code

        - Crée une variable message dans lequel on va stocker le message : Bonjour !
        - Affiche le message dans ta console. Tu devrais avoir le message “Bonjour !” qui apparaît.
        - Crée une seconde variable firstname dans lequel on va stocker un prénom. Exemple : Beyonce
        - Utilise la variable firstname dans message pour obtenir l’affichage du message : Bonjour Beyonce !
        Attention, ici il s’agit bien de modifier la variable message et non le console.log()

        Étape 3 : dans une fonction
        - Encapsule ton code précédent dans une fonction nommée sayHello()
        - Appelle la fonction sayHello() dans ton code pour t’assurer que tout continue de fonctionner.
        - Tu devrais toujours avoir le message Bonjour Beyonce ! qui s’affiche dans la console.
        - Déplace la variable firstname pour qu’elle devienne un paramètre de la fonction sayHello()
        - Exécute ton code. Tu devrais obtenir dans ta console Bonjour undefined ! 🤔
        - Corrige l’appel de fonction pour retrouver de nouveau le message Bonjour Beyonce !

        (optionnel) Étape 4 : un second paramètre
        - Ajoute un second paramètre hour à la fonction sayHello()
        - Ajoute une condition dans ta fonction pour que lorsque hour est supérieur ou égal à 18H, on dise Bonsoir plutôt que Bonjour dans le message*/

function sayHelo(firstName, hour) {

    if (hour >= 18) {
       let message = `Bonsoir ${firstName} !`;
        console.log(message); 
    }
    else {

        let message = `Bonjour ${firstName} !`;
        console.log(message);
    }
}

sayHelo("Rosalía", 19);
sayHelo("Ben", 15);