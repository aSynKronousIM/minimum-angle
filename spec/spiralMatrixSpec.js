describe('spiralMatrix', function() {
  it('should be a function', function(){
    expect(spiralMatrix).to.be.a.Function;
  });

  it('should spiral clockwise if no direction is given', function() {
    var squareMatrix = [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ]
    ];

    expect(spiralMatrix(squareMatrix)).to.eql(spiralMatrix(squareMatrix, 'clockwise'));
  });

  it('should spiral clockwise/counterclockwise a square matrix', function() {
    var squareMatrix = [
      [  1,   2,   3,   4,   5],
      [  6,   7,   8,   9,  10],
      [ 11,  12,  13,  14,  15],
      [ 16,  17,  18,  19,  20],
      [ 21,  22,  23,  24,  25]
    ];

    expect(spiralMatrix(squareMatrix)).to.eql([1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
    expect(spiralMatrix(squareMatrix, 'counterclockwise')).to.eql([1, 6, 11, 16, 21, 22, 23, 24, 25, 20, 15, 10, 5, 4, 3, 2, 7, 12, 17, 18, 19, 14, 9, 8, 13]);
  });

  it('should spiral clockwise/counterclockwise a tall matrix', function() {
    var awkwardMatrix = [
      [  1,  2,  3],
      [  4,  5,  6],
      [  7,  8,  9],
      [ 10, 11, 12],
      [ 13, 14, 15],
      [ 16, 17, 18],
      [ 19, 20, 21],
      [ 22, 23, 24]
    ];

    expect(spiralMatrix(awkwardMatrix)).to.eql([1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20]);
    expect(spiralMatrix(awkwardMatrix, 'counterclockwise')).to.eql([1, 4, 7, 10, 13, 16, 19, 22, 23, 24, 21, 18, 15, 12, 9, 6, 3, 2, 5, 8, 11, 14, 17, 20]);
  });

  it('should spiral clockwise/counterclockwise a wide matrix', function() {
    var awkwardMatrix = [
      [  1,  2,  3,  4,  5,  6,  7],
      [  6,  7,  8,  9, 10, 11, 12],
      [ 13, 14, 15, 16, 17, 18, 19]
    ];

    expect(spiralMatrix(awkwardMatrix)).to.eql([1, 2, 3, 4, 5, 6, 7, 12, 19, 18, 17, 16, 15, 14, 13, 6, 7, 8, 9, 10, 11]);
    expect(spiralMatrix(awkwardMatrix, 'counterclockwise')).to.eql([1, 6, 13, 14, 15, 16, 17, 18, 19, 12, 7, 6, 5, 4, 3, 2, 7, 8, 9, 10, 11]);
  });

  it('should spiral clockwise/counterclockwise a n by 1 matrix', function() {
    var awkwardMatrix = [
      [  1,  2,  3,  4,  5,  6,  7]
    ];

    expect(spiralMatrix(awkwardMatrix)).to.eql([1, 2, 3, 4, 5, 6, 7]);
    expect(spiralMatrix(awkwardMatrix, 'counterclockwise')).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should spiral clockwise/counterclockwise a 1 by n matrix', function() {
    var awkwardMatrix = [
      [ 1 ],
      [ 2 ],
      [ 3 ],
      [ 4 ]
    ];

    expect(spiralMatrix(awkwardMatrix)).to.eql([1, 2, 3, 4]);
    expect(spiralMatrix(awkwardMatrix, 'counterclockwise')).to.eql([1, 2, 3, 4]);
  });

});

