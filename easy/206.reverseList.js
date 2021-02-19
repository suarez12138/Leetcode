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
var reverseList = function (head) {
    let prehead = new ListNode(0);
    if (!head) return null;
    prehead.next = head;
    while (head.next) {
        let tmp = prehead.next;
        prehead.next = head.next;
        head.next = head.next.next;
        prehead.next.next = tmp;
    }
    return prehead.next;
};