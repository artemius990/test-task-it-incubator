function inputValue() {
    let field = document.querySelector('.text');
    
    if (field.value==="google"){
        alert("Yandex круче. Но это не точно")}
        else{
            alert(field.value);
        }
   
}

document.querySelector('.butt').addEventListener('click', inputValue);


//////

let b=[
    {name:'James', age:23},
    {name:'Bob', age:27},
    {name:'John', age:27},
    {name:'Ron', age:30}
]

document.querySelector('.butt').addEventListener('click', alert(b[0].name));


// 1.	Заверстать микроверсию google: поле ввода и кнопка найти! 

// 2.	Стилизация: кнопка должна быть зеленая, вокруг инпута должна быть красная граница, размер кнопки и инпута - больше стандартного. Добавить паддинги в инпут.

// 3.	 JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.:

// 4.	Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”

// 5.	Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве