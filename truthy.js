console.log("truthy");

// truthy value -> "0" , 'false' , " " , { } , function(){}

// falsy value -> false , 0 , -0 , BigInt 0n, null, undefined , NaN 


const username = false;
const isAdmin = false

if (!username || isAdmin){
  console.log("Username is required");
}

