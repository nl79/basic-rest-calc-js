/*
 *GET is217hw3 page
 */

//import the calculator module and print out some results.
require('../lib/calculator.js'); 

exports.index = function(req, res) {
    //addition 
    
    //subtraction 
    
    //multiplication 
    
    //division  
     
    //res.send(req); 
    res.render('is217hw3', { title: 'IS217hw3' });
}