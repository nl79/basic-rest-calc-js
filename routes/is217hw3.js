/*
 *GET is217hw3 page
 */

//import the calculator module and print out some results.
//require('../javascripts/lib/calculator.js'); 

exports.index = function(req, res) {
    //get the request method
    console.log(req.route.method);
    
    //if get method is used
    query = req.query;
    console.log(query);
    
    // if post method is used. 
    console.log(req.body);
    
    res.render('is217hw3', { title: 'IS217hw3' });
}

//parse the string and return the responce. 
exports.calc = function(req, res) {
    
    console.log(req.route.method);
    
    console.log(req.body);

    var input = req.body['q'] ? req.body['q'] : ""; 
    //split the string and push the numeric values on one stack, and operators on another.
    
    if (input && input.length > 3) {
        var numArr = new Array();
        var opArr = new Array();
        
        
        //last slice point
        var last = 0;
        //store the number
        var num;
        //store the operator
        var op;
        
        for(var i = 0; i < input.length; i++) {
            console.log(input.charAt(i));
            //if not a number is encountered, create a substring from the last point
            //to the character. 
            if (isNaN(input.charAt(i))) {
                //create a substring for the number
                num = input.substring(last, i)
                numArr.push(num);
                
                //create a substring for the operator
                op = input.substring(i, i+1); 
                opArr.push(op);
                
                //set last to i
                last = i+1; 
               
            }
        }
        
        //get the last number
        num = input.substring(last); 
        numArr.push(num); 
        
        console.log(numArr);
        console.log(opArr); 
    }
    

    
    
    res.write(req.body['q']);
    res.end(); 
}