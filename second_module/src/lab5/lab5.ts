/* 1 Дополните код таким образом, чтобы время в
консоли отображалось каждые 5 секунд до 1 минуты
после полной загрузки страницы (необходимо
применить метод, который вызывается после полной
загрузки страницы) */
function getCurrentDate(): void {
    console.log(Date.now());
}

document.addEventListener('DOMContentLoaded', () => { 
    console.log("Страница загрузилась");

    const timer = setInterval(getCurrentDate, 5000);//Вызываем функцию регулярно через каждые 5 сек

    //Вызываем один раз через 60 сек
    setTimeout(() => {
        clearInterval(timer);//Отменяет setInterval
        console.log('Конец');
    }, 60000);


});


//2--—
function hello(): void {
    var name = "Nate";
    function helloName(): void {
        console.log("Hello " + name);

    }
    helloName();
}
hello();