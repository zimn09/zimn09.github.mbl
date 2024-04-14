let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let times = document.querySelector("#dot");
let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");
let display = document.querySelector("#display");
let num1 ;
num1 = Number(num1);
let num2;
num2 = Number(num2);
let answear;
num1 = 8;
answear = Number(answear)
display.textContent = 8;
  plus.addEventListener("click", function () {
    display.textContent = "+";
    one.addEventListener("click", function () {
        display.textContent = "1";
        num2 = 1;
      });
      
      two.addEventListener("click", function () {
        display.textContent = "2";
        num2 = 2;
      });
      
      three.addEventListener("click", function () {
        display.textContent = "3";
        num2 = 3;
      });
      
      four.addEventListener("click", function () {
        display.textContent = "4";
        num2 = 4;
      });
      
      five.addEventListener("click", function () {
        display.textContent = "5";
        num2 = 5;
      });
      
      six.addEventListener("click", function () {
        display.textContent = "6";
        num2 = 6;
      });
      
      seven.addEventListener("click", function () {
        display.textContent = "7";
        num2 = 7;
      });
      
      eight.addEventListener("click", function () {
        display.textContent = "8";
        num2 = 8;
      });
      
      nine.addEventListener("click", function () {
        display.textContent = "9";
        num2 = 9;
      });
      equal.addEventListener("click", function() {
        display.textContent = num1 + num2;
      });
  });
  
  minus.addEventListener("click", function () {
    display.textContent = "-";
    one.addEventListener("click", function () {
        display.textContent = "1";
        num2 = 1;
      });
      
      two.addEventListener("click", function () {
        display.textContent = "2";
        num2 = 2;
      });
      
      three.addEventListener("click", function () {
        display.textContent = "3";
        num2 = 3;
      });
      
      four.addEventListener("click", function () {
        display.textContent = "4";
        num2 = 4;
      });
      
      five.addEventListener("click", function () {
        display.textContent = "5";
        num2 = 5;
      });
      
      six.addEventListener("click", function () {
        display.textContent = "6";
        num2 = 6;
      });
      
      seven.addEventListener("click", function () {
        display.textContent = "7";
        num2 = 7;
      });
      
      eight.addEventListener("click", function () {
        display.textContent = "8";
        num2 = 8;
      });
      
      nine.addEventListener("click", function () {
        display.textContent = "9";
        num2 = 9;
      });
      equal.addEventListener("click", function() {
        display.textContent = num1 - num2;
      });
  });
  
  times.addEventListener("click", function () {
    display.textContent = "*";
    one.addEventListener("click", function () {
    display.textContent = "1";
    num2 = 1;
  });
  
  two.addEventListener("click", function () {
    display.textContent = "2";
    num2 = 2;
  });
  
  three.addEventListener("click", function () {
    display.textContent = "3";
    num2 = 3;
  });
  
  four.addEventListener("click", function () {
    display.textContent = "4";
    num2 = 4;
  });
  
  five.addEventListener("click", function () {
    display.textContent = "5";
    num2 = 5;
  });
  
  six.addEventListener("click", function () {
    display.textContent = "6";
    num2 = 6;
  });
  
  seven.addEventListener("click", function () {
    display.textContent = "7";
    num2 = 7;
  });
  
  eight.addEventListener("click", function () {
    display.textContent = "8";
    num2 = 8;
  });
  
  nine.addEventListener("click", function () {
    display.textContent = "9";
    num2 = 9;
  });
  
  


  
  equal.addEventListener("click", function () {
    display.textContent = num1 * num2;
  });
  
  });
