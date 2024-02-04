
// DEFINING GLOBAL VARIABLES

var inputField1 = document.getElementById("field1");
var inputField2 = document.getElementById("field2");
var add1 = document.getElementById("add");
var sub1 = document.getElementById("subtract");
var div1 = document.getElementById("divide");
var multi1 = document.getElementById("multiply");
var rem1 = document.getElementById("rem");
var result1 = document.getElementById("results");
var chosenOperator = "";
var activeInputfield = inputField1;
var numbers = document.getElementsByClassName("num"); //Number buttons
const operatorButtons = document.getElementsByClassName("operators"); //Operator buttons
var num1;
var num2;
var equalsButton = document.getElementById("equals");
var clearAllinputFields = document.getElementById("clearAll")
var clearSingleinput = document.getElementById("clearOne")

//---------------------------------------------

// NUMERIC BUTTONS
//Go through all the numeric buttons and add eventListener
for(let i= 0; i< numbers.length;i++) {
    numbers[i].addEventListener("click",numberFunction);
}
//-----------------------------------------------

// FUNCTIONALITY OF NUMERIC BUTTONS
//Add buttons number to the current/active input field AND switch between active fields
function numberFunction() {
  var content = this.textContent;
  var numericContent = parseInt(content);
      activeInputfield.textContent += numericContent;
      console.log(chosenOperator);
};

// OPERATOR BUTTONS
//Go through all the operator buttons and add eventListener -- when clicked on an operator the operatorfunction is triggred which handles the operators and sets the  active inputfield to inputfeild2
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", function() {
      operatorFunction(this.textContent);
      activeInputfield=inputField2
var highlighted = document.querySelector(".highlighted");
      highlighted.classList.remove("highlighted");

      activeInputfield.classList.add("highlighted")

    });
  }


equalsButton.addEventListener("click", function() { 
    num1 = parseInt(inputField1.textContent);
    num2 = parseInt(inputField2.textContent);
      
    switch (chosenOperator){
      case "+":{
        result1.textContent = num1+num2
      }
    break;
      case "-": {
        result1.textContent = num1-num2;
      }
    break;
      case "*": {
        result1.textContent = num1*num2;
      }
    break;
      case "/":{
        result1.textContent = num1/num2;
      }
    break;
    case "%": {
      result1.textContent = num1%num2;
    }
    };
});

function myfunction(){


  var highlighted = document.querySelector(".highlighted");
  highlighted.classList.remove("highlighted");
  this.classList.add("highlighted");
  activeInputfield = this;

}



inputField1.addEventListener("click", myfunction)
inputField2.addEventListener("click", myfunction)




//-----------------------------------------------
// fucntion to clear all fields


  function AC (e){
    inputField1.textContent = "";
    inputField2.textContent = "";
    result1.textContent = "";
    activeInputfield = inputField1;
  }
clearAllinputFields.addEventListener("click",AC);



//-----------------------------------------------
// fucntion to clear all one field on click

clearSingleinput.addEventListener("click",Clear)

function Clear (e) {
activeInputfield.textContent = "";
result1.textContent = "";
}



activeInputfield.classList.add("highlighted")



function operatorFunction(operator) {
  
  chosenOperator=operator;
  switch (chosenOperator) {
    case "+":
    if (activeInputfield!="") {
        activeInputfield.textContent
    }
    if (inputField1.textContent && inputField2.textContent){
      document.getElementById('results').textContent = num1+num2;

    }
    else if (inputField1.textContent ==''  || inputField2.textContent ==''){
      
      operatorFunction.disable = true
    }
  break;
  case "-":
    num1 = parseInt(inputField1.textContent);
    num2 = parseInt(inputField2.textContent);
    
    if (inputField1.textContent && inputField2.textContent){
      document.getElementById('results').textContent = num1-num2;

   }
   else if (inputField1.textContent ==''  || inputField2.textContent ==''){
     
     operatorFunction.disable = true
   }
   
    break;
  case "*":
    num1 = parseInt(inputField1.textContent);
    num2 = parseInt(inputField2.textContent);
    
    if (inputField1.textContent && inputField2.textContent){
      document.getElementById('results').textContent = num1*num2;

   }
   else if (inputField1.textContent ==''  || inputField2.textContent ==''){
     
     operatorFunction.disable = true
   }
    break;
  case "/":
    num1 = parseInt(inputField1.textContent);
    num2 = parseInt(inputField2.textContent);
    
    if (inputField1.textContent && inputField2.textContent){
      document.getElementById('results').textContent = num1/num2;

   }
   else if (inputField1.textContent ==''  || inputField2.textContent ==''){
     
     operatorFunction.disable = true
   }        break;
    case "%":
      num1 = parseInt(inputField1.textContent);
      num2 = parseInt(inputField2.textContent);
      
      if (inputField1.textContent && inputField2.textContent){
        document.getElementById('results').textContent = num1%num2;
  
     }
     else if (inputField1.textContent ==''  || inputField2.textContent ==''){
       
       operatorFunction.disable = true
     } 
}
};

































// function addFunction(){
//    //document.getElementById('result').textContent = inputField1.Value + inputField2.Value
// }

// add1.addEventListener("click",addFunction());






// sub1.addEventListener("click", () => {
//     const results = parseInt(inputField1.value)-parseInt(inputField2.value);
//     console.log("results");
//     result1.innerText = results;
//    });

//    div1.addEventListener("click", () => {
//     const results = parseInt(inputField1.value)/parseInt(inputField2.value);
//     console.log(results);
//     result1.innerText = results;
//    });

//    multi1.addEventListener("click", () => {
//     const results = parseInt(inputField1.value)*parseInt(inputField2.value);
//     console.log(results);
//     result1.innerText = results;
//    });

//    rem1.addEventListener("click", () => {
//     const results = parseInt(inputField1.value)%parseInt(inputField2.value);
//     result1.innerText = results;
//     console.log(results);
//    });





