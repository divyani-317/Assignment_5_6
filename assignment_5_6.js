
// ----------   DIVYANI  - 895317  --------------


// Function that initialize car object
function Car(brand, model, year, color, price, gas) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.gas = gas;
}

// Creating multiple objects
let car1 = new Car("Honda", "CR-V", 2023, "Red", "50,000", 45);
let car2 = new Car("Ford", "F-150", 2020, "Black", "25,000", 30);
let car3 = new Car("BMW", "X5", 2022, "Green", "60,000", 65);
let car4 = new Car("Mazda", "CX-5", 2019, "White", "15,000", 30);
let car5 = new Car("Audi", "Q7", 2018, "Silver", "52,000", 30);
let car6 = new Car("Kia", "Forte", 2020, "Blue", "21,000", 56);

// Function taking Car object as a parameter
function honkCar(car) {
    console.log("Tuut tuut");
    console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}, Price: ${car.price}`);
    console.log(`Current gas level: ${car.gas} liters\n`);
}

// Calling honkCar by passing the objects
honkCar(car1);
honkCar(car2);
honkCar(car3);
honkCar(car4);
honkCar(car5);
honkCar(car6);
