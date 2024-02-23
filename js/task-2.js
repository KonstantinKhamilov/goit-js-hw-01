function getShippingMessage (country, price, deliveryFee) {

    let totalPriceDelivery = price + deliveryFee;

    return {country,totalPriceDelivery};

}

let delivery = getShippingMessage ("Australia", 120, 50);
console.log ("Shipping to " + delivery.country + " will cost " + delivery.totalPriceDelivery + " credits");

delivery = getShippingMessage ("Germany", 80, 20);
console.log ("Shipping to " + delivery.country + " will cost " + delivery.totalPriceDelivery + " credits");

delivery = getShippingMessage ("Sweden", 100, 20);
console.log ("Shipping to " + delivery.country + " will cost " + delivery.totalPriceDelivery + " credits");




/*

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"

console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"

console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
*/