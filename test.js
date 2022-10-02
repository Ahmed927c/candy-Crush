//Code une fonction, dans le langage de ton choix, qui détermine si la chaîne S est un palindrome. Un palindrome est un mot ou une phrase qui peut se lire dans les 2 sens (exemples : "elle", "radar", "mon nom").
    function isPalindrome(s) {
        var s = s.toLowerCase();
        var s = s.replace(/[^a-z0-9]/g, '');
        var s = s.split('');
        var s = s.reverse();
        var s = s.join('');
        var s = s.replace(/[^a-z0-9]/g, '');
        var s = s.toLowerCase();
        return s;
    }

// Code une boucle, dans le langage de ton choix, qui affiche tous les nombres pairs entre 1 et 100.
function logEvenNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// Code une fonction, dans le langage de ton choix, qui détermine s’il existe 3 entiers dont le produit fait 30 dans le tableau T.
// Code une fonction pour trouver le maximum du tableau t, sans utiliser de fonction "max".
function findMax(t) {
    let max = t[0];
    for (let i = 1; i < t.length; i++) {
        if (t[i] > max) {
        max = t[i];
        }
    }
    return max;
    }

    // Complète cette fonction JavaScript qui calcule la distance en km entre deux points, étant donné leurs coordonnées géographiques (latitude, longitude). Google est autorisé pour cette question.
    function getKmDistance(lat1,lng1,lat2,lng2) {
        const R = 6371; // Radius of the earth in km
        const dLat = deg2rad(lat2-lat1);  // deg2rad below
        const dLon = deg2rad(lng2-lng1);
        const a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const d = R * c; // Distance in km
        return d;
    }
    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    // Code une fonction qui prend en paramètre un tableau de nombres et qui retourne un tableau contenant uniquement les nombres pairs.
    function getEvenNumbers(t) {
        const evenNumbers = [];
        for (let i = 0; i < t.length; i++) {
            if (t[i] % 2 === 0) {
            evenNumbers.push(t[i]);
            }
        }
        return evenNumbers;
    }
