//linked list factory
const makeLinkedList = () => {
    let list = [];
    const append = (a) => {
        list.push(makeNode(a));
    };
    const prepend = (b) => {
        list.unshift(makeNode(b));
        //make sure next points to proper node
    };
    const size = () => {
        return list.length;
    };
    const head = () => {
        return list[0];
    };
    const tail = () => {
        return list[list.length - 1];
    };
    const atIndex = (i) => {
        return list[i];
    };
    const pop = () => {
        list.pop;
    };
    const containsValue = (val) => {
        //returns true if the passed in value is in the list and otherwise returns false.
        for(let i = 0; i < list.length; i++) {
            if (val == list[i].value) {
                return true;
            } else if (i !== list[list.length-1].value) {
                return false;
            };
        };
    };
    const findValue = (val) => {
        //returns the index of the node containing value, or null if not found.
        for(let i = 0; i < list.length; i++) {
            if (val == list[i].value) {
                return i;
            } else if (i !== list[list.length-1].value) {
                return null;
            };
        };
    };
    const toString = () => {
        //represents your LinkedList objects as strings, so you can print them out and preview them in the console.
        //The format should be: ( value ) -> ( value ) -> ( value ) -> null
    };
    const insertAt = (val, i) => {
        //inserts a new node with the provided value at the given index.
        list.splice(i, 0, val);
        //adjust how the items point to each other
    };
    const removetAt = (i) => {
        //removes the node at the given index.
        list.splice(i, 1);
        //adjust how the items point to each other
    };

    return {list, append, prepend, size, head, tail, atIndex, pop, containsValue, findValue, toString, insertAt, removetAt}
}

//Node factory
const makeNode = (v) => {
    const value = v;
    let nextNode = null
    return {value, nextNode};
};