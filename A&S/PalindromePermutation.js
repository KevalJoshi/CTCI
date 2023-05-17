  function isPalindrome(str){
                 const charCount = {} 
                    str = str.toLowerCase();  
                    for (let i = 0; i < str.length; i++) {    
                    if((str[i].charCodeAt() & 255) < ('a'.charCodeAt() & 255) || (str[i].charCodeAt() & 255)> ('z'.charCodeAt() & 255))
                    continue;
                    charCount[str[i]] = (charCount[str[i]] || 0) + 1 
                    }
                    const counts = Object.values(charCount); 
                    let oddCounts = 0; 
                    for (let i = 0; i < counts.length; i++) { 
                    if (counts[i] % 2 != 0) { 
                    oddCounts++;
                    }
                    if (oddCounts > 1) { 
                    return false;
                     }
                     }
                return true; 
            }
            console.log(isPalindrome("test"));
            console.log(isPalindrome("tenet"));
            console.log(isPalindrome("taco cat"));