var isHappy = function (n) {
  let pre = n, cur = getNext(n);
  while (cur !== 1) {
    pre = getNext(pre);
    cur = getNext(getNext(cur));
    if (cur === pre) return false;
  }
  return true;
}

function getNext(num) {
  let result = 0;
  while (num) {
    result += (num % 10) * (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}