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

const user1 = { firstName: "Paul", lastName: "Rick", age: 35 };
const user2 = { firstName: "Samir", lastName: "Ah", age: 22 };
const user3 = { firstName: "Loanne", lastName: "Bourdin", age: 28 };
const user4 = { firstName: "Abdel", lastName: "Dems", age: 44 };

/**
 * Compares the age of two users and gives the oldest one.
 * @param {object} user_a an object with several properties.
 * @param {object} user_b an object with several properties.
 * @returns {object} Oldest user.
 */
function compareAge(user_a, user_b) {
    if (user_a.age > user_b.age) {
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

/**
 * Get the number of occurences of words from a text.
 * @param {text} text The text you want the words occurences from.
 * @returns An object listing all occurences of a word in a text.
 */
function countOccurencesOfWordsInText(text) {
    const dico = {};
    for (let words of text.split(/[^a-zA-Zéèàêùë]/)) {
        if (words != "") {
            if (dico[words] != undefined) {
                dico[words] += 1;
            }
            else {
                dico[words] = 1
            };
        }
    }
    return dico
}

console.log(countOccurencesOfWordsInText("Je suis un ananas. Les ananas c'est trop cool. Ah les ananas ! Je pourrais parler d'ananas pendant des heures"));
console.log(countOccurencesOfWordsInText("Mangez des pommes. C'est délicieux les pommes."));

/* ------------------------------------------------------*/

console.info("5/ Implémentez une fonction qui retourne une valeur entière aléatoire comprise entre 2 valeurs passées en paramètres.");

/**
 * get a random number between two values.
 * @param {number} min A number smaller than max.
 * @param {number} max A number higher than min.
 * @returns {number} A random number between min and max.
 */
function getRandomNumber(min, max) {
    let minValue = Math.ceil(min);
    let maxValue = Math.floor(max);
    return Math.floor(Math.random() * ((maxValue + 1) - minValue) + 1);
}

console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(80, 922));

/* ------------------------------------------------------*/

console.info("6/ Implémentez une fonction qui retourne une chaîne de caractère aléatoire composée de chiffres et de lettres en majuscule et minuscule, de la taille passée en paramètre.");
/**
 * Generates a random string out of letters and numbers.
 * @param {number} length The length of the string generated.
 * @returns {string} The random string.
 */
function generateRandomString(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
    }
    return result
}

console.log(generateRandomString(25));
console.log(generateRandomString(5));

/* ------------------------------------------------------*/

console.info("Pour les questions suivantes enrichissez l'objet 'newbie' ci-dessous.");


const newbie = {
    firstName: "Paul",
    lastName: "Bismuth",
    birthdate: "1995-04-11",
    job: "web developer",
    city: "Detroit",
    skills: ["HTML", "CSS"],

    /**
     * Get age from birthdate object.
     * @returns {number} age of the object
     */
    getAge: function () {
        let birthDate = new Date(this.birthdate);

        // Is the birthdate a valid date ?
        if (!(birthDate instanceof Date) || isNaN(birthDate)) return;

        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (
            today.getMonth() < birthDate.getMonth()
            ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    },

    /**
     * Add a new skill in skills list.
     * @param {string} skill - New skill name
     */
    addSkill: function (skill) {
        this.skills.push(skill);
    },

    /**
     * Get text introduction for object.
     * @returns {string} user presentation.
     */
    introduceMySelf: function () {
        return `Je m'appelle ${this.lastName}, ${this.firstName}, j'ai ${this.getAge()} ans. Je vis à ${this.city}. Je suis ${this.job} et mes compétences sont ${this.readSkills()}.`;
    }
};

/* ------------------------------------------------------*/

console.info("7/ Implémentez une méthode retournant l'âge de Paul.");

console.log(newbie.getAge());

/* ------------------------------------------------------*/

console.info("8/ Implémentez une méthode retournant un texte listant les compétences de Paul séparées par des virgules.");

/**
 * Reads his/her/their skills.
 * @returns {string} skills in string.
 */
newbie.readSkills = function () {
    return this.skills.join(", ");
};

console.log(newbie.readSkills());

/* ------------------------------------------------------*/

console.info("9/ Implémentez une méthode qui ajoute à Paul une compétence passée en paramètre.");
console.info("Ajoutez la compétence Javascript et utilisez la méthode précédente pour vous assurer du résultat.");

newbie.addSkill("JavaScript");
console.log(newbie.readSkills());

/* ------------------------------------------------------*/

console.info("10/ Implémentez une méthode qui fait parler Paul pour qu'il se présente avec toutes ses caractéristiques. (Nom, prénom, âge, où il vit, son métier, ...)");
console.log(newbie.introduceMySelf());