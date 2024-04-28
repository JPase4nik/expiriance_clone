const Car = {
    label: "Mercedes",
    year: 2000,
    model: "B180",
    color: "black",
    getInfo: function () {
        let info = "";
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                info += `${key}: ${this[key]}, `;
            }
        }
        return info;
   }
};
Car.type = "jeep"
console.log(Car.getInfo());