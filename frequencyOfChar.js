// str="hello world"
// arr=str.split(" ").join("").split("").sort((a,b)=>a.localeCompare(b))
// // console.log(arr);

// let mapObj={}


// for (let i in arr) {
//    if(mapObj[arr[i]]){
//     mapObj[arr[i]]++
//     console.log(mapObj[arr[i]]);
//   }
//   else{
//     mapObj[arr[i]]=1
//     console.log(mapObj[arr[i]]);
//    }
//   }

//   // console.log(mapObj);
// for (const [key, value] of Object.entries(mapObj)) {
//     console.log(key,value);
  
// }
///////////////////////////////////////////////////////////////////

arr=[1, 1, 2, 2, 3]
let mapObj={}
min=100
let minValue
for (let i in arr) {
   if(mapObj[arr[i]]){
    mapObj[arr[i]]++
   }
   else{
    mapObj[arr[i]]=1
   }
   if(min>mapObj[arr[i]]){
    // min=mapObj[arr[i]]   
    minValue=arr[i]
   }
   
  }

console.log(minValue);
console.log(min);
  
