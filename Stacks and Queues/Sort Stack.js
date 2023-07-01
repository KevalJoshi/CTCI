class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "No elements in the stack";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function sortStack(stack) {
  const tempStack = new Stack();

  while (!stack.isEmpty()) {
    const current = stack.pop();

    while (!tempStack.isEmpty() && tempStack.peek() > current) {
      stack.push(tempStack.pop());
    }

    tempStack.push(current);
  }
  
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}


