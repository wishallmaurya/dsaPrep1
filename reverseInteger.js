var a = 1534236469;
var b, sum = 0;

while(a!=0)
{
  b = a % 10;
  sum = sum * 10 + b;
  a = parseInt(a / 10);
}
if(sum>Math.pow(2,31)-1 || sum<Math.pow(-2,31)){
    console.log( 0)
    }
else{
console.log(sum)}
 
// console.log(Math.pow(2,31)-1);
// console.log(Math.pow(-2,31));