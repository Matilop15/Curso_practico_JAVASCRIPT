//const OriginPrice = 100;
//const Discount = 15;

function CalculatePrice(OriginPrice, Discount) {
    const PorcToBuy = 100 - Discount;
    const PriceWithDiscount = (OriginPrice * PorcToBuy) / 100;
    return PriceWithDiscount;
}
//console.log({
//   OriginPrice,
//    Discount,
//   PorcToBuy,
//   PriceWithDiscount
//});