function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    let pA = headA;
    let pB = headB;
    while (pA != pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};


// let nodea=ListNode(1);
// let nodeb=ListNode(2);
// console.log(getIntersectionNode(nodea,nodeb))