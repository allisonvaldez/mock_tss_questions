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
console.log("1. logicalColors()");

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

console.log("2. max()");

function max(arr) {
    let highestNum = 0;

    for (let i of arr) {
        if (i > highestNum) {
            highestNum = i;
        }
    }
    return highestNum;
}

console.log(max([50, 90, 3, -2]));

/*
3. Complete the 'removeNumbers' function below:
        The function is expected to return a STRING.
        The function accepts STRING str as parameter.
*/

console.log("3. removeNumbers()");

//when should i declare variables/empty string global or local to function

let newString = [];

function removeNumbers(str) {
    for (let chars in str) {
        // we never discussed this in the videos tried to google but no result
        let castToNum = +chars

        if (chars === " " || isNaN(castToNum)) {
            newString.push(chars)
        }
    }
    return newString.join("");
}

console.log(removeNumbers("i 4uo4"));


/*

4. Complete the 'onlyEvens' function below:
    The function is expected to return an INTEGER_ARRAY.
    The function accepts INTEGER_ARRAY arr as parameter.
*/

console.log("4: onlyEvens()");
function onlyEvens(arr) {

    let newArray = [];

    for (let i of arr) {
        if (i % 2 === 0) {
            newArray.push(i)
        }
    }
    return newArray;

}

console.log(onlyEvens([1, 2, 3, 4, 5]));

/*
5.  Complete the 'containsEveryVowel' function below.
        The function is expected to return a BOOLEAN.
        The function accepts STRING str as parameter.
*/

console.log("5. containsEveryVowel()");

function containsEveryVowel(str) {

    //when should i declare variables/empty string global or local to function
    let vowels = "aeiou";

    for (let vowel of vowels) {
        if (str.includes(vowel) === false) {
            return false;
        }
        else {
            return true;
        }
    }
    //why is the return true happen here
    //return true;
}

console.log(containsEveryVowel("giant sequoia"));
console.log(containsEveryVowel("hello world"));


/*
6. Complete the 'vowelFrequency' function below.
        The function is expected to return a STRING.
        The function accepts STRING str as parameter.
*/

console.log("6. vowelFrequency()");

function vowelFrequency(str) {
    let vowels = "aeiou";
    let final = {};

    for (let character of str) {
        if (vowels.includes(character)) {
            if (final[character] === undefined) {
                final[character] = 1 
            }
            else {
                final[character]++
            }
        }
    }

    let finalString = "";

    //please explain of and in as the videos did not cover it
    for (let key in final) {
        finalString += key + final[key];
    }
    
    return finalString
}


console.log(vowelFrequency("hello world"));
console.log(vowelFrequency("we are the champions"));
console.log(vowelFrequency("wplz & thx"));