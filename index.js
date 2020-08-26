const priceModal = $.modal({
    title: 'Цена на товар: ',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'ok', type: 'primary', handler() {
            priceModal.close();
        }},
        {text: 'cancel', type: 'danger', handler() {
            priceModal.close();
        }},
        
    ]
});
//fruits
let fruits = ([
    {id: 1, title: 'Яблоки', price: 20, img:'https://frutstar.ru/image/catalog/fruits/yabloki.jpg'},
    {id: 2, title: 'Апельсины', price: 30, img:'https://img2.goodfon.ru/original/1600x1200/3/4b/apelsiny-apelsin-frukty.jpg'},
    {id: 3, title: 'Груши', price: 40, img:'https://cdn1.ozone.ru/s3/multimedia-9/6007131213.jpg'}
]);


const toHTML = fruit => `
    <div class="col" data-id="${fruit.id}">
        <div class="card" style="width: 18rem;">
            <img src="${fruit.img}" class="card-img-top" alt="${fruit.title}">
            <div class="card-body" >
            <h5 class="card-title">${fruit.title}</h5>
            <p class="card-text">Чтобы узнать цену нажмите кнопку</p>
            <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Цена</a>
            <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
            </div>
            </div>
        </div>    
    `
;    
function render() {
    const html = fruits.map(fruit => toHTML(fruit)).join('');
    document.querySelector('#fruits').innerHTML = html;
}
render();

document.addEventListener('click', event => {
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;
    const fruit = fruits.find(f => f.id === id);


    if (btnType == 'price') {
        priceModal.setContent(`
        <p>Цена на ${fruit.title} <strong>${fruit.price} руб/кг</strong></p>
        `)
        priceModal.open();
    }

    else if (btnType == 'remove') {
        $.confirm({
            title: 'Вы уверены?',
            content: `<strong style="color:red"> Вы собираетесь удалить карточку товара </strong>`,
        }).then(() => {
            fruits = fruits.filter( f => f.id != id);
            render();
        }).catch(() => {
            console.log('cancel');
        })
    }
});




