function partitionList(head, k){
    let afterX = new Node();
    let beforeX = new Node();
    let curr = head;
    let beforexPtr = beforeX;
    let afterxPtr = afterX;

    while(curr != null){
        if (curr.val < x){
            beforexPtr.next = curr ;
            beforexPtr = beforexPtr.next;
        }

        else{
            afterxPtr.next  = curr;
            afterxPtr = afterxPtr.next ;
        }

        curr = curr.next;
    }

    afterxPtr.next = null;
    beforexPtr.next = afterX.next;
    

return beforeX.next;

}

// time : O(n)
// space : O(1)