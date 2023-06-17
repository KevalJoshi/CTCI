function sumLists(l1, l2) {
    let carry = 0;
    let sum = 0;
    let head = null;
    let tail = null;
  
    while (l1 || l2 || carry) {
      const val1 = l1 ? l1.val : 0;
      const val2 = l2 ? l2.val : 0;
  
      sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10);
      sum %= 10;
  
      const newNode = new ListNode(sum);
  
      if (head === null) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
  
      l1 = l1 ? l1.next : null;
      l2 = l2 ? l2.next : null;
    }
  
    return head;
}
  