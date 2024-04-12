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
 * Get 2 different and random challengers for a fight.
 * @param {array} charactersList The array you want the character's to be from.
 * @returns {array} First index of the array will draw the attacker and the second one will draw the defender.
 */
function getChallengers(charactersList) {
    let challengers = [];
    while (challengers.length < 2) {
        const c = getRandomArrayValue(charactersList);
        if (!challengers.includes(c)) {
            challengers.push(c);
        }
    }
    return challengers;
}


/**
 * fight between two characters and define the winner and the loser.
 * @param {array} challengers the first element in the array is the attacker and the second is the defender. they are objects. 
 * @returns {object}
 */
function fight(challengers) {
    const attacker = challengers[0];
    const defender = challengers[1];

    let winner;
    let loser;
    const attackPoints = getAttackScore(attacker);
    const defensePoints = getDefenseScore(defender);
    if (attackPoints > defensePoints) {
        winner = attacker;
        loser = defender;
        defender.life -= attackPoints;

        console.log(`${attacker.name} attaque ${defender.name} et a gagné le combat en lui infligeant ${attackPoints} points de dégats.`);
    }
    else {
        loser = attacker;
        winner = defender;
    
        console.log(`${defender.name} a contré l'attaque de ${attacker.name}.`);
    }

    return {
        "winner": winner.name,
        "loser": loser.name,
        attackPoints,
        defensePoints,
        "attacker life": attacker.life,
        "defender life": defender.life,
    };

}

console.table(characters);

let challengers = getChallengers(characters);
console.table(challengers);
let fightRound = fight(challengers);
console.table(fightRound);