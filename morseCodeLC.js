a=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

l=[
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ]

words = ["gin","zen","gig","msg"]
output=[]
for(k=0;k<words.length;k++){
    n=words[k]
    m=n.split("") 
    var sum=[]
    for(i=0;i<m.length;i++){
        for(j=0;j<l.length;j++){
            if(m[i]==l[j]){
                
                sum.push(a[j])
            }  
        }   
    }
        sum=sum.join("")
        output.push(sum)
       
}  

uniq = [...new Set(output)];
console.log(uniq.length);

// for(k=0;k<output.length;k++){
//     for(l=0;l<output.length;l++){
//         if(output[k]==output[l]){
            
//         }
    
//     }
// }