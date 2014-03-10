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
            expect(calculator.subtract(4,2)).to.be.a("number");
            expect(calculator.subtract(23.42,21234)).to.be.a("number");
            expect(calculator.subtract(23.2342,2.12)).to.be.a("number");
            
        });
        
        //shoud return 0 if the values are none numeric
        it("should return 0(none numeric values passed)", function () {
            
            expect(calculator.subtract("Hello World")).to.equal(0);
            expect(calculator.subtract("Hello World", "hiw", "hey", "test")).to.equal(0);
            
        });
        
        it("should return the difference", function() {
            expect(calculator.subtract(4,2)).to.equal(2);
            expect(calculator.subtract(10.5,2.5)).to.equal(8);
            expect(calculator.subtract("hi",2)).to.equal(2); 
        });
    });
    
    describe("#multiply()", function() {
        it("should return a number", function() {
            expect(calculator.multiply(4,2)).to.be.a("number");
            expect(calculator.multiply(4.5,2.5)).to.be.a("number");
            expect(calculator.multiply(4,23423.23)).to.be.a("number");
        });
        
        it("should return 0(none numeric values passed)", function(){
            expect(calculator.multiply("hello world")).to.equal(0);
            expect(calculator.multiply("hello world", "stuff","test")).to.equal(0);
            
        });
        
        it("should return the product", function() {
             expect(calculator.multiply(4,2)).to.be.equal(8);
             expect(calculator.multiply(4,2.5)).to.be.equal(10);
             expect(calculator.multiply(4.5,2.5)).to.be.equal(11.25);
             expect(calculator.multiply(4,"test")).to.be.equal(4);
             expect(calculator.multiply("test",2)).to.be.equal(2);
        });
    });
    
    describe("#divide()", function() {
        it("should return a number", function() {
            expect(calculator.divide(4,2)).to.be.a("number");
            expect(calculator.divide(4.5,2.5)).to.be.a("number");
            expect(calculator.divide(4,23423.23)).to.be.a("number");
        });
        
        it("should return 0(none numeric values passed)", function(){
            expect(calculator.divide("hello world")).to.equal(0);
            expect(calculator.divide("hello world", "stuff","test")).to.equal(0);
            
        });
        
        it("should return the quotient", function() {
            expect(calculator.divide(4,2)).to.be.equal(2);
            expect(calculator.divide(4,2.5)).to.be.equal(1.6);
            expect(calculator.divide(4.5,2.5)).to.be.equal(1.8);
            expect(calculator.divide(4,"test")).to.be.equal(4);
            expect(calculator.divide("test",2)).to.be.equal(2);
            expect(calculator.divide(4,0)).to.be.equal(0);
        });
    }); 
});