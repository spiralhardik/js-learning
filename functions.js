// function book(num1,  num2){
//     console.log(num1 + num2);
// }
// book(5 , 6)


// 2
function count(a, b) {
    return a + b
}
const total = count(5, 3)

console.log("Total Is", total);

// ... rest opretor in function - also call spread opretor


function calculatePrice(...num1) {
    return num1
}

console.log(calculatePrice(100, 200, 300, 400))

// Functions With Objects

let user = {
    name: "Hardik",
    age: 18
}

function handleObject(anyobject) {
    console.log(`User Name is ${anyobject.name} and age is ${anyobject.age}`);
}

handleObject(user)


//Array

let handleArray = [100, 200, 300, 400]

function countArray(getArray){
    return getArray[0]
}

console.log(countArray(handleArray))