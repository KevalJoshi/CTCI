// Intersection : Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node.
// Note that the intersection is defined based on reference, not value. That is,if the kth node of the first linked list is the exact same node
//as the jth node of the second linked list, then they are intersecting.
function intersection(headA, headB){
  
    if (headA === null || headB === null) {
      return null;
    }
  
    var currA = headA;
    var currB = headB;
  
    while (currA !== currB) {
  
      if (currA === null) {
        currA = headB;
      } else {
        currA = currA.next;
      }
  
      
      if (currB === null) {
        currB = headA;
      } else {
        currB = currB.next;
      }
    }
  
    
return currA;
}

// time : O(m+n)
// space : O(1)
