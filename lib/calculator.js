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