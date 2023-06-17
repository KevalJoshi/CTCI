function deleteMiddleNode(node) {
    if (node === null || node.next === null || node === head) {
        return; 
    }
      
      let nextNode = node.next;
      node.val = nextNode.val;
      node.next = nextNode.next;
      
}
// time : O(1)
// space : O(1)