
function _createFruits(productList = []){

    const fruits = document.createElement('div');
    fruits.classList.add('row');

    productList.forEach(item => {
        fruits.insertAdjacentHTML('beforeend', `
        <div class="col" data-id="${item.id}">
        <div class="card" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body" >
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">Чтобы узнать цену нажмите кнопку</p>
            <a href="#" class="btn btn-primary" data-primary="true">Цена</a>
            <a href="#" class="btn btn-danger" data-danger="true">Удалить</a>
            </div>
            </div>
        </div>    
        `
    )});
    
    document.querySelector('.container').appendChild(fruits);
    return fruits;
}

$.fruits = function(options) { 
    const $fruits = _createFruits(options);
    $fruits.addEventListener('click', function(event) {
        if (event.target.dataset.danger) {
            $fruits.remove();
        }
        if (event.target.dataset.primary) {
            modal.open();
        }
    })
    return $fruits;
};

const fruits = $.fruits([
    {id: 1, title: 'Яблоки', price: 20, img:'https://frutstar.ru/image/catalog/fruits/yabloki.jpg'},
    {id: 2, title: 'Апельсины', price: 30, img:'https://img2.goodfon.ru/original/1600x1200/3/4b/apelsiny-apelsin-frukty.jpg'},
    {id: 3, title: 'Груши', price: 40, img:'https://cdn1.ozone.ru/s3/multimedia-9/6007131213.jpg'}
]);