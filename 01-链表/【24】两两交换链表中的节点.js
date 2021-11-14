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
 var swapPairs = function(head) {
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