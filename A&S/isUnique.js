
function isUnique(str) {
    var strSet = new Set(str);
  
    if(str.length === strSet.size){
        return true;
    }
    else{
        return false;
    }
}
  
  const hasUniqueCharacters = isUnique("milin");
  console.log(hasUniqueCharacters);

  // Time Complexity of the above code is O(n) where is the length of the input string
  // Space Complexity of the above code is also O(n) because of the total input in string
  