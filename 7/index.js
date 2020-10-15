// 7.	Создать массив из чисел в перемешку (не отсортированы). 
// С помощью цикла for найти максимальный и минимальный элементы в массиве

let a=[5,-7,8,867,22,1111,-78,0]

let min=a[0];

for(let i=0; i<a.length; i++){
	if (a[i]<min){
		min=a[i]		
	}	
}

console.log("min ", min)


let max=a[0];

for(let i=0; i<a.length; i++){
	if (a[i]>max){
		max=a[i]		
	}	
}

console.log("max ", max)






