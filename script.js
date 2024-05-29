//linked list factory
const makeLinkedList = () => {
    const append = (a) => {
        
        
    };
    const prepend = (b) => {
        let newNode = makeNode();
        
    };
    const size = () => {
        
    };
    const head = () => {
        
    };
    const tail = () => {
        
    };
    const atIndex = (i) => {
        
    };
    const pop = () => {
        
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
const makeNode = () => {
    const value = null;
    let nextNode = null
    return {value, nextNode};
};