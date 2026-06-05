//Primitive Data Types

// 7 Types = String. Number, Boolean, Null, undefined, Symbol, BigInt



//Non Primitive Data Types (Also Call Refrence Data types)

//3Types = Array, Objects, Functions


let myName = "Hardik"

let NewName = myName
NewName = "NewHardik"

console.log(NewName);


////

let UserOne = {
    Name:"Hardik",
   Email: "user@gmail.com"
}

let UserTwo = UserOne

UserTwo.Email= "harry@gmail.com"

console.log(UserOne.Email);
console.log(UserTwo.Email);
