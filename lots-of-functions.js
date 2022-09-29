

function sayHi(name){
let newStr = `Hi, ${name}`;
return newStr;
}
console.log(sayHi("Brianna"));
//return `Hi ${name}`; works too




function bigString (string1,string2){

    if(string1.length > string2.length){
        return string1;
    }else if(string2.length > string1.length){
        return string2;
    } else if(string1.length === string2.length){
        console.log(`${string1} is equal to ${string2} in length`);
    }
}

console.log(bigString("grey", "red"));
console.log(bigString("burger", "wednesday"));
console.log(bigString('hat','pot'));


/* functionName : bigNumber
    parameters: (num1, num2)

    if num1 > num2....
    */

function bigNumber (num1, num2){
if(num1 < num2){
    return num1;
} else if(num2 < num1){
    return num2;
} else if(num1 === num2){
    console.log(`${num1} is equal to ${num2}`);
} else {
    console.log("error");
}

}
console.log(bigNumber(2, 4));
console.log(bigNumber(12, 8));
console.log(bigNumber(3, 3));



/* function name : fiveMore
    parameters: array of numbers - numsArray

    add 5 to each odd number
    then use a loop
    numsArray.length

    return modifiedArray
    */

    function fiveMore(numsArray){
        for( let i = 0; i < numsArray.length; i++){
            if(numsArray[i] % 2 === 1)
            numsArray[i] += 5;
        }
        return numsArray;
    }
        console.log(fiveMore([2,3,4,5]));
        console.log(fiveMore([1,3,5,7]));
        console.log(fiveMore([2,110,222]));







function arraySummer(arrayNum){
    let sum = 0;

    for(let i = 0; i < arrayNum.length; i++ ){
        
     arrayNum[i] += sum;
    }
    return sum;
}
console.log(arraySummer[2,3,4,5]);





function everyDivisible(n){

    if(n < 10){
        for(let i = 0; i <= 100; i++){
            if(i % n === 0){
                console.log(i);
        }
    }
}
}
everyDivisible(8);
everyDivisible(9);