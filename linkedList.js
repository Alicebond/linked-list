/* 
class Node {
  constructor(data) {
    this.data = data;
  }
  next = this.next;
}

class LinkedList {
  constructor(first) {
    this.first = first;
  }
}
*/

function Node(value = null) {
  let next = null;
  return {
    value,
    next,
  };
}

function LinkedList(first) {
  const append = (value) => {
    let currentNode = first;
    while (currentNode.value) {
      currentNode = currentNode.next;
    }
    currentNode = Node(value);
  };

  const prepend = (value) => {
    let newHead = Node(value);
    newHead.next = first;
  };

  const size = () => {
    let size = 0,
      currentNode = first;
    while (currentNode.value) {
      currentNode = currentNode.next;
      size += 1;
      if (!currentNode) return size;
    }
  };

  const head = () => first.value;

  const tail = () => {
    let currentNode = first;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  };

  const at = (index) => {
    let currentIndex = 0;
    let currentNode = first;
    while (currentNode.value) {
      if (currentIndex === index) return currentNode.value;
      currentIndex += 1;
      currentNode = currentNode.next;
      if (!currentNode) return;
    }
  };
  return { first, append, prepend, size, head, tail, at };
}

const node1 = Node("once");
const node2 = Node("upon");
const node3 = Node("a");
const node4 = Node("time");
node1.next = node2;
node2.next = node3;
node3.next = node4;
const linkedList = LinkedList(node1);
