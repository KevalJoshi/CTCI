// Implement an algorithm to find the kth to last element of a singly linked list.

function findKthToLast(head, k) {
    let p1 = head;
    let p2 = head;
  
    for (let i = 0; i < k; i++) {
      if (p2 === null) {
        return null; 
      }
      p2 = p2.next;
    }
  
    while (p2 !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }
  
    return p1;
  }

  //Time Complexity: O(n)
  //Space : O(1)