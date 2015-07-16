describe('minimumAngle', function() {
  it('should be a function', function(){
    expect(minimumAngle).to.be.a.Function;
  });

  it('should return integers', function(){
    var result = minimumAngle("0:0");
    expect(result).to.be.a.Number;
  });

  it('should return minimum angle for given time', function(){
    expect(minimumAngle("0:00")).to.equal(0);
    expect(minimumAngle("6:00")).to.equal(90);
    expect(minimumAngle("12:00")).to.equal(180);
    expect(minimumAngle("18:00")).to.equal(90);
    expect(minimumAngle("1:07")).to.equal(25.25);
    expect(minimumAngle("4:27")).to.equal(95.25);
    expect(minimumAngle("6:17")).to.equal(7.75);
    expect(minimumAngle("8:47")).to.equal(150.25);
    expect(minimumAngle("18:17")).to.equal(172.25);
    expect(minimumAngle("20:07")).to.equal(100.25);
  });
});