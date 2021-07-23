// beginOrder = () => {
//     let mainInfo = document.getElementById("main-info");
//     mainInfo.style.display = "none";
//     let orderForm = document.getElementsById("order-screen");
//     orderForm.style.display = "block";
// }

// document.getElementById("")

let btn = document.querySelector('begin-order');
let mainInfo = document.querySelector('main-content');
let orderForm = document.querySelector('order-screen');

btn.addEventListener('click', () => {
    if(orderForm.style.display === 'none') {
        orderForm.style.display === 'block';
    } if (mainInfo.style.display === 'block') {
        mainInfo.style.display === 'none';
    }else {
        div.style.display = 'none';
    }
})