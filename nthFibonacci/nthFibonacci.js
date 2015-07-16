var memorized = {0: 0, 1: 1};

var nthFibonacci = function(n) {
  var nthValue;

  if (memorized[n] !== undefined) {
    return memorized[n];
  } else {
    nthValue = nthFibonacci(n - 2) + nthFibonacci(n - 1);
    memorized[n] = nthValue;
    return nthValue;
  }
}
