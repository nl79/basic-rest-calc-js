/*
 *GET is217hw3 page
 */

//import the calculator module and print out some results.
require('../lib/calculator.js'); 

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
    var result = null; 
    
    if (input && input.length > 3) {
        //call the calc method of the calculator object. 
        result = calculator.calc(input);  
    }
    

    
    
    res.write(result);
    res.end(); 
}