// // Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

let s= "leetcode"
// // s = "loveleetcode"
// // s = "aabb"
// s=s.split("")
// let z=2
// for(i=0;i<s.length;i++){
// var c=0;    
//     for(j=0;j<s.length;j++){
//       if(s[i]==s[j]){
//           c++
//       }
//     }
//     if(c==1){
//         console.log(i);
//         break
//     }
//     }
// if(c>1){
//     console.log(-1);
// }

// let str = "Hello";
// a=str.lastIndexOf('l')  
// b=str.indexOf("l")   
// console.log(a,b);

for (let i = 0, n = s.length; i < n; i++) {
    let d = s[i];    
    if (s.indexOf(d) === s.lastIndexOf(d))
    console.log(i);
    break
}
console.log(-1);
//return instead of console.log
