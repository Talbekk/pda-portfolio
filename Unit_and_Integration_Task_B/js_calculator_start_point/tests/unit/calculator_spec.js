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
  // it('add 1 to 4 and get 5', function(){
  //   calculator.numberClick(4);
  //   calculator.operatorClick("+");
  //   calculator.numberClick(1);
  //   calculator.operatorClick("=");
  //   assert.deepStrictEqual(calculator.previousTotal, 5);
  // })

});
