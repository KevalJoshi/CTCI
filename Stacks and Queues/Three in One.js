// Three in One: Describe how you could use a single array to implement three stacks.
class ThreeStacks {
    constructor(stackSize) {
      this.stackSize = stackSize;
      this.array = new Array(stackSize * 3).fill(null);
      this.stackPointers = [0, stackSize, stackSize * 2];
    }
  
    push(stackNum, value) {
      if (this.isFull(stackNum)) {
        console.log(`Stack ${stackNum} is full. Cannot push ${value}.`);
        return;
      }
  
      const index = this.getNextIndex(stackNum);
      this.array[index] = value;
      this.stackPointers[stackNum]++;
    }
  
    pop(stackNum) {
      if (this.isEmpty(stackNum)) {
        console.log(`Stack ${stackNum} is empty. Cannot pop.`);
        return null;
      }
  
      const index = this.getCurrentIndex(stackNum);
      const value = this.array[index];
      this.array[index] = null;
      this.stackPointers[stackNum]--;
      return value;
    }
  
    peek(stackNum) {
      if (this.isEmpty(stackNum)) {
        console.log(`Stack ${stackNum} is empty.`);
        return null;
      }
  
      const index = this.getCurrentIndex(stackNum);
      return this.array[index];
    }
  
    isFull(stackNum) {
      return this.stackPointers[stackNum] === (stackNum + 1) * this.stackSize;
    }
  
    isEmpty(stackNum) {
      return this.stackPointers[stackNum] === stackNum * this.stackSize;
    }
  
    getNextIndex(stackNum) {
      return this.stackPointers[stackNum];
    }
  
    getCurrentIndex(stackNum) {
      return this.stackPointers[stackNum] - 1;
    }
  }