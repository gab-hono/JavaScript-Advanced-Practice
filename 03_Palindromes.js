/* Un palindrome est un mot, une phrase ou une suite de caractères qui se lit dans les deux sens — par exemple “radar” ou “kayak” 🌀

Dans cet exercice, nous allons nous amuser avec des dates palindromes : des dates qui peuvent se lire dans les deux sens, sans prendre en compte le séparateur /.

    Contraintes :
    - Langage : JavaScript
    - Les années sont toujours représentées sur 4 chiffres (entre 1000 et 9999)
    - Les séparateurs de date ne sont pas pris en compte dans la vérification du palindrome

    Étape 1 – Vérifie la validité d’une date 📅
    - Crée une fonction isValidDate(dateString) qui prend une date au format texte et détermine si elle est valide.
        Une date est valide si :
        - elle est au format jj/mm/aaaa,
        - le mois existe (entre 1 et 12),
        - le jour existe pour le mois concerné (ex. : 31/11 ❌ car novembre a 30 jours).
💡 Tu peux créer une fonction d’aide maxDaysInMonth(mois, annee) pour vérifier le nombre de jours autorisés selon le mois.

    Exemples :
        isValidDate("03/04/2001"); // true
        isValidDate("03/14/2001"); // false (14 n'est pas un mois valide)

    Étape 2 – Détecte les dates palindromes 🔁
    - Crée une fonction isPalindrome(dateString) qui retourne true si la date est un palindrome, false sinon.
    - Les caractères / ne sont pas pris en compte dans la vérification.
    - Si la date n’est pas valide, la fonction doit retourner false.

    Exemples :
    isPalindrome("11/02/2011"); // true
    isPalindrome("03/04/2001"); // false

    Étape 3 – Trouve les prochaines dates palindromes 🔮
    - Crée une fonction getNextPalindromes(x) qui affiche les x prochaines dates palindromes à partir d’aujourd’hui.
    - Tu devras :
        - avancer jour par jour,
        - vérifier à chaque fois si la date est un palindrome,
        - et t’arrêter une fois que tu en as trouvé x.

        Exemple :

        getNextPalindromes(8);
        // Résultats attendus :
        22/02/2022
        03/02/2030
        13/02/2031
        23/02/2032
        04/02/2040
        14/02/2041
        24/02/2042
        05/02/2050


        Étape 4 – Rends ton code réutilisable 🧠
        - Modifie la fonction isPalindrome() pour qu’elle puisse vérifier n’importe quelle chaîne de caractères (et pas seulement des dates).
        - Crée une nouvelle fonction isDatePalindrome() qui :
        - vérifie d’abord si la date est valide,
        - et appelle ensuite isPalindrome() sur la date nettoyée (sans séparateurs). */

/* ===================================
   ÉTAPE 4 : Vérifier si une chaîne est un palindrome
   (TA FONCTION ADAPTÉE)
   =================================== */

function isPalindrome(phrase) {
    // Séparer la phrase en caractères
    let separation = phrase.split("");
    
    // Nettoyer la phrase originale (minuscules, sans espaces ni caractères spéciaux)
    let phraseString = separation.join("");
    let phraseLow = phraseString.toLowerCase();
    let phraseSansEspace = phraseLow.replace(/[^a-z0-9]/gi, "");
    
    // Inverser et nettoyer
    let inverser = separation.reverse();
    let phraseInverseString = inverser.join("");
    let phraseInvLow = phraseInverseString.toLowerCase();
    let phraseInvSansEspace = phraseInvLow.replace(/[^a-z0-9]/gi, "");
    
    // Retourner true si palindrome, false sinon
    return phraseSansEspace === phraseInvSansEspace;
}

/* ===================================
   ÉTAPE 1 : Vérifier la validité d'une date
   =================================== */

function isValidDate(dateString) {
    // Vérifier le format de base
    if (!dateString || dateString.split("/").length !== 3) {
        return false;
    }
    
    const parts = dateString.split("/");
    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);
    
    // Vérifier que ce sont des nombres
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }
    
    // Vérifier l'année (4 chiffres)
    if (year < 1000 || year > 9999) {
        return false;
    }
    
    // Vérifier le mois (1-12)
    if (month < 1 || month > 12) {
        return false;
    }
    
    // Fonction d'aide pour le nombre de jours par mois
    function maxDaysInMonth(month, year) {
        if (month === 2) {
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                return 29;
            } else {
                return 28;
            }
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            return 30;
        } else {
            return 31;
        }
    }
    
    // Vérifier le jour
    const maxDays = maxDaysInMonth(month, year);
    if (day < 1 || day > maxDays) {
        return false;
    }
    
    return true;
}

/* ===================================
   ÉTAPE 2 : Vérifier si une date est un palindrome
   =================================== */

function isDatePalindrome(dateString) {
    // Vérifier d'abord la validité
    if (!isValidDate(dateString)) {
        return false;
    }
    
    // Utiliser ta fonction isPalindrome
    return isPalindrome(dateString);
}

/* ===================================
   ÉTAPE 3 : Trouver les prochaines dates palindromes
   =================================== */

function getNextPalindromes(x) {
    const results = [];
    let currentDate = new Date();
    
    while (results.length < x) {
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const dateString = `${day}/${month}/${year}`;
        
        if (isDatePalindrome(dateString)) {
            results.push(dateString);
        }
        
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    results.forEach(date => console.log(date));
}

/* ===================================
   FONCTION BONUS : Tester les palindromes avec affichage
   =================================== */

function testPalindrome(phrase) {
    if (isPalindrome(phrase)) {
        console.log("'" + phrase + "'" + " est un palindrome !");
    } else {
        console.log("'" + phrase + "'" + " n'est pas un palindrome.");
    }
}

/* ===================================
   TESTS
   =================================== */

console.log("=== Tests de phrases palindromes ===");
testPalindrome("HOLA");
testPalindrome("KAYAK");
testPalindrome("ALA");
testPalindrome("Bonjour");
testPalindrome("Reconocer");
testPalindrome("Eva usaba rimel y le miraba suave");

console.log("\n=== Tests isValidDate ===");
console.log(isValidDate("03/04/2001")); // true
console.log(isValidDate("03/14/2001")); // false
console.log(isValidDate("31/11/2001")); // false

console.log("\n=== Tests isDatePalindrome ===");
console.log(isDatePalindrome("11/02/2011")); // true
console.log(isDatePalindrome("03/04/2001")); // false

console.log("\n=== Les 8 prochaines dates palindromes ===");
getNextPalindromes(8);