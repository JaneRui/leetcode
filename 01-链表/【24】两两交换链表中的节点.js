/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs1 = function(head) {
  // 边界条件处理
  if (!head) return head;
  if (head && !head.next) return head;
  // 两两交换
  var subResult = swapPairs(head.next.next);
  var headNext = head.next;
  headNext.next = head;
  head.next = subResult;
  return headNext;
};

var swapPairs = function(head) {
  // 边界条件处理
  if (!head) return head;
  if (head && !head.next) return head;
  // 两两交换
  var dumpy = new ListNode(null, head);
  var pre = dumpy, tail = dumpy, temp = dumpy;
  while (temp.next && temp.next.next) { // 一组一组进行交换
    pre = pre.next;
    tail = pre.next; // tail一直是pre的下一个节点
    // 重新设置两个节点的指向
    [pre.next, tail.next] = [tail.next, pre];
    // 重新让头指针指向tail
    temp.next = tail;
    // 将temp移动到上一组翻转后的尾节点
    temp = pre;
  }
  return dumpy.next;
};