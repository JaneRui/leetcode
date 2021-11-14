/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
  var len = 0;
  var p = head;
  while(p) {
      len++;
      p = p.next;
  }
  if (k > len) {
      k = k % len;
  }
  while(k > 0) {
      var cur = head;
      while(cur) {
          var next = cur.next;
          if(next && next.next == null) {
              cur.next = null;
              head = new ListNode(next.val, head);
              break;
          }
          cur = cur.next;
      }
      k--;
  }
  return head;
};