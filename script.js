//capture DOM elements first 

const container = document.querySelector(".container");
const displayBox = document.querySelector(".displayBox");
const btn=container.querySelectorAll(".btn");
const btneq=container.querySelector(".btneq");

//height/width baseline calculations

const displayWidth = window.innerWidth;
const displayHeight= window.innerHeight;

const calcWidth= Math.floor(displayWidth/3);
const calcHeight=Math.floor(displayHeight/3);

const containerWidth=calcWidth+10;

//process css styling for calculation here . 
//Mainly width manipulation 

container.style.width=containerWidth+"px";
btn.forEach(btnElement => {
    btnElement.style.width = Math.floor(calcWidth/4) +"px";
    btnElement.style.height= "50px";
})


//define event listener for button click ; display in display box

let inputVarA ='';
let inputVarB='';
let operator='';


btn.forEach( btnElement => {
    btnElement.addEventListener("click", function(e) {     
        const btnValue = e.target.textContent;
        
            
        if (e.target.classList.contains("funcBtn")) {
            if (inputVarB ==='') {
                operator=btnValue;
                displayBox.textContent= btnValue;

            } else 
            {
                inputVarA = runoperation(parseFloat(inputVarA),operator,parseFloat(inputVarB));
                operator = btnValue;
                displayBox.textContent= inputVarA;
                inputVarB='';
                console.log(inputVarB);
            }
        } else if (e.target.classList.contains("numBtn") && operator==='') {
            inputVarA +=btnValue;
            displayBox.textContent= inputVarA;       
        } else 
        if (e.target.classList.contains("numBtn") && !(operator==='')) {
            inputVarB +=btnValue;
            displayBox.textContent=inputVarB;
        }

        if (e.target.classList.contains("btneq")) {
            inputVarA=runoperation(parseFloat(inputVarA),operator,parseFloat(inputVarB));
            operator=''
            inputVarB=''
            //operator='';
            displayBox.textContent= inputVarA;
        }

        if (e.target.classList.contains("clrBtn")) {
            inputVarA='';
            operator='';
            inputVarB='';
            displayBox.textContent= "0";
        }
      

    })
});

function runoperation(startNum,operator,endNum) {
    switch (operator) {
        case '+':
            return (startNum+endNum);
            break;
        case '-':
            return (startNum - endNum);
            break;
        case '*':
            return (startNum * endNum);
            break;
        case '/':
            if (endNum === 0) {
                return "Division by zero";
            }
            return (startNum/endNum);
            break;
    }

}
