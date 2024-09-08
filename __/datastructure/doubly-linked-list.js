class LNode {
  /**
   *
   * @param {unknown} value
   * @param {LNode} prev
   * @param {LNode} next
   */
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

const convertArrayToDoublyLinkedList = (array) => {
  const head = new LNode(array[0]); // first element to be the head

  let prev = head;

  for (let i = 1; i < array.length; i++) {
    const node = new LNode(array[i]);

    node.prev = prev;
    prev.next = node;
    prev = node;
  }

  return head;
};

const removeHead = (head) => {
  if (head == null || head.next == null) return null;

  let temp = head;

  head = head.next;

  head.prev = null;
  temp.next = null;

  return head;
};

const removeTail = (head) => {
  if (head == null || head.next == null) return null;

  let tail = head;

  while (tail.next != null) {
    tail = tail.next;
  }

  let prev = tail.prev;
  prev.next = null;
  tail.prev = null;

  return head;
};

const removeKthElement = (head, k) => {
  let current = head;
  let count = 0;
  while (current != null) {
    count++;
    if (count == k) break;

    current = current.next;
  }

  let prev = current.prev;
  let next = current.next;

  if (prev == null && next == null) {
    return null;
  } else if (prev == null) {
    return removeHead(head);
  } else if (next == null) {
    return removeTail(head);
  } else {
    prev.next = next;
    next.prev = prev;

    current.prev = null;
    current.next = null;

    return head;
  }
};

const removeNode = (node) => {
  let prev = node.prev;
  let next = node.next;

  if (next == null) {
    prev.next = null;
    node.prev = null;

    return;
  }

  prev.next = next;
  next.prev = prev;

  node.prev = null;
  node.next = null;

  return;
};

const insertBeforeHead = (head, value) => {
  const newHead = new LNode(value, null, head);
  head.prev = newHead;
  return newHead;
};

const insertBeforeTail = (head, value) => {
  if (head.next == null) {
    return insertBeforeHead(head, value);
  }

  let tail = head;
  while (tail.next != null) {
    tail = tail.next;
  }

  let prev = tail.prev;

  const node = new LNode(value, prev, tail);

  prev.next = node;
  tail.prev = node;

  return head;
};

const insertBeforeKthElement = (head, k, value) => {
  let temp = head;
  let count = 0;

  if (k == 1) return insertBeforeHead(head, value);

  while (temp != null) {
    count++;

    if (count == k) break;
    temp = temp.next;
  }

  let prev = temp.prev;

  if (prev == null && temp == null) {
    return null;
  } else {
    const node = new LNode(value, prev, temp);

    prev.next = node;
    temp.prev = node;

    return head;
  }
};

const insertBeforeNode = (node, value) => {
  const prev = node.prev;

  const newNode = new LNode(value, prev, node);

  prev.next = newNode;
  node.prev = newNode;
};

const reverseDataOfTheList = (head) => {
  const stack = [];
  let temp = head;
  while (temp != null) {
    stack.push(temp.value);
    temp = temp.next;
  }
  temp = head;
  while (temp != null) {
    temp.value = stack.pop();
    temp = temp.next;
  }

  return head;
};

const reverseLinksOfTheList = (head) => {
  if (head == null || head.next == null) {
    return head;
  }

  let prev = null;
  let current = head;

  while (current != null) {
    prev = current.prev;
    current.prev = current.next;
    current.next = prev;

    current = current.prev;
  }

  return prev.prev;
};

const print = (head) => {
  let current = head;
  let result = [];

  while (current != null) {
    result.push({
      prev: current.prev?.value ?? "X",
      value: current.value,
      next: current.next?.value ?? "X",
    });
    current = current.next;
  }

  // const str = result.map(
  //   (item) => `[${item.prev}, ${item.value}, ${item.next}]`
  // );
  // console.log(str.join(" => "));

  result.forEach((item) => {
    console.log(
      `(prev: ${item.prev === null ? "null" : item.prev})
      <- [${item.value}] ->
            (next: ${item.next === null ? "null" : item.next})`
    );
  });
};

const array = [1, 5, 0, 2];
// const array = [1];
let head = convertArrayToDoublyLinkedList(array);
// print(head);
// head = removeHead(head);
// head = removeTail(head);

// head = removeKthElement(head, 1) // remove 1st element aka head
// head = removeKthElement(head, 10) // remove 10th element aka tail
// head = removeKthElement(head, 4)
// removeNode(head.next.next.next.next.next);

// head = addBeforeHead(head, 10);
// head = insertBeforeTail(head, 15);
// head = insertBeforeKthElement(head, 1, 99);

// insertBeforeNode(head.next.next, 99);
// head = reverseDataOfTheList(head);
// head = reverseLinksOfTheList(head);
print(head);
