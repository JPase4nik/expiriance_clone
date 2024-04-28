const services = {
    "haircutting": "60 UAH",
    "shaving": "80 UAH",
    "head washing": "100 UAH",
    totalPrice: function () {
        let totalPrice = 0;   // We initialize the totalPrice variable to store the total cost of services
        for (let service in this) {
            if (typeof this[service] !== 'function') {
                let price = parseFloat(this[service].replace("UAH", "").trim()); // We get the price of the service and convert it into a numerical value
                totalPrice += price; // We add the price of the service to the total cost
            }
        }
        return totalPrice;
    
   },
   minPrice: function() {
    let minPrice = Infinity; // The initial value of minPrice is set to positive infinity
    for (let service in this) {
        if (typeof this[service] !== 'function') {
            let price = parseFloat(this[service].replace("UAH", "").trim());
            if (price < minPrice) {
                minPrice = price; // Update minPrice if a new minimum value is found
            }
        }
    }
    return minPrice;
   },
   maxPrice: function () {
    let maxPrice = - Infinity // The initial value of maxPrice is set to negative infinity
    for (let service in this) {
        if (typeof this[service] !== 'function') {
            let price = parseFloat(this[service].replace("UAH", "").trim());
            if (price > maxPrice) {
                maxPrice = price; // Update maxPrice if a new maximum value is found
            }
        }
    }
    return maxPrice;
   }
};
services.nails = "50 UAH"
console.log("Total price all services " + "= " + services.totalPrice());
console.log("Minimal price of services " + "= " + services.minPrice());
console.log("Maximal price of services " + "= " + services.maxPrice());



