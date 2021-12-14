/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  var stack = [];
  var left_count = 0;
  var i = 0;
  while (i < s.length) {
    var c = s[i];
    if (c === '(') {
      left_count++;
      stack.push(c);
    } else if (c === ')') {
      if (left_count > 0) {
        stack.push(c);
        left_count--;
      }
    } else {
      stack.push(c);
    }
    i++;
  }
  if (left_count > 0) {
    var idx = stack.length - 1;
    while (idx >= 0) {
      if (stack[idx] === '(') {
        stack[idx] = false
      }
      idx--;
    }
  }
  return stack.reduce((pre, cur) => cur ? pre + cur : pre);
};