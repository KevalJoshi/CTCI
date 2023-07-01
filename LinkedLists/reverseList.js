// Reverse a Linked List


function reverseList(head){

    var curr = head;
    var prev = null;

    while(curr != null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}