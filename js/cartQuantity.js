
const cardsItemQuantity = document.querySelector(".cart-item-quantity")

export function showQuantity() {
    const cartItemArray = JSON.parse(localStorage.getItem("WOCOMITEMS"))
    cardsItemQuantity.innerHTML = `${cartItemArray == null ? "0" : cartItemArray?.length}`
}

showQuantity()