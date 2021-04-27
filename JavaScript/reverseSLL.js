// Reverse the node sequence. Given an SList object, the .head property should point to the previously-last node, and the rest of the nodes should follow similarly from back to front.


class SLNode {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}


class SLL {
    constructor(){
        this.head = null;
    }

    addToBack(val){
        var node = new SLNode(val);
        if(!this.head){
            this.head = node;
            return this;
        }

        var runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = node;
        return this;

    }

    /// Write Reverse List here
}