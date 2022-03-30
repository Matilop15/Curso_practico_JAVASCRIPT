function CalculatePrice(OriginPrice, Discount) {
    const PorcToBuy = 100 - Discount;
    const PriceWithDiscount = (OriginPrice * PorcToBuy) / 100;
    return PriceWithDiscount;
}

function CalculatePriceDiscount() {
    const innputPrice = document.getElementById("InputPrice");
    const PriceValue = innputPrice.value;

    let Discount;
    
    const innputDiscount = document.getElementById("CouponDiscount");
    const DiscountValue = innputDiscount.value;
    if (!Coupons.includes(DiscountValue)) {
        alert("The coupon" + DiscountValue + "is not valide");
    } else if (DiscountValue === "JuanDC_es_Batman") {
        Discount = 15;
    } else if (DiscountValue === "pero_no_le_digas_a_nadie") {
        Discount = 30;
    } else if (DiscountValue === "es_un_secreto") {
        Discount = 25;
    }


//switch(DiscountValue) {
//    case Coupons[0]: // "JuanDC_es_Batman"
//    Discount = 15;
//   case Coupons[1]: // "pero_no_le_digas_a_nadie"
//    Discount = 30;
//    case Coupons[2]: // "es_un_secreto"
//    Discount = 25;
//}

const FinalPrice = CalculatePrice(PriceValue, Discount);

const ResultFinal = document.getElementById("ResultPrice");
ResultFinal.innerText = "The final price is: $" + FinalPrice;
}
const Coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];