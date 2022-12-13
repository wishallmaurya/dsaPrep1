nums=[1,1,2,2,3,3,3]

for(i=0;i<nums.length;i++){
    for(j=i+1;j<nums.length;j++){
    if(nums[i]==nums[j]){
        nums[j]="_"

    }
}
console.log(nums.sort());
}