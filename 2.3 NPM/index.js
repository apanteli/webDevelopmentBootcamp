import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();
console.log(`My name is ${sillyName}`);

var SuperHeroName = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I am ${SuperHeroName}`);
