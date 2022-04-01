const btn = document.getElementById('btn')
const salida = document.getElementById('salida')
const discount = 18

const precioConDesc = (price, discount) => {
    return (price * (100 - discount)) / 100
}

btn.onclick = () => {
    let price = document.getElementById('price')
    let value = document.getElementById('value')
    let discount = document.getElementById('discount')
    if (price.value && discount.value){
        if (discount.value > 100) {
            salida.innerText = "Wrong discount value";
        }
        else 
            salida.innerText = `The discounted price is:  ${value.value}${precioConDesc(parseInt(price.value), parseInt(discount.value))}.`
    } else {
        salida.innerText = "Insert the required fields!"
    }
}