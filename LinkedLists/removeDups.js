//REMOVE DUPS :  Write code to remove duplicates from a unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?

function removeDuplicate(head) {
    var set = new Set();
    var current = head;
    var prev = null;
  
    while (current != null) {
      var curval = current.val;
  
      if (set.has(curval)) {
        prev.next = current.next;
      } else {
        set.add(curval);
        prev = current;
      }
  
      current = current.next;
    }
  }
  

// Time Complexity : O(n) 
// Space Complexity : O(n)


//When a duplicate node is encountered, the prev.next reference is updated to skip the current node and connect the previous node directly to the next non-duplicate node.
