s='hello'
s=s.split('')
       n=s.length-1
     for(i=n;i>=n/2;i--){
       q=s[i]      
       s[i]=s[n-i] 
       s[n-i]=q   
   }
console.log(s.join(''))