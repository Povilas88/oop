export class Fish {
    constructor(name) {
        this.name = name;
        this.animalType = 'fish';
        this.finCount = 3;
        this.sound = '';
        this.emoji = '🐟';
        this.emojiCount = 1;
    }

    intro() {
        return `Hello, I am a ${this.animalType} and my name is ${this.name}.`;
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`;
    }
}