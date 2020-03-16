// ASSESSMENT 2: Coding Practical Questions


///
const LINE = "--------------------------"
function log() { console.log(`${LINE}\n`);  Array.from(arguments).forEach(out => console.log(out));  console.log(`\n${LINE}\n`); }
///



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15     // Expected output: "15 is divisible by three"
var num2 = 0      // Expected output: "0 is divisible by three"
var num3 = -7     // Expected output: "-7 is not divisble by three"

const speakDivisibleByThree = numIn =>
{ return ( numIn%3 === 0 ? `${numIn} is divisble by three` : `${numIn} is not divisble by three` ) }


log(
    speakDivisibleByThree(num1),
    speakDivisibleByThree(num2),
    speakDivisibleByThree(num3)
)



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capitalizeWords = wordsArrayIn =>
{ return wordsArrayIn.map(w => w = w.charAt(0).toUpperCase() + w.substr(1)) }


log(capitalizeWords(randomNouns))



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const grabAndSortNumbers = arrMiscIn =>
{ return arrMiscIn.filter(el => typeof el === "number" ).sort((a, b) => a - b) }


log(grabAndSortNumbers(mixedDataArray))



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"     // Expected output: 1
var vowelTester2 = "throw"     // Expected output: 3

const logFirstIndexOfVowel = wordIn => {

    let vowels = ["a","e","i","o","u"]

    for(let i=0; i<wordIn.length; i++){
        for (let vi=0; vi<vowels.length; vi++){
            if(wordIn.charAt(i) === vowels[vi]) { return i }
        }
    }
    return -1
}


log(
    logFirstIndexOfVowel(vowelTester1),
    logFirstIndexOfVowel(vowelTester2)
)



// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, mathOp, num2) => {
    switch(mathOp){
        case "+":
            return num1 + num2
            break;
        case "-":
            return num1 - num2
            break;
        case "*":
            return num1 * num2
            break;
        case "/":
            return  num2 === 0 ? "Can't divide by 0!" : num1 / num2
            break;
        default:
            return "mathematical operator not supported"
    }
}


// Uncomment and use the following console logs to test your function
log(
    calculator(3, "*", 9),     // Expected output: 27
    calculator(16, "+", 3),    // Expected output: 19
    calculator(89, "/", 0),    // Expected output: "Can't divide by 0!"
    //calculator(15, "-", 4),
    //calculator(15, "/", 3)
)










console.log("\n")
//EOF
