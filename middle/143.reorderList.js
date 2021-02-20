/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) return head;
    let mid = midNode(head);
    let h1 = head;
    let h2 = mid.next;
    mid.next = null;
    h2 = reverse(h2);
    mergeTwoLists(h1, h2);
};

function mergeTwoLists(l1, l2) {
    let tmp1, tmp2;
    while (l1 && l2) {
        tmp1 = l1.next;
        tmp2 = l2.next;
        l1.next = l2;
        l2.next = tmp1;
        l1 = tmp1;
        l2 = tmp2;
    }
};

function midNode(head) {
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverse(head) {
    let pre = null, cur = head;
    while (cur) {
        let tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    return pre;
}

let h1 = new ListNode(4, null)
let h2 = new ListNode(3, h1)
let h3 = new ListNode(2, h2)
let h4 = new ListNode(1, h3)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

console.log(reorderList(h4))