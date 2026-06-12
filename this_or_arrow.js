// arrow function 

const one = (a, b) => {
    return a + b
}

console.log(one(5,6));

//No need to write return keyword 
// use mostly in react
const two = (b, c) => (10 + 15)

console.log(two());


//object use in shortend of arrow function

const three = (e, f) => ({username:"Hardik"})

console.log(three());
