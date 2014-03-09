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
    
};

calculator.multiply = function (a, b) {
    
};

calculator.divide = function (a, b) {
    
}; 