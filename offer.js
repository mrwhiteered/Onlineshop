

// вешаю обработчик клика на оформить 
let makeOffer = document.getElementById("offer");
makeOffer.addEventListener('click',() =>{
let totalPrice = document.getElementById("total");
//  проеверяю есть ли там что то 
if (totalPrice.innerHTML=="0$"){
    console.log('пусто');
} else { 

    const cartQuantityElements = document.querySelectorAll(".cart__item-quantity");
let totalQuantity = 0;
//  если есть, то перебераю каждый товар, точнее кол-во каждого выбранного товара 
cartQuantityElements.forEach(element => {
// преобразовываю строку в число целое 
    const quantity = parseInt(element.innerHTML); 
//  если число то поехали
  if (!isNaN(quantity)) {
    totalQuantity += quantity;
// просто считаю сколько его 
  }
});
// вывожу в консоль финальную цену и сколько всего товара 
console.log(totalPrice.innerHTML);
console.log(totalQuantity);
    // НАДО РЕАЛИЗОВАТЬ ДОБАВЛЕНИЕ ЭТИХ ДВУХ ПОЛЕЙ В БД
    // **------------ХОРОШО БЫ РЕАЛТЗОВАТЬ ДОБАВЛЕНИЕ КАЖДОГО ТОВАРА В БД, КАКОЙ ВЫБРАН ТЕ И ДОБАВЛЯЕМ ЕСТЬ DATA-ID ЭТИХ ТОВАРОВ
}

});

