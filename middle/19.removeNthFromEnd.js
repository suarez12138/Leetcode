/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
    let ans = head, point = head;
    let arr = [];
    for (let i = 0; i < n + 1; i++) {
        arr.push(point);
        if (point==null){
            return arr[1];
        }
        point = point.next;
    }
    while (point != null) {
        arr.shift();
        arr.push(point);
        point=point.next;
    }
    arr[0].next = arr[1].next;
    return head;
};


// let h4=new ListNode(4,null)
// let h3=new ListNode(3,h4)
let h2=new ListNode(2,null)
let h1=new ListNode(1,h2)


console.log(removeNthFromEnd(h1,1))