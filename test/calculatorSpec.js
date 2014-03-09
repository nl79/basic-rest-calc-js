//load the chai library
var expect = require("chai").expect;

//load the calc file
require("../lib/calculator.js");

describe("Calculator", function(){
    describe("#add()", function(){
        it("should return a number", function(){
    
            expect(calculator.add(4,2)).to.be.a("number");
            expect(calculator.add(23.42,21234)).to.be.a("number");
            expect(calculator.add(23.2342,2.12)).to.be.a("number");
        
        });
        
        //return 0 when none numeric values are passed
        it("should return 0(none numeric values passed)", function () {
            
            expect(calculator.add("Hello World")).to.equal(0);
            expect(calculator.add("Hello World", "hiw", "hey", "test")).to.equal(0);
            
        });
        it("should return the sum", function() {
            
            expect(calculator.add(1, 1)).to.equal(2);
            expect(calculator.add(10,55.55)).to.equal(65.55);
            expect(calculator.add(10,55.55, 5, 10, 20)).to.equal(100.55);
            expect(calculator.add(10,55.55, "hi", "teststring", 10)).to.equal(75.55);
        })
        
       
    });
    
    describe("#subtract()", function(){
        it("should return an number", function(){
           
            
        });
        
        /*
        //this block should fail. 
        it("should return true for valid integer(this should fail)", function(){            
            //failed test
            expect(validator.isInt(1365873568.23)).to.be.true;
        });
        */
    });
});