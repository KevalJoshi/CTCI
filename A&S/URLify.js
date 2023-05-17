function replaceString(str, length){
    const strArr = Array.from(str);
    var spaceCount = 0;
    

    for(i = 0; i < length; i++){
        if(strArr[i] == " "){
            spaceCount++;
        }
    }

   var newLength = length + spaceCount * 2;

   for(i = length - 1; i>=0; i--){
       if(strArr[i] == " "){
        strArr[newLength - 1] = '0';
        strArr[newLength - 2] = '2';
        strArr[newLength - 3] = '%';
           newLength = newLength - 3;
       }
       else{
        strArr[newLength - 1] = strArr[i];
           newLength = newLength - 1;
       }
   }
   
   return strArr;
}
   

        var replace = replaceString("Mr John Smith is liar        ",21);
        console.log(replace);