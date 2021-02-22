/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    //需要一个map找对应关系 需要一个优先队列维护最早使用
    this.hash = {};
    this.count = 0;
    this.dummyhead = new ListNode();
    this.dummytail = new ListNode();
    this.dummyhead.next = this.dummytail;
    this.dummytail.prev = this.dummyhead;
};

class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let node = this.hash[key];
    if (!node) return -1;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.addHead(node);
    return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = this.hash[key];
    if (!node) {
        if (this.count == this.capacity) {
            let tail=this.dummytail.prev;
            tail.prev.next=tail.next;
            tail.next.prev=tail.prev;
            delete this.hash[tail.key];
            this.count--;
        }
        let newnode=new ListNode(key,value);
        this.hash[key]=newnode;
        this.addHead(newnode);
        this.count++;
    } else {
        node.value = value;
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.addHead(node);
    }
};

LRUCache.prototype.addHead = function (node){
    node.next = this.dummyhead.next;
    this.dummyhead.next.prev=node;
    this.dummyhead.next = node;
    node.prev = this.dummyhead;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4

