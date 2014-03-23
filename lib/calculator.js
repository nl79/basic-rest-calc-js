calculator = { };

calculator.add = function () {
    var result = 0;
    
    for(var i = 0; i < arguments.length; i++) {
        //if the argument[i] is not numeric, skip the entry
        if (isNaN(arguments[i])) {
            continue; 
        }
        //accumulate the result
        result += arguments[i]; 
    }
    
    //return result
    return result;   
};

calculator.subtract = function(a, b) {
    var result = null;
    
    for(var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            continue; 
        }
        if (result == null) {
            result = arguments[i]; 
        } else {
            result -= arguments[i]; 
        }
        
    }
    //if result equal null, return 0, else return the computed result
    return result == null ? 0 : result; 
    
};

calculator.multiply = function (a, b) {
    var result = null;
    
    
    for(var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            continue; 
        }
        if (result == null) {
            result = arguments[i]; 
        } else {
            result *= arguments[i]; 
        }
        
    }
    //if result equal null, return 0, else return the computed result
    return result == null ? 0 : result; 
};

calculator.divide = function (a, b) {
     var result = null;
    
    for(var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            continue; 
        }
        if (result == null) {
            result = arguments[i]; 
        } else {
            //check division by 0
            if (arguments[i] == 0) {
                return 0; 
            } else {
                result /= arguments[i];  
            } 
        }
        
    }
    //if result equal null, return 0, else return the computed result
    return result == null ? 0 : result; 
};

calculator.calc = function (input) {
    return calculator.parse(input); 
}

//method for parsing an arithmentic string 
calculator.parse = function (input) {
    
    if (!input || undefined == input || null == input) {
        return null; 
    }
    
    var result = "";
    
    var numArr = new Array();
    var opArr = new Array();
    
    
    //last slice point
    var last = 0;
    //store the number
    var num = null;
    //store the operator
    var op = null; 

    for(var i = 0; i < input.length; i++) {
        console.log(input.charAt(i));
        //if not a number is encountered, create a substring from the last point
        //to the character. 
        if (isNaN(input.charAt(i)) || i == input.length -1) {
            
            //get the number
            if (i == input.length-1) {
                //get the last number and push it on the stack. 
                numArr.push(input.substring(last));
                //set the op to null since this is the last number
                op = null; 
            } else {
                //get the number
                num = input.substring(last, i)
                numArr.push(num);
                //get the op
                op = input.substring(i, i+1);
            }
            
            //if the op stack is empty push it on the stack
            if (opArr.length == 0) {
                opArr.push(op);
            } else if (opArr.length != 0) {
                
                //switch statement for th eoperations based on the operator. 
                if (opArr[opArr.length-1] == '*' || opArr[opArr.length-1] == '/') {
                    //pop the last 2 numbers
                    var num1 = numArr.pop();
                    var num2 = numArr.pop();
                    
                    //pop the last op
                    var lastOp = opArr.pop(); 
                    
                    //switch statement to call the method based based on operator. 
                    switch (lastOp){
                        case '*':
                            numArr.push(calculator.multiply(num1, num2)); 
                            break;
                        
                        case '/':
                            numArr.push(calculator.multiply(num1, num2)); 
                            break;
                        
                        default:
                            break; 
                    }
                } 
                
                // if the op is not null push the new op on the stack.
                if (op != null) { opArr.push(op); }
            }
            //set the index of the last extracted substring. 
            last = i+1; 
           
        }
    }
    
    //perform the low order operations
    //loop throught the operator stack while it has elements. 
    while (opArr.length != 0) {
        //pop an op
        op = opArr.pop();
        
        //pop 2 numbers
        num1 = numArr.pop();
        num2 = numArr.pop();
        
        //switch statement for the operation
        switch(op) {
            
            case '+':
                numArr.push(calculator.add(num1, num2))
                break;
            case '-':
                numarr.push(calculator.subtract(num1, num2)); 
                break;
            default:
                break; 
        }
    }
    
    
    console.log(numArr);
    console.log(opArr);
    
    //return the result. 
    return result; 
};
    
