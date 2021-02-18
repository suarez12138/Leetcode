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


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var partition = function (head, x) {
    let small = new ListNode(-1);
    const smallHead = small;
    let large = new ListNode(-1);
    const largeHead = large;
    while (head) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }
    large.next = null;
    small.next = largeHead.next;
    return smallHead.next;
};

let h1 = new ListNode(2, null)
let h2 = new ListNode(5, h1)
let h3 = new ListNode(2, h2)
let h4 = new ListNode(3, h3)
let h5 = new ListNode(4, h4)
let h6 = new ListNode(1, h5)

console.log(partition(h6, 3))