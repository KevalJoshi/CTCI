function loopDetection(head) {
    var curr = head;
    var set = new Set();
  
    while (curr != null) {
      if (set.has(curr.val)) {
        return curr.val;
      } else {
        set.add(curr.val);
      }
      curr = curr.next;
    }
    return null;
  }

  // time : O(n)
  // space : O(n)

 