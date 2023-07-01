// Implement a MyQueue class which implements a queue using two stakcs.
var MyQueue = function() {
    this.stk1 = [];
    this.stk2 = [];
};

MyQueue.prototype.push = function(x){
    this.stk1.push(x);
};

MyQueue.prototype.pop = function() {
    this.move();
    return this.stk2.pop();
};

MyQueue.prototype.peek = function(){
    this.move();
    return this.stk2[this.stk2.length-1];
};

MyQueue.prototype.empty = function() {
    return this.stk1.length === 0 && this.stk2.length === 0;
};

MyQueue.prototype.move = function(){
if (this.stk2.length === 0)
while(this.stk1.length > 0)
this.stk2.push(this.stk1.pop())
};