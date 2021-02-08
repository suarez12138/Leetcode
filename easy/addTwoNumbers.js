function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    return this
}

var addTwoNumbers = function (l1, l2) {
    let n1;
    if (l1.val === 0) {
        n1 = 0;
    } else {
        let count = 1;
        n1 = l1.val;
        while (l1.next !== null) {
            count *= 10;
            l1 = l1.next;
            n1 += count * l1.val;
        }
    }
    let n2;
    if (l2.val === 0) {
        n2 = 0;
    } else {
        let count = 1;
        n2 = l2.val;
        while (l2.next !== null) {
            count *= 10;
            l2 = l2.next;
            n2 += count * l2.val;
        }
    }
    return n1 + n2;
};

var l11 = new ListNode(3, null)
var l1 = new ListNode(7, l11)
var l2 = new ListNode(5, null)
console.log(addTwoNumbers(l1, l2))