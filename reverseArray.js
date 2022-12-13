// Reverse an array 
arr=[1,2,3,4,5]
arrRev=[]
 for(i=arr.length-1;i>=0;i--){
   arrRev.push(arr[i])
 }
 console.log(arrRev)
//reverse without using extra array
s=[1,2,3,4,5]
n=s.length-1
for(i=n;i>=n/2;i--){
  q=s[i]      
  s[i]=s[n-i] 
  s[n-i]=q   
}
console.log(s) 

// s='hello'
// s=s.split('')
//        n=s.length-1
//      for(i=n;i>=n/2;i--){
//        q=s[i]      
//        s[i]=s[n-i] 
//        s[n-i]=q   
//    }
// console.log(s.join(''))
