/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  var stack_s = write(s);
  var stack_t = write(t);
  return stack_s.join('') === stack_t.join('');
};

function write(s) {
  var stack = [];
  var index = 0;
  while (index < s.length) {
    var c = s[index];
    if (c === '#') {
      stack.pop();
    } else {
      stack.push(c);
    }
    index++;
  }
  return stack;
}