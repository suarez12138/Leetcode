/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {
    let head = new ListNode(1);
    let point = head;
    while (l1 != null && l2 != null) {
        if (l1.val > l2.val) {
            point.next = l2;
            l2 = l2.next;
        } else {
            point.next = l1;
            l1 = l1.next;
        }
        point = point.next;
    }
    point.next = l1 === null ? l2 : l1;
    return head.next;
};
let h4 = new ListNode(4, null)
let h3 = new ListNode(3, h4)
let h2 = new ListNode(2, null)
let h1 = new ListNode(1, h2)

console.log(mergeTwoLists(h1, h3))