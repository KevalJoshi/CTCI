function checkPermutation(str1, str2){

    if(str1.length != str2.length){
        return false;
    }

    const strArr1 = Array.from(str1);
    const strArr2 = Array.from(str2);
    strArr1.sort();
    strArr2.sort();

    for(i=0; i<strArr1.length; i++){
        if(strArr1[i] != strArr2[i]){
            return false;
        }
    }
    return true;

}
var isPermutationOrNot = checkPermutation("keval","lavek");
console.log(isPermutationOrNot);