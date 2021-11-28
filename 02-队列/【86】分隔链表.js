/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
  var big = new ListNode(-1);
  var small = new ListNode(-1);
  var b = big;
  var s = small;
  var cur = head;
  while (cur!=null) {
    if (cur.val >= x) {
      big.next = cur;
      big = big.next;
    } else {
      small.next = cur;
      small = small.next;
    }
    cur = cur.next;
  }
  big.next = null;
  small.next = b.next;
  return s.next;
};