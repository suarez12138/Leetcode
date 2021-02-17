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
var swapPairs = function (head) {
    let point = head;
    if (head && head.next) head = head.next;
    let pre = null;
    while (point) {
        let tmp = point.next;
        if (!tmp) break;
        point.next = tmp.next;
        tmp.next = point;
        if (pre) pre.next = tmp;
        pre = point;
        point = point.next;
    }
    return head;
};