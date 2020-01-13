const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  // Do the arithmetical operations update the display with the result of the operation.
  it('should display result of operation', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  // multiple operations can be chained together.
  it('should display result of operation after multiple operations are chained together', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  // returns a negative where multiplying a postive integer by a negative one.
  it('should return a negative integer from the multiplication of a positve and negative integer', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-4')
  })

  // returns a double when adding two decimals together.
  it('should return a decimal when an odd number is divided by an even one', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2.5')
  })
  // can manage extremely large numbers.
  it('should returns a value to the power of when large numbers are used', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1e+24')
  })

  // returns zero when a number is divided by it.
  it('should return zero when a number is divided by it', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

});
