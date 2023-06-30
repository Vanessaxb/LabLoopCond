//*Exercises

//*Easy Going
for (let num = 1; num <= 20; num++) {
    console.log(num);
}
//The commit message should read: "Easy Going answered"

//*Get Even
for (let even = 0; even <= 20; even++) {
    if (even % 2 === 0){
        console.log(even);}
}
// The commit message should read: "Get Even answered"

//*Fizz Buzz
for (let fb = 1; fb <= 100; fb++) {
    if (fb % 3 === 0 && fb % 5 === 0) {
        console.log('FizzBuzz');
    } else if (fb % 3 === 0) {
        console.log('Fizz');
    } else if (fb % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(fb);
    }
}
//The commit message should read: "Fizz Buzz answered"

//*Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee.splice(2, 1, 5001);
console.log(plantee);
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy.splice(3, 1, "Gotham City");
console.log(wolfy);
// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

// The commit message should read: "Wild Wild Life answered"

//*Yell at the Ninja Turtles
const ninjaTurtles = ["Donatello", "Leonardo", Raphael, Michaelangelo];

for (let i = 0; i < ninjaTurtles; i++) { //goes through the legth of the array
        console.log(ninjaTurtles[i].upperCase())}