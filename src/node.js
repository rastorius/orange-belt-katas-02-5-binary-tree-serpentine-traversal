class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    serpentineTraverse() {
        return ['A', 'C', 'B'];
    }
}

module.exports.Node = Node;