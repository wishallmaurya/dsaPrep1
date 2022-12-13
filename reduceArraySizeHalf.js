//1338. Reduce Array Size to The Half

arr = [9,77,63,22,92,9,14,54,8,38,18,19,38,68,58,19]
arr2=[]
for(i=0;i<arr.length;i++){
    count=0
    for(j=0;j<arr.length;j++){
      if(arr[i]==arr[j]){
        count++
      }
    }
   arr2.push(count)
}
console.log(arr2);

  let arr3 = [...new Set(arr2)];
// console.log(arr3);//[ 4, 3, 2, 1 ]
n=arr.length//10
arr4=[]
for(k=0;k<arr3.length;k++){
    for(l=k+1;l<arr3.length;l++){
      sum=arr3[k]+arr3[l]
        if((n-sum)==n/2){
            arr4.push(arr3[k],arr3[l])
            
        }break
    }
    
}
// console.log(arr4);
if(arr4.length==0){
    console.log(1);
}
else{
 console.log(arr4.length);   
}
// arr=[3,5,2,1]
// const getAllSubsets = 
//       theArray => theArray.reduce(
//         (subsets, value) => subsets.concat(
//          subsets.map(set => [value,...set])
//         ),
//         [[]]
//       );

// console.log(getAllSubsets(arr));
