function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseKGroup = function (head, k) {
    let prehead = new ListNode();
    prehead.next = head;
    let point = head, h = prehead;
    label:
        while (true) {
            let test = point;
            for (let i = 0; i < k; i++) {
                if (test) {
                    test = test.next;
                } else break label;
            }
            for (let i = 0; i < k - 1; i++) {
                let tmp = point.next.next;
                point.next.next = h.next;
                h.next = point.next;
                point.next = tmp;
            }
            h = point;
            point = point.next;

        }
    return prehead.next;
}

// 1 2 3 4
// 2 1 3 4
// 3 2 1 4
// 4 3 2 1


let h5 = new ListNode(5, null)
let h4 = new ListNode(4, h5)
let h3 = new ListNode(3, h4)
let h2 = new ListNode(2, h3)
let h1 = new ListNode(1, h2)

console.log(reverseKGroup(h1, 2))