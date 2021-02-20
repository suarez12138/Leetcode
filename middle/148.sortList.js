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


var sortList = function (head) {
    if (!head) return null;
    let point = head, count = 0;
    while (point) {
        count++;
        point = point.next;
    }
    let prehead = new ListNode(-1, head);
    for (let sub = 1; sub < count; sub <<= 1) {
        let pre = prehead, cur = prehead.next;
        while (cur) {
            let h1 = cur;
            for (let i = 1; i < sub && cur.next; i++) cur = cur.next;
            let h2 = cur.next;
            cur.next = null;
            cur = h2;
            for (let i = 1; i < sub && cur && cur.next; i++) cur = cur.next;
            let tmp=null;
            if (cur){
                tmp=cur.next;
                cur.next=null;
            }
            const merged=mergeTwoLists(h1,h2);
            pre.next=merged;
            while (pre.next ) {
                pre = pre.next;
            }
            cur = tmp;
        }
    }
    return prehead.next;
};


//
// var sortList = function(head) {
//     let prehead=new ListNode(-1);
//     prehead.next=head;
//     let change=true;
//     while(change){
//         change=false;
//         head=prehead;
//         while(head.next&&head.next.next){
//             while(head.next.val>head.next.next.val){
//                 change=true;
//                 let tmp=head.next.next.next;
//                 let tmp2=head.next;
//                 head.next.next.next=head.next;
//                 head.next=head.next.next;
//                 head.next.next=tmp2;
//                 tmp2.next=tmp;
//             }
//             head=head.next;
//         }
//     }
//     return prehead.next;
// };


let h1 = new ListNode(3, null)
let h2 = new ListNode(1, h1)
let h3 = new ListNode(2, h2)
let h4 = new ListNode(4, h3)
// let h5 = new ListNode(4, h4)
// let h6 = new ListNode(1, h5)


console.log(sortList(h4))