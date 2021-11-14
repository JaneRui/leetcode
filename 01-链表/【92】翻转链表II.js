/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
  // 1.找出反转链表的前一个节点
  var dummyList = new ListNode(-1)
  dummyList.next = head
  var prevNode = dummyList;
  for(var i = 0; i < left-1; i++) {
      prevNode = prevNode.next;
  }
  // 反转链表的第一个节点
  var firstNode = prevNode.next;
  // 2.找出反转链表最后一个节点
  var lastNode = prevNode;
  for(var i=0; i < right - left + 1; i++) {
      lastNode = lastNode.next;
  }
  // 反转链表的下一个节点
  var afterNode = lastNode.next;
  // 3.截取出需要反转的链表
  var newList = firstNode;
  // 4.断开链表
  prevNode.next = null;
  lastNode.next = null;
  // 对newList进行反转
  newList = traverLinkedList(newList);
  // 组装
  prevNode.next = newList;
  firstNode.next = afterNode;
  return dummyList.next;
};
function traverLinkedList (head) {
  var prev = null;
  var cur = head;
  while(cur) {
      var nextNode = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nextNode;
  }
  return prev;
}