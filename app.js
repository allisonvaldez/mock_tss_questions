/*
 1. Complete the 'logicalColors' function below:
        The function is expected to return a STRING.
        The function accepts following parameters:
            1. BOOLEAN x
            2. BOOLEAN y
 */

/* 
why do not need to declare let x === true or y === false first outside or inside the function?
*/

function logicalColors(x, y) {
    if (x === true && y === false) {
        return "Blue";
    }
    else if (x === true) {
        return "Red";
    }
    else if (y === false) {
        return "Yellow";
    }
    else {
        return "Purple";
    }

}

console.log(logicalColors(false));






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