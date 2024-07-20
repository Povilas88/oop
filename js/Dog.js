export class Dog {
    constructor(vardas, kailiospalva, metai) {
        this.name = vardas;
        this.furColor = kailiospalva;
        this.age = metai;
        this.legCount = 4;
        this.hasTail = true;
    }

    birthday() {
        this.age++;
        return `suns ${this.age} gimtadienis`;
    }

    lostLeg() {
        if (this.legCount === 0) {
            return `Suo jau turi 0 koju`;
        }
        this.legCount--;
        return `Suo prarado koja....😢`;
    }

    hi() {
        return 'Suo sako: auau!';
    }

    think() {
        return 'Dog thinks';
    }

    addNumbers(a, b) {
        return `Suo suskaiciavo ${a} + ${b} = ${a + b}.`;
    }

    manybones(count) {
        return `Many bones: ${'🍗'.repeat(count >= 0 ? count : 0)}`;
    }
}

