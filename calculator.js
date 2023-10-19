var inputField1 = document.getElementById("a");
var inputField2 = document.getElementById("b");
var add1 = document.getElementById("add");
var sub1 = document.getElementById("subtract");
var div1 = document.getElementById("divide");
var multi1 = document.getElementById("multiply");
var rem1 = document.getElementById("rem");
var result1 = document.getElementById("results");

var chosenOperator = "";






var chosenOperator = ""

function equals() {
    switch (chosenOperator) {
  case "+":
    console.log("Addition");
    break;
  case "-":
    console.log("Subtraction");
    break;
  case "*":
    console.log("Multiplication");
    break;
  case "/":
    console.log("Division");
    break;
    case "%":
    console.log("Reminder");
    break;

}};




function addFunction(){
    const results = parseInt(inputField1.value)+parseInt(inputField2);
    console.log(results);
    result1.innerText = results;
}

add1.addEventListener("click",addFunction());

let clicked = false;

buttons.forEach(button => {
  button.addEventListener('click', function() {
    if (clicked) {
      input2.value = this.textContent;
    } else {
      input1.value = this.textContent;
    }
    
    clicked = !clicked;
  });
});


add1.addEventListener("click", () => {
 const results = parseInt(inputField1.value)+parseInt(inputField2.value);
 console.log(results);
 result1.innerText = results;
});


sub1.addEventListener("click", () => {
    const results = parseInt(inputField1.value)-parseInt(inputField2.value);
    console.log(results);
    result1.innerText = results;
   });

   div1.addEventListener("click", () => {
    const results = parseInt(inputField1.value)/parseInt(inputField2.value);
    console.log(results);
    result1.innerText = results;
   });

   multi1.addEventListener("click", () => {
    const results = parseInt(inputField1.value)*parseInt(inputField2.value);
    console.log(results);
    result1.innerText = results;
   });

   rem1.addEventListener("click", () => {
    const results = parseInt(inputField1.value)%parseInt(inputField2.value);
    result1.innerText = results;
    console.log(results);
   });





function subtract (a,b) {
    return a-b;
}
function multiply (a,b) {
    return a*b;
}
function divide (a,b) {
    if (b==0 || a==0){
        return ("cannot divide by zero")
    }
        return a/b;

}

function remainder (a,b) {
    return a%b;
}
