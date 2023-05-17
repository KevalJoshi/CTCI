 function StringCompression(str){
                    if(str.length == 0){
                        return false;
                    }
                    var compstr = "";
                    var count = 0;
                    for(i=0; i<str.length; i++){
                        count++;
                        if(str[i] != str[i+1]){
                        compstr += str[i] + count;
                        count = 0;
                        }
                    }
                    if(compstr.length>str.length){
                        return str;
                    }
                    else{
                    return compstr;
                    }
                }
                console.log(StringCompression("aabb"));