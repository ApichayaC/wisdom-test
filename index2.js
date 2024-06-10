class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function reverseGroup(head, k) {
  if (!head || k === 1) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let prevGroupEnd = dummy;

  while (true) {
    let start = prevGroupEnd.next;
    let end = start;
    for (let i = 1; i < k && end; i++) {
      end = end.next;
    }
    if (!end) break;

    let nextGroupStart = end.next;
    end.next = null;

    prevGroupEnd.next = reverseLinkedList(start);
    start.next = nextGroupStart;

    prevGroupEnd = start;
  }

  return dummy.next;
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function arrayToLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;

  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

function linkedListToArray(node) {
  let result = [];

  while (node) {
    result.push(node.value);
    node = node.next;
  }

  return result;
}

let head = arrayToLinkedList([1, 2, 3, 4, 5]);
let k = 3;
let newHead = reverseGroup(head, k);
console.log(linkedListToArray(newHead));
