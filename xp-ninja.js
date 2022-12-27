/* 
|Exercise 1: Evaluation
|-----------------------------
|For each expression, predict what you think the output will be in a comment (//) without first running the command.
|Of course, explain each prediction.
|Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
|
*/

5 >= 1 
// Prediction: It will output true
// Actual: true

0 === 1
// Prediction: It will output false
// Actual: false

4 <= 1
// Prediction: It will output false
// Actual: false

1 != 1
// Prediction: It will output false
// Actual: false

"A" > "B"
// Prediction: It will output false
// Actual: false

"B" < "C"
// Prediction: It will output false
// Actual: false

"a" > "A"
// Prediction: It will output false
// Actual: false

"b" < "A"
// Prediction: It will output false
// Actual: false

true === false
// Prediction: It will output false
// Actual: false

true != true
// Prediction: It will output false
// Actual: false

/* 
|Exercise 2: Ask For Numbers
|-----------------------------
|Ask the user for a string of numbers separated by commas
|Console.log the sum of the numbers.
*/
let answer = window.prompt("Enter two number separated by commas");
let arr = answer.split(",");

let sum = parseInt(arr[0]) + parseInt(arr[1]);
console.log(`${arr[0]} + ${arr[1]} = ${sum}`);

/* 
|Exercise 3: Find Nemo
|-----------------------------
|Ask the user for a string of numbers separated by commas
|Console.log the sum of the numbers.
*/
let sentence = window.prompt("Hello, give me a sentence");
const keyword = "Nemo";
if(sentence.search(keyword)){
    console.log(`I found Nemo at ${sentence.search(keyword)}`);
}else{
    console.log("I can’t find Nemo");
}

/* 
|Exercise 4: Boom
|-----------------------------
| for tomorrow
*/