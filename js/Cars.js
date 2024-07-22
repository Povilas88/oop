export class Car {
    constructor(name, model, color, fuelCapacity, avgFuelConsumption) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.fuelCapacity = fuelCapacity;
        this.avgFuelConsumption = avgFuelConsumption;
        this.isEngineOn = false;
        this.speed = 0;
        this.fuel = fuelCapacity;
        this.firstDrive = false;
    }

    turnEngineOn() {
        return this.isEngineOn ? "Car engine was already on."
            : (this.isEngineOn = true, 'Car engine turned on.');
    }

    turnEngineOff() {
        return this.speed !== 0 ? 'Stop the car first.'
            : this.isEngineOn ? (this.isEngineOn = false, 'Car engine turned off.')
                : "Car engine was already off.";
    }

    startDrive() {
        if (this.isEngineOn === false) {
            return 'Turn the engine on first.';
        } else if (this.speed !== 0) {
            return 'Car is already driving';
        } else if (this.fuel <= 0) {
            return 'Add fuel first';
        } else if (!this.firstDrive) {
            this.firstDrive = true;
            this.avgFuelConsumption *= 2;
        }
        this.speed++;
        this.fuel -= this.avgFuelConsumption;
        return `Car starts to drive, fuel left ${this.fuel <= 0 ? 0 : this.fuel.toFixed(2)}`;
    }


    driving() {
        if (this.speed === 0) {
            return 'Start driving first.';
        } else if (this.fuel <= 0) {
            this.speed = 0;
            return 'Add fuel first.';
        }
        else if (this.firstDrive) {
            this.avgFuelConsumption /= 2;
            this.firstDrive = false;
        }
        (this.fuel -= this.avgFuelConsumption) <= 0 ? this.fuel = 0 : this.fuel;
        return `You are driving, fuel left ${this.fuel.toFixed(2)}`;
    }

    stopDrive() {
        if (this.speed === 0) {
            return 'You already stopped.';
        }
        if (this.firstDrive) {
            this.speed = 0;
            this.firstDrive = false;
            this.avgFuelConsumption /= 2;
            return 'You stopped.';
        }
        this.speed = 0;
        return 'You stopped.';
    }

    addFuel() {
        if (this.speed !== 0) {
            return 'Stop the car first.';
        } else if (this.isEngineOn) {
            return 'Turn off the engine first.';
        } else if (this.fuel === this.fuelCapacity) {
            return 'Fuel tank already topped off.';
        } else {
            this.fuel = this.fuelCapacity - this.fuel;
            return `You added ${this.fuel.toFixed(2)} liters of fuel.`;
        }
    }
}