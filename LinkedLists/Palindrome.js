// Check if a LinkedList is palindrome or not?
function isPalindrome(head) {
    if (head === null || head.next === null) {
      return true;
    }
  
    
    let values = [];
    let curr = head;
    while (curr !== null) {
      values.push(curr.val);
      curr = curr.next;
    }
  
    
    let left = 0;
    let right = values.length - 1;
    while (left < right) {
      if (values[left] !== values[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }

  //time : O(n)
  //space : O(n)