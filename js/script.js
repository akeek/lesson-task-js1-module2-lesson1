//Q1
function receivingFunction(one) {
    // console.log("The argument is a " + typeof one)
    if(typeof one === "function"){
        one();
    }
    else{
        console.log("Apeshit")
    }
}

const callbackFunction = function(){
    console.log("I am a callback function.")
}


receivingFunction(callbackFunction);



//Q2
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

// for (let i = 0; i < prizes.length; i++) {
//     console.log(`Prize ${i + 1}: ${prizes[i]}`);
// }

//Convert to a forEach
prizes.forEach(function(item){
    console.log(item)
})


//Q3
let waitTime = 500

function someFunction() {
    console.log("I waited ,5 seconds")
}

setTimeout(someFunction, waitTime);


//Q4

let count = 0;

function counter(){
    count++;

    if(count === 4) {
        clearInterval(count1)
    }
    console.log(count)
}

const count1 = setInterval(counter, 1500);