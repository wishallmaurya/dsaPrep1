//Search a particular element's position  in array.

let a=[1,2,3,4,3,3];
let s=3;
let p=[];

for (var i = 0; i < a.length; i++) {
 if( a[i]==s){
   p.push(i)
 }
}
console.log(p)