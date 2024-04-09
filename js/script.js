// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.info("1/ Implémentez une fonction qui prend en paramètre les dimensions de 2 côtés d'un triangle rectangle et retourne la dimension de l'hypoténuse.");

/**
 * Get the hypotenuse of a rectangle triangle.
 * @param {number} a Segment length of a rectangle triangle.
 * @param {number} b Segment length of a rectangle triangle.
 * @returns {number} The hypotenuse of the triangle.
 */
function getHypotenuseOfTriangle(a, b) {
    return Math.hypot(a, b)
}

console.log(getHypotenuseOfTriangle(2, 3));
console.log(getHypotenuseOfTriangle(3, 4));

/* ------------------------------------------------------*/

console.info("2/ Implémentez une fonction qui retourne le nom et le prénom du plus âgé de 2 utilisateurs passés en paramètres parmi les 4 ci-dessous.");

const user1 = {firstName: "Paul", lastName: "Rick", age: 35};
const user2 = {firstName: "Samir", lastName: "Ah", age: 22};
const user3 = {firstName: "Loanne", lastName: "Bourdin", age: 28};
const user4 = {firstName: "Abdel", lastName: "Dems", age: 44};

/**
 * Compares the age of two users and gives the older one.
 * @param {object} user_a an object with several properties.
 * @param {object} user_b an object with several properties.
 * @returns {object} Older user.
 */
function compareAge (user_a, user_b) {
    if(user_a.age > user_b.age) {
        return user_a
    }
    else {
        return user_b
    }
}

console.log(compareAge(user1, user4));
console.log(compareAge(user3, user2));

/* ------------------------------------------------------*/

console.info("3/ Implémentez une fonction qui retourne la valeur la plus grande d'un tableau de nombres, quelqu'en soit la taille.");

const table = [6546, 664, 4988, 9666, 8956, 63]
const table2 = [65458726, 7664, 40.988, 964266, 8956, 63]

/**
 * Get the highest value from an array.
 * @param {array} array An array composed of numbers only.
 * @returns {number} The highest number from the array.
 */
function getHighestValueFromArray(array) {
    return Math.max(...array)
}

console.log(getHighestValueFromArray(table));
console.log(getHighestValueFromArray(table2));

/* ------------------------------------------------------*/

console.info("4/ Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot.");

function getNumberOfWordsInText(text) {
   const textObject = {text};
    return text.split(' ').length
}

console.log(getNumberOfWordsInText("Je suis un ananas."));
console.log(getNumberOfWordsInText("Mangez des pommes. C'est délicieux les pommes."));

/* ------------------------------------------------------*/

console.info("5/ Implémentez une fonction qui retourne une valeur entière alétoire comprise entre 2 valeurs passées en paramètres.");

console.log();
console.log();

/* ------------------------------------------------------*/

console.info("6/ Implémentez une fonction qui retourne une chaîne de caractère aléatoire composée de chiffres et de lettres en majuscule et minuscule, de la taille passée en paramètre.");

console.log();
console.log();

/* ------------------------------------------------------*/

console.info("Pour les questions suivantes enrichissez l'objet 'newbie' ci-dessous.");

const newbie = {
    firstName: "Paul",
    lastName: "Bismuth",
    birthdate: "1995-02-14",
    job: "web developer",
    city: "Detroit",
    skills: ["HTML", "CSS"]
};

/* ------------------------------------------------------*/

console.info("7/ Implémentez une méthode retournant l'âge de Paul.");

console.log();

/* ------------------------------------------------------*/

console.info("8/ Implémentez une méthode retournant un texte listant les compétences de Paul séparées par des virgules.");

console.log();

/* ------------------------------------------------------*/

console.info("9/ Implémentez une méthode qui ajoute à Paul une compétence passée en paramètre.");
console.info("Ajoutez la compétence Javascript et utilisez la méthode précédente pour vous assurer du résultat.");

console.log();

/* ------------------------------------------------------*/

console.info("10/ Implémentez une méthode qui fait parler Paul pour qu'il se présente avec toutes ses caractéristiques. (Nom, prénom, âge, où il vit, son métier, ...)");
console.log();