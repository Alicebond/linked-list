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
  let currentNode = first, currentIndex = 0;
  
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
    let currentNode = first;
    let size = 0;
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
    let currentNode = first;
    let currentIndex = 0;
    while (currentNode.value) {
      if (currentIndex === index) return currentNode.value;
      currentIndex += 1;
      currentNode = currentNode.next;
      if (!currentNode) return;
    }
  };
  
  const pop = () => {
    let length = size(); // 4
    let currentNode = first;
    let currentIndex = 0;
    // while loop find out the penultimate node; Chane the penultimate.next to
    // null will delete the last node; 
    // Don't find the last node, change last node to null will not effect the
    // penultimate.next;
    while (currentIndex < length - 2) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    currentNode.next = null;
  }

  const contains = (value) => {
    let currentNode = first;
    while (currentNode.value) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
      if (!currentNode) return false;
    }
  }

  const find = (value) => {
    let currentNode = first;
    while (currentNode.value) {
      if (currentNode.value === value) return currentIndex;
      currentIndex += 1;
      currentNode = currentNode.next;
      if (!currentNode) return null;
    }
  }

  const toString = () => {
    let str = '';
    let currentNode = first;
    while (currentNode.value) {
      str += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
      if (!currentNode) break;
    }
    str += 'null';
    return str;
  }
  
  const insertAt = (value, index) => {
    let currentNode = first;
    let currentIndex = 0;
    if (index === 0) {
      prepend(value);
      return;
    };
    let newNode = Node(value);
    while(currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    let temp = currentNode.next;
    currentNode.next = newNode;
    newNode.next = temp;
  }

  const removeAt = (index) => {
    let currentNode = first;
    let currentIndex = 0;
    while(currentIndex < index - 2) {
      currentNode = currentNode.next;
      currentIndex += 1;
    }
    currentNode.next = currentNode.next.next;
  }

  return { first, append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt };
}

const node1 = Node("once");
const node2 = Node("upon");
const node3 = Node("a");
const node4 = Node("time");
node1.next = node2;
node2.next = node3;
node3.next = node4;
const linkedList = LinkedList(node1);
