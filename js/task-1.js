function makeTransaction (quantity, pricePerDroid) {
    
    let quantity;
    let pricePerDroid;
    let totalPrice = quantity*pricePerDroid;


/*
quantity = 3;
pricePerDroid = 1000;
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"

quantity = 10;
pricePerDroid = 500;
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
*/

return totalPrice;
}

makeTransaction();

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log("You ordered " + quantity + " droids worth " + totalPrice + " credits!");

