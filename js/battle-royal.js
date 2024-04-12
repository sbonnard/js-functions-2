
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

let characters = [
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
        weapon: 6,
        shield: 7,
        alive: true
    },
    {
        name: 'Ken',
        life: 1,
        xp: 4,
        weapon: 7,
        shield: 5,
        alive: true
    }
];

let i = 0;
let chall = getChallengers(characters);


/**
 * Get random attack score from character stats
 * @param {object} attacker - An object representing a character
 * @returns {number} - Random attack score
*/
function getAttackScore(attacker) {
    return getRandomValue(attacker.weapon) + attacker.xp;
}

/**
 * Get random defense score from character stats
 * @param {object} defender - An object representing a character
 * @returns {number} - Random defense score
*/
function getDefenseScore(defender) {
    return getRandomValue(defender.shield) + defender.xp;
}

/**
 * Get the defender's life after a fight comparing the attacker's score and the defender's one.
 * @param {object} attacker - An object representing a character.
 * @param {object} defender - An object representing a character.
 * @returns {number} - The life of the defender after the fight.
*/
function getFightResult(attacker, defender) {
    let attackerScore = getAttackScore(attacker);
    let defenderScore = getDefenseScore(defender);
    if (attackerScore > defenderScore) {
        defender.life -= attackerScore - defenderScore;
    }
    console.log(attacker, attackerScore, defender, defenderScore)
    return defender.life
};

/**
 * Get both challengers for a round. Index[0] defines the attacker and index[1] defines the defender in every other functions.
 * @param {array} array - The array you want the challengers (objects) to come from.
 * @returns {array} - The new array created by the function with the two challengers (objects).
*/
function getChallengers(array) {
    const challengers = [];
    while (challengers.length < 2) {
        challengers.push(getRandomArrayValue(array));
        if (challengers[0] === challengers[1]) {
            challengers.pop();
        }
    }
    return challengers
}


function isStillAlive(character) {
    return character.life > 0;
  }
  
characters = characters.filter(isStillAlive);

function ejectChallenger(array) {
if (array[i].life <= 0) {
    console.filter(array[i])
}
return array
}
console.log(ejectChallenger(characters));

function launchBattleRoyal(array) {
    let winner;
    while (array.length > 1) {
        getChallengers(array);
        getFightResult(chall[0], chall[1])
        console.table(characters);
    }
    return winner
}


console.log(getFightResult(chall[0], chall[1]));
// console.log(launchBattleRoyal(characters));
console.table(characters)
