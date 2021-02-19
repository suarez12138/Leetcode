/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let prehead=new ListNode(0);
    let mark=new ListNode(0);
    if(!head)return null;
    prehead.next=head;
    mark.next=head;

    for(let i=0;i<m-1;i++){
        mark=mark.next;
        head=head.next;
    }

    for(let i=m;i<n;i++){
        let tmp=mark.next;
        mark.next=head.next;
        head.next=head.next.next;
        mark.next.next=tmp;
    }
    return m===1?mark.next:prehead.next;
};