/*
 1. Complete the 'logicalColors' function below:
        The function is expected to return a STRING.
        The function accepts following parameters:
            1. BOOLEAN x
            2. BOOLEAN y
 */

let x, y;

function logicalColors(x, y) {
    console.log("colors");

    if (x === true) {
        console.log("red");
    }
    else if (y === false) {
        console.log("yellow")
    }

}

console.log(logicalColors());






/*

4. Complete the 'onlyEvens' function below:
    The function is expected to return an INTEGER_ARRAY.
    The function accepts INTEGER_ARRAY arr as parameter.
*/

function onlyEvens(arr) {

    let newArray = [];

    for (let i of arr) {
        if (i % 2 === 0) {
            newArray.push(i)
        }
    }
    return newArray;

}

console.log(onlyEvens([1,2,3,4,5]));