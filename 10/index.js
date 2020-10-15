// 10.	показать alert с результатом поиска не сразу, а через 3 секунды после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)

function inputValue() {
    let field = document.querySelector('.text');
    
    if (field.value==="google"){
		setTimeout(() => { 
        alert("Yandex круче. Но это не точно")},3000)
	}
	
        else{
			setTimeout(() => { 
			alert(field.value) }, 3000 )           
        }   
}

document.querySelector('.butt').addEventListener('click',inputValue);


//////

// let b=[
    // {name:'James', age:23},
    // {name:'Bob', age:27},
    // {name:'John', age:27},
    // {name:'Ron', age:30}
// ]

// document.querySelector('.butt').addEventListener('click', alert(b[0].name));






