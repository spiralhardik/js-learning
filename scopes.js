// block scope -> inside { }
// global scope -> outslide




let a = 50

// console.log(scopeCount());

if (true) {
    let a = 5
    const b = 6
    var c = 5
    console.log("inside ", a);

}

// console.log(a);
// console.log(b);
// console.log(a);


function one() {
    const userName = "Hardik"

    function two() {
        const website = "spiralcms.com"
        console.log(userName);
    }
    console.log(website);

    two()
}

one()
