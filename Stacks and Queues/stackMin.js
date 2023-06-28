// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time. 
class stack{
    constructor(){
        this.mainStack = [];
        this.minStack = [];
    }

    push(value){
        this.mainStack[this.mainStack.length] = value;

        if (this.minStack.length === 0 || value <= this.getMin()){
            this.mainStack[this.minStack.length] = value;
        }
    }

    pop() {
        if (this.mainStack.length === 0) {
            return null;
        }

        const poppedValue = this.mainStack[this.mainStack.length - 1];
        this.mainStack.length--;

        if(poppedValue === this.getMin()) {
            this.minStack.length--;
        }

        return poppedValue;
    }

    top(){
        if(this.mainStack.length === 0){
            return null;
        }

        return this.mainStack[this.mainStack.length - 1];
    }

    getMin(){
        if(this.minStack.length === 0){
            return null;
        }

        return this.minStack[this.minStack.length - 1];
    }
}