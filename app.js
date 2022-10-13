/*

4. Complete the 'onlyEvens' function below:
    The function is expected to return an INTEGER_ARRAY.
    The function accepts INTEGER_ARRAY arr as parameter.
*/

function onlyEvens(arr) {

    let newArray = [];

    for (let index of arr) {
        if (index % 2 === 0) {
            newArray.push(index)
        }
    }
    return newArray;


}

console.log(onlyEvens([1,2,3,4,5]));