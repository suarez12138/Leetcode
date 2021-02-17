/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let h = new ListNode(-1);
    h.next = head;
    let pre = h;

    while (head) {
        let tail = pre;
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (!tail) return h.next;
        }
        let nex = tail.next;
        [head, tail] = reverse(head, tail);
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }
    return h.next;
};

//tail head是固定的两个节点
function reverse(head, tail) {
    let tmp = tail.next;
    let p = head;
    // 目的其实是将p放到tail和tmp间
    while (tmp != tail) {   //这里非p!=tail是因为最后tail也需要更新它的next
        let mark = p.next;  //mark是准备下一个p
        p.next = tmp;
        tmp = p;    //tmp往前移动
        p = mark;
    }
    return [tail, head];
}