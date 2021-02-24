/**
 * Initialize your data structure here.
 */
let TrieNode = function () {
    this.next = {};
    this.isEnd = false;
};
var WordDictionary = function () {
    this.root = new TrieNode(null);
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (const c of word) {
        if (!node.next[c])
            node.next[c] = new TrieNode(null);
        node = node.next[c];
    }
    node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    return this.searchRoot(this.root, word);
};

WordDictionary.prototype.searchRoot = function (root, word) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
        if (node.next[word[i]]) node = node.next[word[i]];
        else if (word[i] == '.') {
            for (son in node.next) {
                if (this.searchRoot(node.next[son], word.substring(i + 1))) return true;
            }
            return false;
        } else return false;
    }
    return !!node.isEnd;
}


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
wordDictionary.search("bad"); // return True
console.log(wordDictionary.search(".ad")); // return True
wordDictionary.search("b.."); // return True
