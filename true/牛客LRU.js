/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
function LRU( operators ,  k ) {
    // write code here
    let hash = {};
    let count = 0;
    let dummyhead = new ListNode();
    let dummytail = new ListNode();
    dummyhead.next = dummytail;
    dummytail.prev = dummyhead;
    let out=[];
    for(let i=0;i<operators.length;i++){
        if(operators[i][0]===1){
            if(hash[operators[i][1]]){
                hash[operators[i][1]].value=operators[i][2];
                hash[operators[i][1]].prev.next=hash[operators[i][1]].next;
                hash[operators[i][1]].next.prev=hash[operators[i][1]].prev;

                dummyhead.next.prev=hash[operators[i][1]];
                hash[operators[i][1]].next=dummyhead.next;
                dummyhead.next=hash[operators[i][1]];
                hash[operators[i][1]].prev=dummyhead;
            }else{
                if(count===k){
                    delete hash[dummytail.prev.key];
                    dummytail.prev=dummytail.prev.prev;
                    dummytail.prev.next=dummytail;
                    count--;
                }
                let node =new ListNode(operators[i][1],operators[i][2]);
                dummyhead.next.prev=node;
                node.next=dummyhead.next;
                dummyhead.next=node;
                node.prev=dummyhead;
                hash[node.key]=node;
                count++;
            }
        }else{
            if(hash[operators[i][1]]){
                out.push(hash[operators[i][1]].value);

                hash[operators[i][1]].prev.next=hash[operators[i][1]].next;
                hash[operators[i][1]].next.prev=hash[operators[i][1]].prev;
                dummyhead.next.prev=hash[operators[i][1]];
                hash[operators[i][1]].next=dummyhead.next;
                dummyhead.next=hash[operators[i][1]];
                hash[operators[i][1]].prev=dummyhead;
            }else{
                out.push(-1);
            }
        }
    }
    return out;

}

console.log(LRU([[1,1,1],[1,2,2],[1,3,2],[2,1],[1,4,4],[2,2]],3))
module.exports = {
    LRU : LRU
};