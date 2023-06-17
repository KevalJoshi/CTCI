function IfTheyAreOneEditAway(str1,str2){
                var strln1 = str1.length;
                var strln2 = str2.length;
                if((strln1 - strln2) > 1){
                    return false;
                }
                let i=0 , j=0, count = 0;
                while(i<strln1 && j<strln2){
                    if(str1[i] != str2[j]){
                        if(count == 1){
                            return false;
                        }
                        if(strln1>strln2){
                            i++;
                        }
                        else if(strln1<strln2){
                            j++;
                        }
                        else{
                            i++;
                            j++;
                        }
                        count++;
                    }
                        else{
                            i++;
                            j++;
                        }
                }
                        if (i < strln1 || j < strln2){
                        count++;
                        }
                return count == 1;
            }
           console.log(IfTheyAreOneEditAway("pale","ple"));
           console.log(IfTheyAreOneEditAway("pales","pale"));
           console.log(IfTheyAreOneEditAway("pale","bale"));
           console.log(IfTheyAreOneEditAway("pale","bake"));