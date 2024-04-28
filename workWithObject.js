const Car = {
    label: "Mercedes",
    year: 2000,
    model: "B180",
    color: "black",
    getInfo: function () {
        let info = "";
        for (let key in this) {
            if (typeof this[key] !== 'function') {  // check each property and if this property isn't the function - display it
                info += `${key}: ${this[key]}, `;
            }
        }
        return info;
   }
};
Car.type = "jeep"  // add new property
console.log(Car.getInfo());