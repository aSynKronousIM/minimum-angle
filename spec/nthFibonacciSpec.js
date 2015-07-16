describe('nthFibonacci', function() {
  it('should be a function', function(){
    expect(nthFibonacci).to.be.a.Function;
  });

  it('should return integers', function(){
    var result = nthFibonacci(0);
    expect(result).to.be.a.Number;
  });

  it('should handle the base cases with ease', function(){
    expect(nthFibonacci(0)).to.equal(0);
    expect(nthFibonacci(1)).to.equal(1);
  });

  it('should return the nth Fibonacci number for a given n', function(){
    expect(nthFibonacci(5)).to.equal(5);
    expect(nthFibonacci(10)).to.equal(55);
    expect(nthFibonacci(20)).to.equal(6765);
  });

  it('should return same answer for recursive and memorized', function(){
    expect(nthFibonacci(6)).to.equal(8);
    expect(memorized[6]).to.equal(8);
  });
});