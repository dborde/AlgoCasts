// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }
    // let node = this.head;

    // while (node.next) {
    //   node = node.next;
    // }
    // return node;

    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (!this.head) {
    //   return;
    // }

    // this.head = this.head.next;

    this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) {
    //   return;
    // }

    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let previous = this.head;
    // let node = this.head.next;
    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }
    // previous.next = null;

    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    // const last = this.getLast();

    // if (last) {
    //   // There are some existing nodes in our chain
    //   last.next = new Node(data);
    // } else {
    //   // The chain is empty!
    //   this.head = new Node(data);
    // }

    this.insertAt(data, this.size());
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    // doesnt crash empty list
    if (!this.head) {
      return;
    }

    if (index === 0) {
      // deletes the first node
      this.head = this.head.next;
      return;
    }

    let previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      // doesnt crash on an index out of bounds
      return;
    }
    // deletes the node at the given index
    // works on the last node
    previous.next = previous.next.next;
  }

  // insertAt(data, index) {
  //   // inserts a new node with data at the 0 index when the list is empty
  //   // inserts a new node with data at the 0 index when the list has elements
  //   if (!this.head || index === 0) {
  //     return (this.head = new Node(data, this.head));
  //   }

  //   let previous = this.getAt(index - 1);

  //   if (!previous) {
  //     // insert a new node when index is out of bound
  //     return this.insertLast(data);
  //   }

  //   previous.next = new Node(data, previous.next);
  // }

  // // steven grider insertAt
  // insertAt(data, index) {
  //   if (!this.head) {
  //     this.head = new Node(data);
  //     return;
  //   }

  //   if (index === 0) {
  //     this.head = new Node(data, this.head);
  //     return;
  //   }

  //   const previous = this.getAt(index - 1) || this.getLast();
  //   const node = new Node(data, previous.next);
  //   previous.next = node;
  // }

  // best insertAt
  insertAt(data, index) {
    if (!this.head || index === 0) {
      return (this.head = new Node(data, this.head));
    }

    const previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
