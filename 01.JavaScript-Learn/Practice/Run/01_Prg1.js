let str1="MADAM";
let str2='';

for (let i=str1.length-1; i>=0; i--){
    //console.log(str1[i]);
    str2+=str1[i];
    }
console.log(str2);

if (str1==str2){
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
        }
    