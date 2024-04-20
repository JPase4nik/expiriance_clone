const user = {
    "id": "0005",
    "name": "Alice 5",
    "address": {
        "street": "1100 Main St",
        "city": "City 100"
    },
    "hobbies": [
        "Reading 5",
        "Hiking 5"
    ]
}
function printFullObject(obj) {
    for(key in obj){
        if (typeof obj[key] === 'object' ) {
            console.log(key);
            printFullObject(obj[key])
        } else {
            console.log(key + ':' + obj[key]);
        }
    }
}

function printLastHobby(obj) {
    let last_hobby = obj.hobbies.pop()
    console.log("Last Hobby: " + last_hobby)    
}

function printFormattedAddress(obj) {
    let address = obj.address
    let formatted_address = "Address: " + address.city + ", " + address.street
    console.log(formatted_address)
    
}

printFullObject(user)
printLastHobby(user)
printFormattedAddress(user)
