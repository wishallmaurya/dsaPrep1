nums1=[3]
nums2=[-2,-1]
let n=[]
    for(i=0;i<nums1.length;i++){
         n[i]=nums1[i]
        
    }
  for(i=0;i<nums2.length;i++){
         n[i+nums1.length]=nums2[i]
        
    }
    n.sort((a,b)=>a-b)
    if(n.length==1){
        console.log( n.join(''))
    }
    if(n.length%2!=0){
    let len =(( n.length+1)/2)
    console.log(n[len-1])
    }
    num=n.length
    if(n.length%2==0){
    let lee=(num/2)
     let res= ( n[lee-1]+n[lee])/2
    console.log( res)
    
    }