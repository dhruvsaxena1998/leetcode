// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ?? null;
  }
}

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let str1 = "";
  let str2 = "";

  while (l1 != null) {
    str1 += l1.val;
    l1 = l1.next;
  }

  while (l2 != null) {
    str2 += l2.val;
    l2 = l2.next;
  }

  const reverse = (str) => {
    return str.split("").reverse().join("");
  };
  const big1 = BigInt(reverse(str1));
  const big2 = BigInt(reverse(str2));

  const sum = big1 + big2;
  const reversed = reverse(String(sum)).split("");

  let head = new ListNode(+reversed[0]);
  let prev = head;
  for (let i = 1; i < reversed.length; i++) {
    let node = new ListNode(+reversed[i]);
    prev.next = node;
    prev = node;
  }

  return head;
};

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
const addTwoNumbersV2 = (l1, l2) => {
  let t1 = l1;
  let t2 = l2;
  let dummy = new ListNode(null);
  let current = dummy;

  let carry = 0;
  while (t1 != null || t2 != null) {
    sum = carry;
    if (t1) sum += t1.val;
    if (t2) sum += t2.val;

    let n = new ListNode(parseInt(sum % 10));
    carry = parseInt(sum / 10);

    current.next = n;
    current = current.next;

    if (t1) t1 = t1.next;
    if (t2) t2 = t2.next;
  }
  if (carry) {
    const c = new ListNode(carry);
    current.next = c;
  }

  return dummy.next;
};

/**
 *
 * @param {number[]} arr
 * @returns {ListNode}
 */
const convertToList = (arr) => {
  let head = new ListNode(arr[0]);
  let prev = head;

  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    prev.next = node;
    prev = node;
  }

  return head;
};

/**
 *
 * @param {ListNode} head
 * @returns {string}
 */
const printList = (head) => {
  let c = head;
  let r = [];
  while (c != null) {
    r.push(c.val);
    c = c.next;
  }

  return r.join("->");
};

console.log(
  printList(addTwoNumbersV2(convertToList([2, 4, 3]), convertToList([5, 6, 4])))
);

console.log(printList(addTwoNumbers(convertToList([0]), convertToList([0]))));

console.log(
  printList(
    addTwoNumbersV2(
      convertToList([9, 9, 9, 9, 9, 9, 9]),
      convertToList([9, 9, 9, 9])
    )
  )
);

console.log(
  printList(
    addTwoNumbersV2(
      convertToList([
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ]),
      convertToList([5, 6, 4])
    )
  )
);
