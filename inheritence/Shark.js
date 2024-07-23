import { Fish } from "./Fish.js";

export class Shark extends Fish {
    constructor(name) {
        this.name = name;
        this.animalType = 'shark';
        this.sound = 'rrr';
        this.emoji = '🦈'
    }
}
