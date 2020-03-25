import ListNode from "./ListNode";
export default class LinkedList {
  constructor() {
    this.head = null;
    this.listLength = 0;
  }

  add(value) {
    let node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
      this.listLength = 1;
      return node;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.listLength++;

    return node;
  }

  getHead() {
    return this.head;
  }

  getLength() {
    return this.listLength;
  }

  getNodeAt(pos) {
    // validate pos
    if (pos < 1 || pos > this.listLength) {
      return;
    }

    if (pos === 1) {
      return this.head;
    }

    let currentPos = 1;
    let currentNode = this.head;
    while (currentPos < pos) {
      currentNode = currentNode.next;
      currentPos++;
    }

    return currentNode;
  }

  delete() { }

  print() {
    let current = this.head;
    console.log("NODE = " + current.value);
    while (current.next) {
      current = current.next;
      console.log("NODE = " + current.value);
    }
  }

  static merge(l1, l2) {
    console.log(l1);
    console.log(l2);
    let newList = new LinkedList();

    let index1 = 1;
    let index2 = 1;
    const totalNodes = l1.getLength() + l2.getLength();

    while (newList.getLength() < totalNodes) {
      // TODO: Check out of bounds
      let value = null,
        n1 = null,
        n2 = null,
        v1 = null,
        v2 = null;

      if (index1 <= l1.getLength()) {
        n1 = l1.getNodeAt(index1);
        if (n1) v1 = n1.value;
      }

      if (index2 <= l2.getLength()) {
        n2 = l2.getNodeAt(index2);
        if (n2) v2 = n2.value;
      }

      if (!v1 && !v2) break;

      if (!v1 && v2) {
        value = v2;
        index2++;
      } else if (!v2 && v1) {
        value = v1;
        index1++;
      } else {
        if (v1 <= v2) {
          value = v1;
          index1++;
        } else {
          value = v2;
          index2++;
        }
      }

      newList.add(value);
    }
    return newList;
  }
}
