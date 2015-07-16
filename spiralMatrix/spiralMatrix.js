var spiralMatrix = function(matrix, direction) {
  var result = [];
  var rowStartIdx = 0;
  var rowEndIdx = matrix.length - 1;
  var colStartIdx = 0;
  var colEndIdx = matrix[0].length - 1;
  var spiralDir = direction || 'clockwise';

  // clockwise spiral
  var cw = function(matrix) {
    while (rowStartIdx <= rowEndIdx && colStartIdx <= colEndIdx) {
      for (var i = colStartIdx; i <= colEndIdx; i++) {
        result.push(matrix[rowStartIdx][i]);
      }
      rowStartIdx++;

      for (var j = rowStartIdx; j <= rowEndIdx; j++) {
        result.push(matrix[j][colEndIdx]);
      }
      colEndIdx--;

      if (rowStartIdx <= rowEndIdx) {
        for (var k = colEndIdx; k >= colStartIdx; k--) {
          result.push(matrix[rowEndIdx][k]);
        }
        rowEndIdx--;
      }

      if (colStartIdx <= colEndIdx) {
        for (var l = rowEndIdx; l >= rowStartIdx; l--) {
          result.push(matrix[l][colStartIdx]);
        }
        colStartIdx++;
      }
    }
    return result;
  }

  // counterclockwise spiral
  var ccw = function(matrix) {
    while (rowStartIdx <= rowEndIdx && colStartIdx <= colEndIdx) {
      for (var j = rowStartIdx; j <= rowEndIdx; j++) {
        result.push(matrix[j][colStartIdx]);
      }
      colStartIdx++;

      for (var i = colStartIdx; i <= colEndIdx; i++) {
        result.push(matrix[rowEndIdx][i]);
      }
      rowEndIdx--;

      if (colStartIdx <= colEndIdx) {
        for (var l = rowEndIdx; l >= rowStartIdx; l--) {
          result.push(matrix[l][colEndIdx]);
        }
        colEndIdx--;
      }

      if (rowStartIdx <= rowEndIdx) {
        for (var k = colEndIdx; k >= colStartIdx; k--) {
          result.push(matrix[rowStartIdx][k]);
        }
        rowStartIdx++;
      }
    }
    return result;
  }

  return (spiralDir === 'clockwise') ? cw(matrix) : ccw(matrix);
};