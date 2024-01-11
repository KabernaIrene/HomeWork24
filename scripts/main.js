/*
1.Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення навіть після оновлення сторінки (використовувати localStorage).
2.На сторінці спочатку крім списку категорій відображається також кнопка “мої замовлення”.
3.При кліку на “мої замовлення” - пропадають категорії та відображається список усіх замовлень користувача (дата та ціна) - при кліку на замовлення - “розгортаються” деталі замовлення.
4.Реалізувати можливість видалення замовлення зі списку.
*/

const categories = document.querySelector('ul');
const categoriesArr = Array.from(categories.children);

const products = document.querySelector('.products');
const information = document.querySelector('.information');

console.log(categoriesArr);

const listProducts = document.createElement('ul');
products.appendChild(listProducts);


categories.addEventListener('click', chooseProd);

function chooseProd (event) {
    switch (event.target.textContent){
        case categoriesArr[0].textContent:
            listProducts.innerHTML = '<li>Syoss</li><li>Gliss</li><li>Pantene</li><li>Elseve</li>';
            products.addEventListener('click', informShamp);
            break;
        case categoriesArr[1].textContent:
            listProducts.innerHTML = '<li>Nivea</li><li>Lizar</li><li>L Oreal</li>';
            products.addEventListener('click', informCream);
            break;
        case categoriesArr[2].textContent:
            listProducts.innerHTML = '<li>Nivea</li><li>BioDerma</li><li>L Oreal</li><li>Acnemy</li>';
            products.addEventListener('click', informLotion);
            break;
        case categoriesArr[3].textContent:
            listProducts.innerHTML = '<li>Avon</li><li>Oriflame</li><li>Faberlic</li>';
            products.addEventListener('click', informDecor);
            break;
    }
    
}


const informProd = document.createElement('p');
information.appendChild(informProd);

const listInform = [[{name: "SYOSS", info: "Професійна лінія",price: "165 grn"}, 
                    {name: "GLISS", info: "Для всих типів волосся",price: "140 grn"},
                    {name: "PANTENE", info: "Від посічених кінчиків",price: "100 grn"},
                    {name: "ELSEVE", info: "Живлення",price: "110 grn"},],
                    [{name: "NIVEA", info: "Для жирної шкіри", price: "115 grn"},                    
                    {name: "LIZAR",info: "Для чутливої шкіри", price: "120 grn"},
                    {name: "L OREAL",info: "Для сухої шкіри",price: "110 grn"}],
                    [{name: "NIVEA", info: "Для жирної шкіри",price: "10 grn"},
                    {name: "BIODERMA", info: "Для чутливої шкіри", price: "135 grn"},
                    {name: "L OREAL", info: "Для сухої шкіри", price: "142 grn"},
                    {name: "ACNEMY", info: "Від подразнень", price: "113 grn"}],
                    [{name: "AVON", info: "набори декоративної косметики для очей",price: "1025 grn"},
                    {name: "ORIFLAME",info: "Консілери, пудра, тональні крема", price: "987 grn"},
                    {name: "FABERLIC",info: "помади та блиски для губ", price: "540 grn"}]]

function informShamp (event) {
    const prodArr = Array.from(listProducts.children);

    switch (event.target.textContent){
        case prodArr[0].textContent:
            informProd.innerHTML = `<h3>${listInform[0][0].name}</h3><h3>${listInform[0][0].info}</h3><h4>Price - ${listInform[0][0].price}</h4><button class="buyButton">BUY</button>`;
            break;
        case prodArr[1].textContent:
            informProd.innerHTML = `<h3>${listInform[0][1].name}</h3><h3>${listInform[0][1].info}</h3><h4>Price - ${listInform[0][1].price}</h4><button class="buyButton">BUY</button>`;
            break;
        case prodArr[2].textContent:
            informProd.innerHTML = `<h3>${listInform[0][2].name}</h3><h3>${listInform[0][2].info}</h3><h4>Price - ${listInform[0][2].price}</h4><button class="buyButton">BUY</button>`;
            break;
        case prodArr[3].textContent:
            informProd.innerHTML = `<h3>${listInform[0][3].name}</h3><h3>${listInform[0][3].info}</h3><h4>Price - ${listInform[0][3].price}</h4><button class="buyButton">BUY</button>`;
            break;
    }
    buttonOn();
}

function informCream (event) {
    const prodArr = Array.from(listProducts.children);

    switch (event.target.textContent){
        case prodArr[0].textContent:
            informProd.innerHTML = `<h3>${listInform[1][0].name}</h3><h3>${listInform[1][0].info}</h3><h4>Price - ${listInform[1][0].price}</h4><button class="buyButton">BUY</button>`;
            break;
        case prodArr[1].textContent:
            informProd.innerHTML = `<h3>${listInform[1][1].name}</h3><h3>${listInform[1][1].info}</h3><h4>Price - ${listInform[1][1].price}</h4><button class="buyButton">BUY</button>`;
            break;
        case prodArr[2].textContent:
            informProd.innerHTML = `<h3>${listInform[1][2].name}</h3><h3>${listInform[1][2].info}</h3><h4>Price - ${listInform[1][2].price}</h4><button class="buyButton">BUY</button>`;
            break;
    }
    buttonOn();
}

function informLotion (event) {
    const prodArr = Array.from(listProducts.children);

    switch (event.target.textContent){
        case prodArr[0].textContent:
            informProd.innerHTML = `<h3>${listInform[2][0].name}</h3><h3>${listInform[2][0].info}</h3><h4>Price - ${listInform[2][0].price}</h4><button class="buyButton">BUY</button>`;
            break;
        case prodArr[1].textContent:
            informProd.innerHTML = `<h3>${listInform[2][1].name}</h3><h3>${listInform[2][1].info}</h3><h4>Price - ${listInform[2][1].price}</h4><button class="buyButton">BUY</button>`;
            break;
        case prodArr[2].textContent:
            informProd.innerHTML = `<h3>${listInform[2][2].name}</h3><h3>${listInform[2][2].info}</h3><h4>Price - ${listInform[2][2].price}</h4><button class="buyButton">BUY</button>`;
            break;
        case prodArr[3].textContent:
            informProd.innerHTML = `<h3>${listInform[2][3].name}</h3><h3>${listInform[2][3].info}</h3><h4>Price - ${listInform[2][3].price}</h4><button class="buyButton">BUY</button>`;
            break;
    }
    buttonOn();
}

function informDecor (event) {
    const prodArr = Array.from(listProducts.children);

    switch (event.target.textContent){
        case prodArr[0].textContent:
            informProd.innerHTML = `<h3>${listInform[3][0].name}</h3><h3>${listInform[3][0].info}</h3><h4>Price - ${listInform[3][0].price}</h4><button class="buyButton">BUY</button>`;
            break;
        case prodArr[1].textContent:
            informProd.innerHTML = `<h3>${listInform[3][1].name}</h3><h3>${listInform[3][1].info}</h3><h4>Price - ${listInform[3][1].price}</h4><button class="buyButton">BUY</button>`;
            break;
        case prodArr[2].textContent:
            informProd.innerHTML = `<h3>${listInform[3][2].name}</h3><h3>${listInform[3][2].info}</h3><h4>Price - ${listInform[3][2].price}</h4><button class="buyButton">BUY</button>`;
            break;
    }
    buttonOn();
}

function buttonOn() {
    const button = document.querySelector('.buyButton')
    button.addEventListener('click', function() {
    const name = document.querySelector('h3');
    const price = document.querySelector('h4');
    const info = `${name.textContent} ${price.textContent}`;
    console.log(info);
    const date = new Date ();
    localStorage.setItem(info, date)
    alert(`Ви обрали ${name.textContent}`);
    location.reload();})}

const order = document.querySelector('button');

order.addEventListener('click', myOrder);

function myOrder (){
    const main = document.querySelector('main');
    main.style.display = 'none';
    const orderList = document.createElement('table');
    const body = document.querySelector('body');
    body.appendChild(orderList);

    for(let i = 0; i<localStorage.length; i++) {
        const key = localStorage.key(i);
        const tr = document.createElement('tr');
        orderList.appendChild(tr);
        const td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = (`${key}: ${localStorage.getItem(key)}`);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "DELETE";
        tr.appendChild(deleteButton);
        
        deleteButton.addEventListener('click', (e) => {
            localStorage.removeItem(key);
            tr.textContent = '';
        })

    }   
    
}









   
   

















