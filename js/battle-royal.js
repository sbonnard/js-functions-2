
/**
 * Return a random value between 0 and a chosen number.
 * @param {number} max - chosen number
 * @returns {number} - random value
 */
function getRandomValue(max) {
    return Math.floor(Math.random() * (max + 1));
}


/**
 * Gets a random value from an array
 * @param {array} array of datas 
 * @returns {*} - a random value
 */
function getRandomArrayValue(array) {
    return array[getRandomValue(array.length - 1)];
}

const characters = [
    {
        name: 'Zangief',
        life: 50,
        xp: 7,
        weapon: 9,
        shield: 8,
        alive: true
    },
    {
        name: 'Chun-Li',
        life: 50,
        xp: 7,
        weapon: 8,
        shield: 9,
        alive: true
    },
    {
        name: 'Blanca',
        life: 50,
        xp: 4,
        weapon: 3,
        shield: 6,
        alive: true
    },
    {
        name: 'Ken',
        life: 50,
        xp: 4,
        weapon: 6,
        shield: 3,
        alive: true
    }
];

console.table(characters);

/**
 * Get random attack score from character stats
 * @param {object} attacker - An object representing a character
 * @returns {number} - Random attack score
 */
function getAttackScore(attacker) {
    return attackerScore = getRandomValue(attacker.weapon) + attacker.xp;
}

/**
 * Get random defense score from character stats
 * @param {object} defender - An object representing a character
 * @returns {number} - Random defense score
 */
function getDefenseScore(defender) {
    return defenderScore = getRandomValue(defender.shield) + defender.xp;
}

/**
 * Get the defender's life after a fight comparing the attacker's score and the defender's one.
 * @param {object} attacker - An object representing a character.
 * @param {object} defender - An object representing a character.
 * @returns {number} - The life of the defender after the fight.
 */
function getFightResult(attacker, defender) {
    if (getAttackScore(attacker) > getDefenseScore(defender) && attacker != defender) {
        defender.life -= attackerScore - defenderScore;
    }
    console.log(attacker, attackerScore, defender, defenderScore)
    return defender.life
};

const attacker = getRandomArrayValue(characters);
const defender = getRandomArrayValue(characters);
let attackerScore = 0;
let defenderScore = 0;

console.log(
    getFightResult(attacker, defender)
);
