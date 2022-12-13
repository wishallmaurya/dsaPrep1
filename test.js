// a=[6,0,6]
// b=[]
// let str
// for(i=0;i<3;i++){
//     for(j=i+1;j<4;j++){
        
//     str = a.slice(i, j)
//     console.log(str)
   
//     }
// }



// var str = '612313412342123';
//  result = [];
//  result1 = [];

//   for (i = 0; i < str.length; i++) {
//       for (j = i + 1; j < str.length + 1; j++) {
//           result.push(str.slice(i, j));
//       }
//   }
  
//   for(i=0;i<result.length;i++){   
 
//      result1.push(parseInt(result[i]))
//   }
//   result1.sort((a, b) => a - b)
//   console.log(result1);
//   let count=0 


//     for(i=0;i<result1.length;i++){  
//     if(result1[i]!=result1[i+3]){     
//     if(result1[i]%6==0){
//         count++
//     }
// }
//     }
//   console.log(count)








//  var string ="geeksforgeeks";
//  a = string.substring(0, 1)
//  b = string.substring(0, 2)
//  c = string.substring(5)
//  d = string.substring(0)
//  str2 = string.slice(0, 1),

// console.log(str2);

// let s = "codeleet"
// s=s.split("")
// console.log(s);
// sum=[ '--.', '--..', '--.']
// sum=sum.join("")
// sum=[]
// console.log(sum)

// a=[]
// a.push(1,2)
// console.log(a);
// output=5
// a=[ 4, 3, 2, 1 ]
// a=[
//     1, 1, 1, 1, 1,
//     1, 1, 1, 1, 1
//   ]
arr= [5,1,2,3,4,1,2,1]
min=100000;
console.log(arr);
arr2=[]
for(i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
}
for(i in arr){
    if(arr[i]==min){
        arr2.push(i)
    }
    
}
if(arr2.length==1){
    return -1
}
else{
// arr2.sort((a,b)=>a-b)
result= arr2[arr2.length-1]-arr2[arr2.length-2]
console.log(result);}
