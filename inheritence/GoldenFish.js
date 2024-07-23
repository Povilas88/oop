import { Fish } from "./Fish.js";

export class GoldenFish extends Fish {
    constructor(name) {
        this.name = name;
        this.animalType = 'golden fish';
        this.finCount = 7;
        this.sound = 'wish';
        this.emojiCount = 3;
    }
}