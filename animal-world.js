import { Dog } from "./inheritence/Dog.js";
import { Cat } from "./inheritence/Cat.js";

console.clear();

const rexas = new Dog('Rex');
console.log(rexas.intro());

const brisius = new Dog('Brisius');
console.log(brisius.intro());
console.log(brisius.voice());


const rainis = new Cat('Rainis');
console.log(rainis.intro());
console.log(rainis.voice());

const tom = new Cat('Tom');
console.log(tom.voice());