//conditions

//1

const isLoggin = true;
const debitCard = true

if (isLoggin && debitCard) {
    console.log("User Allow Login")

    if (isLoggin || debitCard) {
        console.log("User have allow long in usng one");

    }
}
else {
    console.log("User not logged in")
}


//Switch Case

const month = 5

switch (month) {
    case 1:
        console.log('Janauary')
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March')
        break;
    case 4:
        console.log('April')
        break;
    case 5:
        console.log('May')
        break;
    case 6:
        console.log('June')
        break;
    case 7:
        console.log('July')
        break;
    default:
        break;
}