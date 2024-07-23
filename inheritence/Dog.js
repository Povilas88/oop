import { Pet } from "./Pet.js";

export class Dog extends Pet {
    constructor(name) {
        super(name);
        this.animalType = 'dog';
        this.sound = 'au';
        this.emoji = '🐕';
        this.emojiCount = 4;
    }
}