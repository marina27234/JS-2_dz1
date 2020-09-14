const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (product) => {
    return `<div class="product-item">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(product => renderProduct(product));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join(" ");
};
renderPage(products);
// Запятые появляются из-за того, что мы записываем в class="products" массив. Надо преобразовать массив в строку.
// const renderPage = list => {
//     const productsList = list.map(item => {
//         document.querySelector('.products').innerHTML += renderProduct(item);
//     });
//     console.log(productsList);
// }