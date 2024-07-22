import { Dog } from "./js/Dog.js";
import { Car } from "./js/Cars.js";

const rex = new Dog("Rex", 'black', 3);
console.log(rex);

console.log(rex.hi());
console.log(rex.think());
console.log(rex.addNumbers(5, 7));
console.log(rex.manybones(5));

console.clear();

const brisius = new Dog('Brisius', "white", 2);
console.log(brisius);

console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());

console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(brisius.birthday());

console.clear();

/*
Instructions
class -> Car(Automobilis)

Savybės:

-   pavadinimas(Audi)
    - modelis(80)
    - spalva
    - kuro bako talpa(litrais)
    - vidutinės kuro sąnaudos 100km
    - ar įjungtas varyklis(default: false)
    - greitis(default: 0)

Metodai:

-   ijungti varykli
    - ijungto varykli dar karto ijungti negalima, sugadinti starteri
    - isjungti varykli
    - isjungto varyklio isjungti negalima...
-   pradeti vaziuoti(greitis tiesiog tampa ne nulinis ir sunaudoja 2x litrus kuro sanaudu)
    - vaziuoti(naudoja 1x litro kuro sanaudu)
    - sustoti(greitis tiesiog tampa nulinis)
    - kiek liko kuro ?
    - uzpilti kuro baka(kiek litrais)
*/

const automobilis = new Car('Audi', 80, 'Silver', 68, 7.8);

console.log(automobilis.name);
console.log(automobilis.model);

console.log(automobilis.turnEngineOff());
console.log(automobilis.turnEngineOn());
console.log(automobilis.turnEngineOn());
console.log(automobilis.turnEngineOff());
console.log(automobilis.startDrive());
console.log(automobilis.turnEngineOn());
console.log(automobilis.startDrive());
console.log(automobilis.startDrive());
console.log(automobilis.driving());
console.log(automobilis.driving());
console.log(automobilis.driving());
console.log(automobilis.driving());
console.log(automobilis.driving());
console.log(automobilis.driving());
console.log(automobilis.driving());
console.log(automobilis.driving());
console.log(automobilis.startDrive());
console.log(automobilis.stopDrive());
console.log(automobilis.addFuel());
console.log(automobilis.turnEngineOff());
console.log(automobilis.addFuel());
console.log(automobilis.addFuel());
console.log(automobilis.startDrive());
console.log(automobilis.turnEngineOn());
console.log(automobilis.startDrive());
console.log(automobilis.driving());
console.log(automobilis.driving());
console.log(automobilis.stopDrive());
console.log(automobilis.startDrive());
console.log(automobilis.stopDrive());
console.log(automobilis.startDrive());
console.log(automobilis.stopDrive());
console.log(automobilis.turnEngineOff());
console.log(automobilis.addFuel());


















