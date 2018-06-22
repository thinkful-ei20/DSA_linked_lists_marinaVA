class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(value) {
    this.head = new _Node(value, this.head)
  }

  insertLast(value) {
    if (!this.head) {
      this.insertFirst(value);
    } else {
      // store the first node as a current node
      let currNode = this.head;
      // iterate List until we find the last node
      while(currNode.next !== null) {
        // store next node on the List as current node
        currNode = currNode.next;
      }
      currNode.next = new _Node(value, null);

    }
  }

  insert(value) {
    if (!this.head) {
      this.insertFirst(value)
    } else {
      this.head = new _Node(value, this.head)
    }

  }
  find(value) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    while (currNode.value !== value) {
      if (!currNode.next) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(value) {
    // check if the List is empty
    if (!this.head) {
      console.log('This list is empty');
      return null;
    }

    // if value matches first node on the List, update head
    // with next node in the chain
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    // a
    let prevNode = this.head;
    let currNode = this.head.next;

    // iterate until we find matching value or reach end of the List
    while (currNode && currNode.value !== value) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    // display message if we did not find matching node
    if (currNode === null) {
      console.log('Unable to remove: item is not found');
      return;
    }
    // update pointer to exclude node containing matching value
    prevNode.next = currNode.next;
  }

  // insert a new node before a given node containing a key
  insertBefore(before, item) {
    // if List is empty, display message and return
    if (!this.head) {
      console.log(`Unable to insert ${item} after ${before}: list is empty`);
      return;
    }

    // start at the head
    let currNode = this.head;
    let prevNode = this.head;

    // Run insertFirst() if the first node contains matching item
    if (currNode.value === before) {
      this.insertFirst(item);
      return;
    }

    // traverse the List until we find node containing 'before' key
    while(currNode) {
      // update links to insert new node before currNode
      if (currNode.value === before) {
        prevNode.next = new _Node(item, currNode);
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }

    // Display message if the List does not have node containing 'before' key
    if (!currNode) {
      console.log(`Unable to insert ${item} before ${before}: list does not contain ${before}`)
    }
  }

  // insert a new node before a given node containing a key
  insertAfter(after, item) {
    // if List is empty, display message and return
    if (!this.head) {
      console.log(`Unable to insert ${item} after ${after}: list is empty`);
      return;
    }

    // start at the head
    let currNode = this.head;

    // Run insertLast() if the first node contains matching item
    if (this.head.value === after) {
      this.insertLast(item);
      return;
    }

    // iterate until we reach the end of the List
    // or find matching value
    while (currNode && currNode.value !== after) {
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item is not found');
      return;
    }

    if (currNode.value === after) {
      currNode.next = new _Node(item, currNode.next);
    }
  }

  // insert new node at specified position
  insertAt(ind, value) {
    // check if index is a valid number
    if (ind < 0) {
      console.log('Enter valid index');
      return;
    }

    // insert as first item on the List
    if (ind === 0) {
      this.insert(value);
      return;
    }

    let counter = 0;

    let prevNode = this.head.next;
    let currNode = this.head.next;

    // traverse List until we find Node located at 'ind' position
    while (currNode) {
      counter++;
      // update links to insert new item before currNode
      if (counter === ind) {
        prevNode.next = new _Node(value, currNode);
        currNode = currNode.next;
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
    }

    // Display message if index is greater that the length of the List
    if (!currNode) {
      console.log(`Unable to insert at ${ind} position: index is not found`);
    }
  }
}


// display values of the List
const display = list => {
  // if List is empty, display message and return
  if (!list.head) {
    console.log(`Unable to display list items: list is empty`);
    return;
  }

  // start at the head
  let currNode = list.head;

  // traverse list
  while (currNode) {
    console.log(`List item: ${currNode.value}`);
    currNode = currNode.next;
  }
};

// return number of nodes on the linked list
const calcSize = list => {
  // if List is empty, return zero
  if (!list.head) {
    console.log(`List size is 0`);
  }

  let counter = 0;

  // start at the head
  let currNode = list.head;

  // traverse list
  while(currNode) {
    counter++;
    currNode = currNode.next;
  }
  console.log(`List size is ${counter}`);
};

// return true if list contains zero nodes
const isEmpty = list => {
  list.head ? console.log('false') : console.log('true');
};

// return node preceding the matching item
const findPrevious = (list, item) => {
  // if List is empty, display message and return
  if (!list.head) {
    console.log(`Unable to find previous node: list is empty`);
    return;
  }

  // start at the head
  let currNode = list.head;
  let prevNode = list.head;

  while (currNode) {
    if (currNode.value === item) {
      console.log(`Previous item: ${prevNode.value}`);
      return;
    }
    prevNode = currNode;
    currNode = currNode.next;
  }

  // display message if list does not contain matching item
  if (!currNode) {
    console.log(`Unable to find previous node: list does not contain ${item}`);
  }
};

// return last node on the linked list
const findLast = list => {
  // if List is empty, display message and return
  if (!list.head) {
    console.log(`Unable to find last node: list is empty`);
    return;
  }

  let currNode = list.head;

  while (currNode.next) {
    currNode = currNode.next;
  }
  console.log(`Last item: ${currNode.value}`);

};

// reverse order of nodes on the linked list
const reverseList = list => {
// if List is empty, display message and return
//   if (!list.head) {
//     console.log(`Unable to reverse list: list is empty`);
//     return;
//   }

  let currNode = list.head;
  // let prevNode = list.head;

  if (currNode.next === null) {
    return;
    // list.head = currNode;
    // console.log(JSON.stringify(list, null, 2));
  }
  // currNode = currNode.next;


};



const main = () => {
  // Create new Linked List
  const SLL = new LinkedList();
  // Populate List with the following items
  SLL.insert('Apollo');
  SLL.insert('Boomer');
  // SLL.insert('Helo');
  // SLL.insert('Husker');
  // SLL.insert('Starbuck');
  // SLL.insert('Tauhida');
  // SLL.remove('squirrel');
  // console.log(SLL.find('Tauhida'));
  // SLL.insertBefore('Boomer', 'Athena');
  // SLL.insertAfter('Helo', 'Hotdog');
  // SLL.insertAt(3, 'Kat');
  // display(SLL);
  // calcSize(SLL);
  // isEmpty(SLL);
  // findPrevious(SLL, 'Helo');
  // findLast(SLL);
  reverseList(SLL);
  return SLL;
};

console.log(JSON.stringify(main(), null, 2));