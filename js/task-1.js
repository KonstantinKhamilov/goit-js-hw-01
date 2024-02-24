function makeTransaction (quantity, pricePerDroid) {
    let totalPrice = quantity * pricePerDroid;
    return {totalPrice, quantity};
}

let transaction = makeTransaction (5, 3000);

console.log("You ordered " + transaction.quantity + " droids worth " + transaction.totalPrice + " credits!");
/*
console.log(makeTransaction(5, 3000));*/

transaction = makeTransaction (3, 1000);
/*
console.log(makeTransaction(3, 1000));*/

console.log("You ordered " + transaction.quantity + " droids worth " + transaction.totalPrice + " credits!");

transaction = makeTransaction (10, 500);

console.log("You ordered " + transaction.quantity + " droids worth " + transaction.totalPrice + " credits!");
/*
console.log(makeTransaction(10, 500));*/

/*
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
*/