/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let n = lists.length;
    return merge(lists, 0, n - 1);
};

function merge(lists, s, e) {
    if (s === e) return lists[s];
    if (s > e) return null;
    let mid = (s + e) >> 1;
    return mergetwo(merge(lists, s, mid), merge(lists, mid + 1, e));
}

function mergetwo(l1, l2) {
    let head = new ListNode(-1);
    let point = head;
    while (l1 !== null && l2 != null) {
        if (l1.val < l2.val) {
            point.next = l1;
            l1 = l1.next;
        } else {
            point.next = l2;
            l2 = l2.next;
        }
        point = point.next;
    }
    point.next = l1 === null ? l2 : l1;
    return head.next;
}