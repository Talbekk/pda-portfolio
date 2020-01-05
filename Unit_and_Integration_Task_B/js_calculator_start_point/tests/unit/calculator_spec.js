var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  // test the add function
  it('add 1 to 4 to get 5', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(5, calculator.runningTotal);
  })
  // test the subtract function
  it('subtract 4 from 7 to get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })
  // test the multiply function
  it('multiply 3 by 5 to get 15', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.equal(15, calculator.runningTotal);
  })
  // tests the divide function
  it('divide 21 by 7 to get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })
  // it('add 1 to 4 and get 5', function(){
  //   calculator.numberClick(4);
  //   calculator.operatorClick("+");
  //   calculator.numberClick(1);
  //   calculator.operatorClick("=");
  //   assert.deepStrictEqual(calculator.previousTotal, 5);
  // })

});
