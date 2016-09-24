//test the ajax calls to the server with an arithmetic string.

test("calculate() - Basic", function() {
    //addition
    $('inputDisplay').value = "1+1";
    //call the calculate method.
    stop();
    Calculator.calculate();
    start();
    QUnit.equal($('inputDisplay').value, "2", "Adding" );

    //subtraction
    $('inputDisplay').value = "1-1";
    //call the calculate method.
    stop();
    Calculator.calculate();
    start();
    QUnit.equal($('inputDisplay').value, "0", "Subtracting" );

    //Multiplication
    $('inputDisplay').value = "2*2";
    //call the calculate method.
    stop();
    Calculator.calculate();
    start();
    QUnit.equal($('inputDisplay').value, "4", "Multiplication" );

    //Division
    $('inputDisplay').value = "10/2";
    //call the calculate method.
    stop();
    Calculator.calculate();
    start();
    QUnit.equal($('inputDisplay').value, "5", "Division" );

});

test("calculate() - Decimal", function() {

    //addition
    $('inputDisplay').value = "1.5+1.5";
    //call the calculate method.
    stop();
    Calculator.calculate();
    start();
    QUnit.equal($('inputDisplay').value, "3", "Adding");

    //subtraction
    $('inputDisplay').value = "1-1.5";
    //call the calculate method.
    stop();
    Calculator.calculate();
    start();
    QUnit.equal($('inputDisplay').value, "-0.5", "Subtracting");

    //Multiplication
    $('inputDisplay').value = "2.5*2.5";
    //call the calculate method.
    stop();
    Calculator.calculate();
    start();
    QUnit.equal($('inputDisplay').value, "6.25", "Multiplication");

    //Division
    $('inputDisplay').value = "10.5/2.5";
    //call the calculate method.
    stop();
    Calculator.calculate();
    start();
    QUnit.equal($('inputDisplay').value, "4.2", "Multiplication");

});

test("calculate() - Arithmetic Strings", function() {

    //addition
    $('inputDisplay').value = "1+3/3+4*2";
    //call the calculate method.
    stop();
    Calculator.calculate();
    start();
    QUnit.equal($('inputDisplay').value, "10", "Test String 1");

    //subtraction
    $('inputDisplay').value = "-2*2/43+22+2";
    //call the calculate method.
    stop();
    Calculator.calculate();
    start();
    QUnit.equal($('inputDisplay').value, "23.906976744186046", "Test String 2");

});
