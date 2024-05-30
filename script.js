//linked list factory
const makeLinkedList = () => {
    
    let HEAD = null;
    let length = 0;

    const append = (val) => {
        const newNode = makeNode(val);
        length++;
        if (HEAD === null) {
            return HEAD = newNode;
        } else {
            let pointer = HEAD;
            while (pointer.nextNode !== null) {
                pointer = pointer.nextNode
            }
            pointer.nextNode = newNode;
        };
    };

    const prepend = (val) => {
        const newNode = makeNode(val);
        length++;
        if (HEAD === null) {
            return HEAD = newNode;
        } else {
            newNode.nextNode = HEAD;
            HEAD = newNode;
        };
    };

    const size = () => {
        return length;
    };

    const head = () => {
        return HEAD;
    };

    const tail = () => {
        let pointer = HEAD;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode
        }
        return pointer;
    };

    const atIndex = (index) => {
        let pointer = HEAD;
        if (index === 0) {
            return HEAD;
        } else if (index > length - 1) {
            return null;
        } else {
            for (let i = 0; i < index; i++) {
                pointer = pointer.nextNode;
            };
            return pointer.value;
        };
    };

    const pop = () => {
        let pointer = HEAD;
        while (pointer.nextNode.nextNode !== null) {
            pointer = pointer.nextNode;
        }
        pointer.nextNode = null;
        length--;
    };

    const containsValue = (val) => {
        //returns true if the passed in value is in the list and otherwise returns false.
        let pointer = HEAD;
        while (pointer.nextNode !== null && pointer.value !== val){
            pointer = pointer.nextNode
        }
        if (pointer.nextNode === null && pointer.value !== val) {
            return false;
        } else {
            return true;
        };
    };

    const findValue = (val) => {
        //returns the index of the node containing value, or null if not found.
        let pointer = HEAD;
        let counter = 0;
        while (pointer.nextNode !== null && pointer.value !== val){
            pointer = pointer.nextNode
            counter ++;
        }
        if (pointer.nextNode === null && pointer.value !== val) {
            return null;
        } else {
            return counter;
        };
    };

    const toString = () => {
        //represents your LinkedList objects as strings, so you can print them out and preview them in the console.
        //The format should be: ( value ) -> ( value ) -> ( value ) -> null
        let string = "( " + HEAD.value;
        let pointer = HEAD;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode
            string = string.concat(" ) -> ( ", pointer.value);
        }
        string = string + " ) -> null";
        return string;
    };

    const insertAt = (val, index) => {
        //inserts a new node with the provided value at the given index.
        //pass pointer through linked list to input index value
        if (index > length - 1) {
            return null
        } else {
            for (let i = 0; i < index - 1; i++) {
                pointer = pointer.nextNode;
            };
        };
        //designate what the next node is in a variable
        //make a new node that the node before that index value points to
        //newNode.next node = designated variable of what the previous node used to point to
        if (index === 0) {
            const newNode = makeNode(val);
            newNode.nextNode = HEAD;
            HEAD = newNode;
            length++;
        } else {
            let newNext = pointer.nextNode;
            const newNode = makeNode(val);
            newNode.nextNode = newNext;
            pointer.nextNode = newNode;
            length++;
        };
    };

    const removetAt = (index) => {
        //removes the node at the given index.
        //pass pointer through linked list to input index value
        let pointer = HEAD;
        if (index === 0) {
            HEAD = HEAD.nextNode;
        } else if (index > length - 1) {
            return null;
        } else {
            for (let i = 0; i < index - 1; i++) {
                pointer = pointer.nextNode;
            };
        };
        pointer.nextNode = pointer.nextNode.nextNode;
        length--;
    };

    return {append, prepend, size, head, tail, atIndex, pop, containsValue, findValue, toString, insertAt, removetAt}
}

//Node factory
const makeNode = (input) => {
    const value = input || null;
    let nextNode = null
    return {value, nextNode};
};