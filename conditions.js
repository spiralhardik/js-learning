//if

let score = 250

if (score >= 300) {
    console.log(`score is good ${score}`);
}

else {
    console.log(`score is not good ${score}`);

}

// &&  And-> Check Both Condition And allow
// ||  Or -> Check Both Condition and if One is right its execute


if (score > 300) {

    console.log(`score is good ${score}`);
}
else if (score >= 200) {
    console.log(`score is good and equal  ${score}`);
}

else {
    console.log(`score is not good ${score}`);
}




if (score > 200) {
    console.log("A");

    if (score > 300) {
        console.log("B");
    } else {
        console.log("C");
    }
}

//// Switch case


// let month = "February"

// switch (month) {
//     case "January":
//         console.log("Janauary");
//         break;
//     case "February":
//         console.log("February");
//         break;
//     case "March":
//         console.log("March");
//         break;
//     case "April":
//         console.log("April");
//     case "May":
//         console.log("May");
//     default:
//         break;
// }

//

const userLoggedIn = false
const userDebitCard = true


//1  Can more than one message/action happen (if if else)
if (userLoggedIn && userDebitCard) {
    console.log('Login Allow')
}

else if (userLoggedIn || userDebitCard) {
    console.log("User able to login");
}

else {
    console.log('Logout')
}

//2 Should only one result happen?" (if elseif else)
    
if (userLoggedIn && userDebitCard) {
    console.log('Login Allow')
}

if (userLoggedIn || userDebitCard) {
    console.log("User able to login");
}

else {
    console.log('Logout')
}