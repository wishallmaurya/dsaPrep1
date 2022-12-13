// LeetCode  keywords
words=["Hello","Alaska","Dad","Peace"]
    let Q=["q","w","e","r","t","y","u","i","o","p","Q","W","E","R","T","Y","U","I","O","P"];
    let A=["a","s","d","f","g","h","j","k","l",'A', 'S', 'D','F', 'G', 'H', 'J', 'K', 'L']
    let Z=["z","x","c","v","b","n","m",'Z', 'X', 'C','V', 'B', 'N','M']
    result=[];
    for(i=0;i<words.length;i++){
        n=words[i]
        m=n.split("")   
        let count1=0;
        let count2=0;
        let count3=0;
            for(j=0;j<Q.length;j++){
                for(k=0;k<m.length;k++){
                if(Q[j]==m[k]){
                    count1++
                }
            } 
        }
            for(l=0;l<A.length;l++){
                for(o=0;o<m.length;o++){
                if(A[l]==m[o]){
                    count2++
                }
            } 
        }
        for(p=0;p<Z.length;p++){
                for(k=0;k<m.length;k++){
                if(Z[p]==m[k]){
                    count3++
                }
            }
        } 
     
        
            if(count1==m.length){
                result.push(m.join(""))
            }
            if(count2==m.length){
                result.push(m.join(""))
            }
            if(count3==m.length){
                result.push(m.join(""))
            }
           
     }

      console.log(result);   
        
