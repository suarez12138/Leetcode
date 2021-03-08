/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast=head,slow=head;
    while(fast&&fast.next){
        fast=fast.next.next;
        slow=slow.next;
        if(fast==slow){
            while(head!=slow){
                head=head.next;
                slow=slow.next;
            }
            return slow;
        }
    }
    return null;
};