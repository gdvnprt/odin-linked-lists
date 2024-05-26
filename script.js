//linked list factory
const makeLinkedList = () => {
    let list = [];
    const append = (a) => {
        list.push(makeNode(a));
    };
    const prepend = (b) => {
        list.unshift(makeNode(b));
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
    containsValue = (val) => {
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
    };
    const removetAt = (i) => {
        //removes the node at the given index.
    };

    return {list, append, prepend, size, head, tail, atIndex, pop, containsValue, findValue, toString}
}

//Node factory
const makeNode = (v) => {
    const value = v;
    const nextNode = () => {
     //links to following node, defaults to null   
    };
    return {value, nextNode};
};