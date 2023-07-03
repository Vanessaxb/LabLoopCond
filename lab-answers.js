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
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for( let turtle of ninjaTurtles) { //goes through the legth of the array
           
    console.log(turtle.toUpperCase());
}

//*Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8]);
favMovies.sort(); //alphabetically order
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift("Guardians of the Galaxy");
console.log(favMovies.indexOf("Django Unchained")); // find index of "Django Unchained" wihtout counting
favMovies.splice(15,1, "Avatar");
console.log(favMovies.length);//19
const newMovieList = favMovies.slice(10);
console.log(newMovieList);
console.log(favMovies);

console.log(favMovies.indexOf("Django Unchained"));// logs -1 from item removed from Array



// //*Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1,1);// deleted "Eggbert"
console.log(whereIsWaldo);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);