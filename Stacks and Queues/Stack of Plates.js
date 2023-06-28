/*Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
 Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push()
 and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).*/

 class DinnerPlates {
    constructor(capacity) {
      this.capacity = capacity;
      this.stacks = [];
      this.available = new Set();
      this.nextPushIndex = 0;
      this.nextPopIndex = 0;
    }
  
    push(val) {
      if (this.available.size > 0) {
        const stackIndex = this.available.values().next().value;
        this.stacks[stackIndex].push(val);
        if (this.stacks[stackIndex].length === this.capacity) {
          this.available.delete(stackIndex);
          this.nextPopIndex = Math.max(this.nextPopIndex, stackIndex + 1);
        }
      } else {
        if (this.nextPushIndex === this.stacks.length) {
          this.stacks.push([]);
        }
        this.stacks[this.nextPushIndex].push(val);
        if (this.stacks[this.nextPushIndex].length === this.capacity) {
          this.nextPushIndex++;
          this.nextPopIndex = this.nextPushIndex;
        }
      }
    }
  
    pop() {
      if (this.nextPopIndex === 0) {
        return -1;
      }
      while (
        this.nextPopIndex > 0 &&
        this.stacks[this.nextPopIndex - 1].length === 0
      ) {
        this.nextPopIndex--;
      }
      if (this.nextPopIndex === 0) {
        return -1;
      }
      const val = this.stacks[this.nextPopIndex - 1].pop();
      this.available.add(this.nextPopIndex - 1);
      return val;
    }
  
    popAtStack(index) {
      if (index >= this.stacks.length || this.stacks[index].length === 0) {
        return -1;
      }
      const val = this.stacks[index].pop();
      this.available.add(index);
      this.nextPushIndex = Math.min(this.nextPushIndex, index);
      this.nextPopIndex = Math.min(this.nextPopIndex, index);
      return val;
    }
  }
  
