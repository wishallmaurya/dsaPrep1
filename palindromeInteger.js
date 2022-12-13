var a = 12321;
var b, sum = 0;
var z = a;
while(a!=0)
{
  b = a % 10;
  sum = sum * 10 + b;
  a = parseInt(a / 10);
}
if(sum==z)
console.log(sum,"is palindrome");
else{
    console.log("not palindrome");
}       