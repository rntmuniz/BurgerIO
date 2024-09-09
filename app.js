const itensList = document.querySelector('.itens-list');

const itens = [
    {name: 'X-Bacon', price: '12,90', image: 'x-bacon.jpg'},
    {name: 'Double-X', price: '14,90', image: 'double-x.jpg'},
    {name: 'O Burger-X', price: '17,90', image: 'o-burger-x.jpg'},
    {name: 'X-Burger', price: '15,90', image: 'x-burger.jpg'},
    {name: 'X-Futuro', price: '18,90', image: 'x-futuro.jpg'},
    {name: 'X-Salada', price: '22,90', image: 'x-salada.jpg'}
];

document.addEventListener('DOMContentLoaded', ()=> {
    
    let output = '';

    itens.forEach(({name, price, image})=> {
        output += `<div class="item-card">
               
            <img class="item-image" src="assets/${image}" alt="X-Bacon">
            
                   <div class="card-content">
                   
                    <h2>${name}</h2>
                   
                    <p class="item-price"><span class="less-price">R$</span> ${price}</p>
                   
                    <div class="item-raiting">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star-half'></i>
                   </div>

                    <div class="item-option">
                        <a href="item_details.html?name=${name}&price=${price}&image=${image}" class="option-detail">Ver detalhes</a>
                        <div class="icon-option">
                            <i class='bx bx-chat'></i>
                        </div>
                        <div class="icon-option">
                            <i class='bx bx-heart'></i>
                        </div>
                    </div>
               </div>
 
             </div>`
    })

    itensList.innerHTML = output;

});


// Registro do ServiceWorker
// Verificação se ele é suportado pelo browser
// Quando a página é carregada fazemos os registro
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function(){
        navigator.serviceWorker
        .register("/serviceWoeker.js")
        .then(res => console.log("servive worker registred"))
        .catch(err => console.log("service worker not registred", err))
    })
}

