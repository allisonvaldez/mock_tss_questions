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
//work inside of the body not outsie its already defined its given so write it inside of the function
function logicalColors(x, y) {
    // flow diagrams will dictate the order not the answer
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
Another way to solve:

function logicalColors(x, y) {
    if (x && !y) {
        return "Blue";
    }
    else if (x) {
        return "Red";
    }
    else if (!y) {
        return "Yellow";
    }
    else {
        return "Purple";
    }
}
*/


/*
 2. Complete the 'max' function below:
        The function is expected to return an INTEGER.
        The function accepts INTEGER_ARRAY arr as parameter.
 */

// what if num = maxNum does it matter if we return it? num 

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
Another way to solve:

function max(arr) {
    let maxNum = arr[0];

    for (let index of arr) {
        if ( index > maxNum) {
            maxNum = index;
        }
    }
    return maxNum;
}
 */


/*
3. Complete the 'removeNumbers' function below:
        The function is expected to return a STRING.
        The function accepts STRING str as parameter.
*/

console.log("3. removeNumbers()");

/*
when should i declare variables / empty string global or local to function was on outside in the solution but in the video it was on the inside of the function
*/

//accessed outside of block of code make it global
let newString = [];

function removeNumbers(str) {
    for (let chars of str) {
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
Another way to solve: when have string and need to do anything with characters need a loop.

Options:
1. Use regular expression
2. Turn into array do operation on array turn back to string
3. Make new empty string add new characters at a time

function removeNumbers(str) {
    let newStr = "";

    for (let chars of str) {
        // for each character in the string check if its not a string number
        if(!['0','1','2','3','4','5','6','7','8','9'].includes(char)) {
            newStr += chars;
        }
    }
    return newStr;  
}
*/


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
Another way to solve:

function onlyEvens(arr) {
    let evens = [];

    for (let num of arr) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    }
    return evens;
}
*/


/*
5.  Complete the 'containsEveryVowel' function below.
        The function is expected to return a BOOLEAN.
        The function accepts STRING str as parameter.
*/

console.log("5. containsEveryVowel()");

// take a pen and paper to walk through logic before coding what variables needed etcs and what loops look like before coding
// make sure have the requriements correct before coding during whiteboard
//look at google interviews on YT

function containsEveryVowel(str) {


    //when should i declare variables/empty string global or local to function
    let vowels = "aeiou";

    //set up a boolean variable to be false for vowel existence
    let stringHasAllVowels = true;

    for (let vowel of vowels) {
        //evals as boolean no need explicit
        if (!str.includes(vowel)) {
            stringHasAllVowels = false;
        }
    }
    //why is the return true happen here
    //return true;

    return stringHasAllVowels
}

console.log(containsEveryVowel("aeiou"));
console.log(containsEveryVowel("hello world"));

/*
Another way to solve:

function containsEveryVowel(str) {
    if (!str.includes("a")) {
        return false;
    }
    else if (!str.includes("e")) {
        return false;
    }
    else if (!str.includes("i")) {
        return false;
    }
    else if (!str.includes("o")) {
        return false;
    }
    else if (!str.includes("u")) {
        return false;
    }
    else {
        return console.log(use string);
    }  
}


function containsEveryVowel(str) {
    let vowels = "aeiou";

    // we want to loop over the vowels and check against the string
    for (let vowel of vowels) {
        // if it doesnt include it return false
        if (!str.includes(vowel)) {
            return false;
        }
    }
    // dont forget if it has it return true needed per instructions
    return true;
}
*/


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
    //obj are not iterative use in for obj ONLY
    for (let key in final) {
        finalString += key + final[key];
    }
    
    return finalString
}


console.log(vowelFrequency("hello world"));
console.log(vowelFrequency("we are the champions"));
console.log(vowelFrequency("wplz & thx"));

/*
Another way to solve:

function vowelFrequency(str) {
    let result = {};
    let vowels = "aeiou";

    for (let char of str) {
        if (vowels.includes(char)) {
            if (result[char]) {
                result[char]++;
            }
            else {
                result[char] = 1;
            }
        }
    }
    //make into an obj for key values pairs of vowel and count
    let returnStr = "";

    for (let key in result) {
        returnStr += key + result[key]
    }

    return returnStr;
}
*/