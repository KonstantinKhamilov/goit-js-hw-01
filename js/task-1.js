function makeTransaction (quantity, pricePerDroid) {
    let totalPrice = quantity * pricePerDroid;
    return {totalPrice, quantity};
}

let transaction = makeTransaction (5, 3000);
console.log("You ordered " + transaction.quantity + " droids worth " + transaction.totalPrice + " credits!");

transaction = makeTransaction (3, 1000);
console.log("You ordered " + transaction.quantity + " droids worth " + transaction.totalPrice + " credits!");

transaction = makeTransaction (10, 500);
console.log("You ordered " + transaction.quantity + " droids worth " + transaction.totalPrice + " credits!");
