// // let I =1
// // let V = 5
// // let X = 10
// // let L = 50
// // let C = 100
// // let D = 500
// // let M = 1000

// s="CVI"
// s=s.split("")
// console.log(s);

// arr=[]
// for(let i=0;i<s.length;i++){
//     if(s[i]=="I"){
//         arr.push(1)
//     }
//     if(s[i]=="V"){
//         arr.push(5)
//     }
//     if(s[i]=="X"){
//         arr.push(10)
//     }
//     if(s[i]=="L"){
//         arr.push(50)
//     }
//     if(s[i]=="C"){
//         arr.push(100)
//     }
//     if(s[i]=="D"){
//         arr.push(500)
//     }
//     if(s[i]=="M"){
//         arr.push(1000)
//     }
// }
// console.log(arr);
// if(arr[0]<arr[arr.length-1]){
//     let val=arr[arr.length-1]//5
//     for(i=1;i<arr.length;i++){
//       val=val-arr[arr.length-1-i]
//     }
//     console.log(val);
// }
// if(arr[0]>arr[arr.length-1]){
//     let val2=arr[0]//100
//     for(i=1;i<arr.length;i++){
//       val2=val2+arr[i]
//     }
//     console.log(val2);
// }
var romanToInt = function(s) {
    s=s.split("")

arr=[]
for(let i=0;i<s.length;i++){
    if(s[i]=="I"){
        arr.push(1)
    }
    if(s[i]=="V"){
        arr.push(5)
    }
    if(s[i]=="X"){
        arr.push(10)
    }
    if(s[i]=="L"){
        arr.push(50)
    }
    if(s[i]=="C"){
        arr.push(100)
    }
    if(s[i]=="D"){
        arr.push(500)
    }
    if(s[i]=="M"){
        arr.push(1000)
    }
}
console.log(arr);
// if(arr[0]<arr[arr.length-1]){
//     let val=arr[arr.length-1]//5
//     for(i=1;i<arr.length;i++){
//       val=val-arr[arr.length-1-i]
//     }
//         return(val);
// }
// if(arr[0]>arr[arr.length-1]){
//     let val2=arr[0]//100
//     for(i=1;i<arr.length;i++){
//       val2=val2+arr[i]
//     }
//         return(val2);
// }
// if(arr[0]==arr[arr.length-1]){
//     let val3=arr[0]//100
//     for(i=1;i<arr.length;i++){
//       val3=val3+arr[i]
//     }
//         return(val3);
// }
    


};


console.log(romanToInt("MCMXCIV"));