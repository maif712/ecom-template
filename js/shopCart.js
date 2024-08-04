
const mockData = [
    {
        id: "1f0c2c57-0376-4fe3-g784-43912c127916",
        name: "کلیستوکاکتوس",
        category: "کاکتوس",
        imgUrl: "./assets/images/plant-img-1.jpg",
        price: 250
    },
    {
        id: "1f0c2c57-0376-4fe3-a328-43912c127916",
        name: "رز هلندی",
        category: "گیاه",
        imgUrl: "./assets/images/plant-img-2.jpg",
        price: 150,
        oldPrice: 250
    },
    {
        id: "1f0c2c57-0376-4fe3-b157-43912c127916",
        name: "کاکتوس آبی",
        category: "زینتی",
        imgUrl: "./assets/images/plant-img-3.jpg",
        price: 550,
        oldPrice: 800
    },
    {
        id: "1f0c2c57-0376-4fe3-b354-43912c127916",
        name: "نیلوفر",
        category: "کاکتوس",
        imgUrl: "./assets/images/plant-img-4.jpg",
        price: 180,
        oldPrice: 0
    },
    {
        id: "1f0c2c57-0376-4fe3-bb44-43912c127916",
        name: "رز قرمز",
        category: "گیاه",
        imgUrl: "./assets/images/plant-img-5.jpg",
        price: 200,
        oldPrice: 0
    }
]

import { showQuantity } from "./cartQuantity.js"

function loadItems() {
    const cart = JSON.parse(localStorage.getItem("WOCOMITEMS"))
    return cart
}

function setItems(itemList) {
    localStorage.setItem("WOCOMITEMS", JSON.stringify(itemList))
}


const cardsContainer = document.querySelector(".products-container")
const cardsItemQuantity = document.querySelector(".cart-item-quantity")

function RenderProduct() {
    //get all items from localStorage


    //clear all items

    //render all items
    mockData.forEach(item => {
        const itemElement = document.createElement("div")
        itemElement.classList.add("featured-product__card")
        itemElement.innerHTML = `
                        <div class="featured-product__thumbnail">
                            <button class="add-to-card-btn">
                                <span>اضافه به سبد</span>
                                <div class="add-to-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </div>
                            </button>
                            <a href="./single.html?id=${item.id}">
                                <figure class="featured-product__figure">
                                    <img src="${item.imgUrl}" alt="${item.name}">
                                </figure>
                            </a>
                        </div>
                        <div class="featured-product__desc">
                            <span class="featured-product__category">${item.category}</span>
                            <h4 class="featured-product__title"><a href="./single.html?id=${item.id}">${item.name}</a></h4>
                            <div class="featured-product__prices-wrapper">
                                ${item.oldPrice > 0 ? `<span class="old-price">${item.oldPrice} تومان</span>` : "<span style='display: none'></span>"}
                                <span class="price">${item.price} تومان</span>
                            </div>
                        </div>
        `

        cardsContainer.appendChild(itemElement)
    });

    // show the items quantity in cart
    showQuantity()
}

RenderProduct()

cardsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("add-to-card-btn")) {
        const selectedItem = e.target.closest(".featured-product__card")
        if(selectedItem) {
            const index = Array.from(cardsContainer.children).indexOf(selectedItem)
            const itemInfo = mockData[index]
            handleAddToCart(itemInfo)
        }
    }
})

function handleAddToCart(item) {
    let cart = loadItems() || []
    const existingItemIndex = cart.findIndex(cartitem => cartitem.id == item.id)
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1
    }
    else {
        cart.push({ ...item, quantity: 1 })
    }
    setItems(cart)
    showQuantity()
}

// function showQuantity() {
//     const cartItemArray = loadItems()
//     cardsItemQuantity.innerHTML = `${cartItemArray == null ? "0" : cartItemArray?.length}`
// }
