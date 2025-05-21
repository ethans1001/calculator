
var num1 = 0
let sign = 0
let num2 = 0
const calcuation = document.getElementById("calculation")
let calculationstr = ""
letcalculationint = 0
var total = 0
var keypress = 0;

document.onkeydown = function(e) {
   keypress = e.key
   if (Number.isInteger(keypress) == true){
      getnum(keypress)
   }
}



let numdict = {
   "zero":0,
   "one":1,
   "two":2,
   "three":3,
   "four":4,
   "five":5,
   "six":6,
   "seven":7,
   "eight":8,
   "nine":9
  
   
}



const element = document.getElementById("calculation");
element.innerHTML = num1;

var getnum1 = true


function getnum(num){
   if (getnum1 == true){
      console.log(num1)
      num1 = num1*10 + numdict[num]
      element.innerHTML = num1; 

   }
   else if (getnum1 == false){
      element.innerHTML=""
      num2 = num2*10 + numdict[num]
      element.innerHTML = num2; 
      
   }
}

function plus(){
   if(getnum1==true){
      sign="plus"
      document.getElementById("plus").style.backgroundColor ="#5a5858"
      getnum1=false
   }
}

function minus(){
   if(getnum1==true){
      sign="minus"
      document.getElementById("minus").style.backgroundColor ="#5a5858"
      getnum1=false
   }


}

function times(){
   if(getnum1==true){
      sign="times"
      document.getElementById("times").style.backgroundColor ="#5a5858"
      getnum1=false
   }
   
}

function divide(){
   if(getnum1=true){
      sign="divide"
      document.getElementById("divide").style.backgroundColor ="#5a5858"
      getnum1=false
   }

}


function cleared(){
   num1 = 0;
   num2 = 0;
   element.innerHTML = 0;
   sign=""
   total=0
   document.getElementById("plus").style.backgroundColor ="#0b0a0a"
   document.getElementById("minus").style.backgroundColor ="#0b0a0a"
   document.getElementById("times").style.backgroundColor ="#0b0a0a"
   document.getElementById("divide").style.backgroundColor ="#0b0a0a"
}

function equal(){
   console.log(num1," ",num2)
   if (sign=="plus"){
      element.innerHTML=""
      total = num1+num2
      
      document.getElementById("plus").style.backgroundColor ="#0b0a0a"

      
      getnum1=true
      element.innerHTML = total
      num1=total
      num2=0
      sign=""
   }
   else if(sign=="minus"){
      element.innerHTML=""
      total = num1-num2
      document.getElementById("minus").style.backgroundColor ="#0b0a0a"
      getnum1=true
      element.innerHTML = total
      num1=total
      num2=0
      sign=""
   }
   else if(sign=="times"){
      element.innerHTML=""
      total = num1*num2
      document.getElementById("times").style.backgroundColor ="#0b0a0a"
      getnum1=true
      element.innerHTML = total
      num1=total
      num2=0
      sign=""
   }
   else if(sign=="divide"){
      element.innerHTML=""
      total = num1/num2
      document.getElementById("divide").style.backgroundColor ="#0b0a0a"
      getnum1=true
      element.innerHTML = total
      num1=total
      num2=0
      sign=""
   }
   
   
   
}

