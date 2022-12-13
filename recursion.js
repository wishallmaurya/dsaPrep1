// function a(x){

//     if(x>0){
//         a(x-1);
//         //5*a(4)
//         //4*a(3)
        
//     }

// }

//  b=a(5);
//  console.log(b);


// x=1
// console.log(x++)
// console.log(x++)
// console.log(x++)
// console.log(x)


let arr = [2,3,1,4,5,10]

let empty 
for(let i = 0; i < arr.length; i++) {
  for(let j = i + 1; j < arr.length; j++) {

    if(arr[i] > arr[j]){
     empty = arr[i];
     arr[i] = arr[j]
     arr[j] = empty;
     
    }
  }

console.log(arr[i])
}
