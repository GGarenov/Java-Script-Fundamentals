
// · The third parameter - sword price - is the floating-point number in the range [0, 1000].

// · The fourth parameter - shield price - is the floating-point number in the range [0, 1000].

// · The fifth parameter - armor price - is the floating-point number in the range [0, 1000].


function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    for (let i = 1; i < lostFight; i++) {
        if (i % 2 === 0) {
            sum += helmetPrice;
        }
        if (i % 3 === 0) {
            sum += swordPrice;
        }
        if (i % 6 === 0) {
            sum += shieldPrice;
        }
        if (i % 12 === 0) {
            sum += armorPrice;
        }
    }

     console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}