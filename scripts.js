
var path = window.location.pathname;
const page = path.split("/").pop();

// document.write(page);

const urlParams = new URLSearchParams(window.location.search);

if (page == "item_details.html"){
const itemName = urlParams.get('name');
const itemPrice = urlParams.get('price');
const itemImage = urlParams.get('image');

// console.log(itemName);

const nameDetail = document.querySelector('.name-item');
const priceDetail = document.querySelector('.price-item');
const imageDetail = document.querySelector('.image-item');

nameDetail.textContent = itemName;
priceDetail.textContent = 'R$ ' + itemPrice;
imageDetail.src = 'assets/' + itemImage;

function openOrderConfirm(){
    window.open('confirm_order.html?name=' + itemName + '&price=' + itemPrice + '&image=' + itemImage , '_self');
}

}

if (page == "confirm_order.html") {
const urlParamsConfirm = new URLSearchParams(window.location.search);

const confirmName = urlParamsConfirm.get('name');
const confirmPrice = urlParamsConfirm.get('price');
const confirmImage = urlParamsConfirm.get('image');

const nameConfirm = document.querySelector('#item-name');
const priceConfirm = document.querySelector('#item-price');
const imageConfirm = document.querySelector('#item-image');

priceConfirm.textContent = 'R$ ' + confirmPrice;
nameConfirm.textContent = confirmName;
imageConfirm.src = 'assets/' + confirmImage;

function openWhatsApp(){
    window.open('https://wa.me/5586981728142?text=Quero%20fazer%20um%20pedido:%20' + confirmName);
}

}