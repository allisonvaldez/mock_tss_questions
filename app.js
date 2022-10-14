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
console.log("q1");

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
 2. Complete the 'max' function below:
        The function is expected to return an INTEGER.
        The function accepts INTEGER_ARRAY arr as parameter.
 */

console.log("q2");

function max(arr) {
    while (i < arr.length) {
        arr[i] < arr[i + 1];
        return arr[i + 1];
    }
}

console.log(max([4, 3, 2]));

/*

3. 

*/


/*

4. Complete the 'onlyEvens' function below:
    The function is expected to return an INTEGER_ARRAY.
    The function accepts INTEGER_ARRAY arr as parameter.
*/

console.log("q4");
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