/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  var stack = [];
  for (var i = 0; i < ops.length; i++) {
    var item = ops[i];
    var lastIndex = getIndex()
    if (item === '+') {
      stack.push(stack[lastIndex] + stack[lastIndex - 1]);
      continue;
    }
    if (item === 'D') {
      stack.push(stack[lastIndex] * 2);
      continue;
    }
    if (item === 'C') {
      stack.pop();
      continue;
    }
    stack.push(Number(item))
  };
  function getIndex () {
    return stack.length - 1;
  }
  return stack.reduce((pre, cur) => pre + cur, 0);
};
var ops = ["5","2","C","D","+"]
console.log(calPoints(ops));