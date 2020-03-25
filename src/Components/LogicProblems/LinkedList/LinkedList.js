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

  delete() {}

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
    let i = 0;
    while (newList.getLength() < totalNodes && i < 10) {
      let value = null;
      // TODO: Check out of bounds
      if (!l1.getNodeAt(index1) || !l2.getNodeAt(index2)) {
        break;
      }
      if (l1.getNodeAt(index1).value <= l2.getNodeAt(index2).value) {
        value = l1.getNodeAt(index1).value;
        index1++;
      } else {
        value = l2.getNodeAt(index2).value;
        index2++;
      }
      newList.add(value);
      i++;
    }
    return newList;
  }
}
