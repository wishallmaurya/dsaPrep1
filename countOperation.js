//2169. Count Operations to Obtain Zero
num1 = 10
num2 = 10

count=0;

while (num2!=0 && num1!=0) {
  
    if(num1>num2){
        num1=num1-num2;
        count++
    }
    if(num1<num2){
        num2=num2-num1;
        count++
    }
    if(num1==num2){
        num2=num2-num1;
        count++
    }
    
}
console.log(count);
