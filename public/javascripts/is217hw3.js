$ = function(id) {
    return document.getElementById(id); 
}


//function will update the display string according to the
//character passed to it. 
function updateDisplay(btnVal) {
    
    //get the reference to the display textbox
    display = $("inputDisplay"); 
    
     //function to add an operator to the end of the string
    var addOp = function(str, op) {
        //check if there an operator at the end of the string.
        //if so, remove it and replace it with the new one.
        
        //string of operators. 
        opStr = "+-/*";
        
        //check if the last character is an operator
        if (opStr.indexOf(str.charAt(str.length-1)) !== -1) {
            //replace the last operator with the new one. 
            str = str.substring(0,str.length-1) + op; 
        } else {
            //concatenate the operator
            str = str + op; 
        }
        
        
        //return the new string
        return str; 
    };
    
    //function to add a period to the number string.
    var addDecPoint = function(str) {
        //check the last character is a decimal.
        //check if there is a decimal already in the number. 
        str += display.value.charAt(display.value.length-1) == '.' ? "" : ".";
        return str; 
    }; 
    
    switch (btnVal) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            
            //add the number to the end of the string
            display.value += btnVal; 
            break;
        
        case '.':
            
            //check and add a decimal point.
            display.value = addDecPoint(display.value); 
            break;
        
        case '+':
        case '-':
        case '*':
        case '/':
            
            //add the operator to the end of the string
            display.value = addOp(display.value, btnVal);
            break;
        
        case 'clear':
            //clear the screen
            display.value = "";
            break; 
        case 'backspace':
         
            //remove the last character in the string
            display.value = display.value.slice(0, -1); 
            break;
        
        case '=':
            //call calcluate method.
            calculate(); 
            
            break;
        default:
            break;     array
    }
}

//calcuate function to send data to the sever
function calculate() {
    //build the query string
    var qString = "q=" + encodeURIComponent($('inputDisplay').value);
    //var qString = "q=" + $("inputDisplay").value; 
 
    //create an XMLHttpRequest object
    xmlhttp = getXMLhttp();
    
    //setup callback
    xmlhttp.onreadystatechange=function() {
        
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
                { 
                    document.getElementById("inputDisplay").value=xmlhttp.responseText;
                }
    }
      
    //open the connection
    xmlhttp.open("POST","/is217hw3/calc",true);
    
    //set the post header. 
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    
    alert(qString); 
    //send the data 
    xmlhttp.send(qString);

}

//btnclick handler
function btnClick(evt) {
    //getText
    var getText = function(obj) {
        return obj.textContent ? obj.textContent : obj.innerText; 
    }; 

    //call the updateDisplay function passing the value of the button element
    updateDisplay(getText(evt.target.firstChild).toLowerCase());
   
    
}

//getchar function that will capture the buttonpress events for the inputbox
function getChar(evt) {
    //capture the key and validate.
    console.log(evt.charCode);
    console.log(String.fromCharCode(evt.charCode));
    
    //call the update method.
    updateDisplay(String.fromCharCode(evt.charCode));
    
    //prevent the default action of inserting the character into the
    //textbox
    evt.preventDefault(); 
}

//display keypress event

//function to initilize the buttons
function init() {
    //wire the event listers to the buttons
    btnArr = document.getElementsByTagName('button');
    
    //if buttons found loop and attach listener
    if (undefined != btnArr) {
        for(var i = 0; i < btnArr.length; i++) {
            btnArr[i].onclick = btnClick; 
        }
    }
    
    //wire the envent listener to the display textbox
    $("inputDisplay").onkeypress = getChar;
}

window.onload = function() {
    init(); 
}