/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  if(!head) return null;
  // 定义虚拟头节点
  let dummy = new ListNode(null, head);
  let front = dummy;
  while(n--) {
      front = front.next;
  };
  // 定义after指针，然后两个指针一起向后走
  let after = dummy;
  while(front.next){
      after = after.next;
      front = front.next;
  }
  // 此时after，指向倒数第n个节点的前一个节点
  after.next = after.next.next;
  return dummy.next;
};