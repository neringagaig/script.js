function Car(brand, model, engine, price) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = price;
    this.getPrice = () => {
        let additionalPrice = 0;
        if(this.engine === "electric"){
            additionalPrice = 10000;
        } else if(this.engine === "diesel"){
            additionalPrice = 5000;
        }
        return this.basePrice + additionalPrice;
    }
}

const myCar = new Car("Audi", "A4", "diesel", 3800);

console.log(myCar.getPrice());