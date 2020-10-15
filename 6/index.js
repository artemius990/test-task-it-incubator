// 6.	Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры 

function superSum(){
    let a = document.querySelector('.text1');
    let b = document.querySelector('.text2');
    let c= parseInt(a.value)+parseInt(b.value)
    alert(c)
}

document.querySelector('.butt').addEventListener('click', superSum);



function superSum2(a,b){
    
    let c= a+b
    return alert(c)
}

superSum2(3,20)
