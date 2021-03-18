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

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    let mark = head.next;
    let p2 = mark, p1 = head;
    while (p1.next && p1.next.next) {
        p1.next = p1.next.next;
        p2.next = p2.next.next;
        p1 = p1.next;
        p2 = p2.next;
    }
    p1.next = mark;

    return head;
};