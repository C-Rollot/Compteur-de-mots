//Fonction de décompte des mots
function wordCount() {
    //Récupération des inputs
    let nom = document.getElementById("nom1").value;
    let texte = document.getElementById("texte1").value;

    //Récupération de la div "Résultat"
    let resultatMots = document.getElementById("resultat-mots");

    //Découpage des mots pour les compter
    let words = texte.split(" ").length;

    //Message indiquant le nombre de mots à l'utilisateur
    let message = `Bonjour ${nom}, votre texte contient ${words} mot(s) :)`;
    resultatMots.textContent = message;
}

//Fonction de décompte des lettres
function letterCount() {
    //Récupération des inputs
    let nom = document.getElementById("nom2").value;
    let texte = document.getElementById("texte2").value;

    //Récupération de la div "Résultat"
    let resultat = document.getElementById("resultat-lettres");

    //Découpage des mots pour les compter
    let letters = texte.split("").length;

    //Message indiquant le nombre de lettres à l'utilisateur
    let message = `Bonjour ${nom}, votre texte contient ${letters} lettre(s) :)`;
    resultat.textContent = message;
}

//Récupération des boutons
let submitWords = document.getElementById("submit-words");
let submitLetters = document.getElementById("submit-letters");

//Event Listener
submitWords.addEventListener("click", wordCount);
submitLetters.addEventListener("click", letterCount);