class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else if (!this.head) {
      return undefined;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return this;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return undefined;

    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

  getByValue(value) {
    let currentNode = this.head;
    let i = 0;
    while (value !== currentNode.value) {
      currentNode = currentNode.next;
      i++;
    }
    return { currentNode, i };
  }

  set(index, value) {
    const currentNode = this.getByIndex(index);
    currentNode.value = value;
  }

  insertByIndex(index, value) {
    let newNode = new Node(value);
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }
    let currentNode = this.getByIndex(index - 1);
    if (!currentNode) {
      return undefined;
    }
    newNode.next = currentNode.next;
    if (index === this.length) {
      currentNode.next = null;
    } else {
      currentNode.next = newNode;
    }
    this.length++;
    return this;
  }

  removeAtIndex(index) {
    if (index === 0) return this.shift();
    if (index === this.length) this.pop();

    const idx_plusOne = this.getByIndex(index + 1);
    const idx_minusOne = this.getByIndex(index - 1);

    idx_minusOne.next = idx_plusOne;
    this.length--;
    return this;
  }

  removeByValue(val) {
    let current = this.head;
    let prev = null;

    while (current !== null) {
      if (current.value === val) {
        current = current.next;
      } else {
        prev = current;
        current = current.next;
      }
    }

    return this;
  }

  print() {
    let result = [];

    let currenNode = this.head;
    while (currenNode !== null) {
      result.push(currenNode.value);
      currenNode = currenNode.next;
    }

    console.log(result.join(" -> "));
  }

  reverse() {
    let temp = this.head;
    let prev = null;
    let front;

    while (temp !== null) {
      front = temp.next;
      temp.next = prev;
      prev = temp;
      temp = front;
    }

    this.head = prev;

    return this;
  }
}

const list = new LinkedList(7);

list.push(7).push(7).push(7).push(7);
// list.push(2).push(6).push(3).push(4).push(5).push(6);

// list.push(4);
// list.push(5);
// list.push(6);
// list.pop();
// list.unshift(7);
// list.unshift(2);
// list.shift();

// list.set(2, 55);
// list.insertByIndex(2, 9);

// list.removeAtIndex(0);
list.removeByValue(7);
list.print();
// list.reverse();
// list.print();

// list.pop();
// list.print();

// // 7, 1, 4, 5
// console.log(list.getByIndex(2));
// console.log(list.getByValue(4));
