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

    const prepend = (b) => {
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
        return pointer.nextNode;
    };

    const atIndex = (index) => {
        let pointer = HEAD;
        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode;
        };
        return pointer.nextNode;
    };

    const pop = () => {
        let pointer = HEAD;
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode
        }
        pointer.nextNode = null;
    };

    const containsValue = (val) => {
        //returns true if the passed in value is in the list and otherwise returns false.
        
    };

    const findValue = (val) => {
        //returns the index of the node containing value, or null if not found.
        
    };

    const toString = () => {
        //represents your LinkedList objects as strings, so you can print them out and preview them in the console.
        //The format should be: ( value ) -> ( value ) -> ( value ) -> null
    };

    const insertAt = (val, i) => {
        //inserts a new node with the provided value at the given index.
        //adjust how the items point to each other
    };

    const removetAt = (i) => {
        //removes the node at the given index.
        //adjust how the items point to each other
    };

    return {append, prepend, size, head, tail, atIndex, pop, containsValue, findValue, toString, insertAt, removetAt}
}

//Node factory
const makeNode = (input) => {
    const value = input || null;
    let nextNode = null
    return {value, nextNode};
};