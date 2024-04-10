
const characters = [
    {
        name: 'Zangief',
        life: 50,
        xp: 5,
        xp: 7,
        weapon: 9,
        shield: 8,
        /**
         * Get a random weapon force added to a fixed xp.
         * @returns {number} A random attack number
         */
        attackForce: function(){
            let weaponForce = 0;
            return weaponForce = Math.floor(Math.random() * (this.weapon + 1)) + this.xp;
        },
        defenseForce: function(){
            let shieldForce = 0;
            return shieldForce = Math.floor(Math.random() * (this.shield + 1)) + this.xp;
        }
    },
    {
        name: 'Chun-Li',
        life: 50,
        xp: 7,
        weapon: 8,
        shield: 9,
    },
    {
        name: 'Blanca',
        life: 50,
        xp: 4,
        weapon: 3,
        shield: 6,
    },
    {
        name: 'Ken',
        life: 50,
        xp: 4,
        weapon: 3,
        shield: 3,
    }
];


console.table(characters);
console.log(characters[0]);


function randomAttackForce(weapon){
    let weaponForce = 0;
    return weaponForce = Math.floor(Math.random() * (weapon + 1));
}
console.log(`${characters[0].name} frappe son adversaire et lui inflige ${characters[0].attackForce()} dégâts.`);
console.log(`${characters[0].name} se fait prend un coup. Il a une défense de ${characters[0].defenseForce()}.`)

/**
 * Get a random value from an array using its indexes.
 * @param {array} array The array you want a random value from.
 * @returns {number} The random value.
 */
function getRandomValueArray(array) {
    return array[Math.floor(Math.random() * (array.length))]
}


    let attacker = getRandomValueArray(array);
    let defender = getRandomValueArray(array);