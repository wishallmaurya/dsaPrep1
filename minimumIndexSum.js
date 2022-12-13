//599. Minimum Index Sum of Two Lists
list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// list1 = ["Shogun","Tapioca Express","Burger King","KFC"]
// list2 = ["KFC","Shogun","Burger King"]
let count=0;
list3=[]
list4=[]
for(i=0;i<list1.length;i++){

    for(j=0;j<list2.length;j++){

        if(list1[i]==list2[j]){
            count++
            // if(count==0){
            //     console.log(list1[i])
            // }
            if(count>0){
                list3.push(list1[i],list2[j])
                list4.push(i,j)

            }
        }
    }
}
arr=[];
console.log(list4);

for(k=0;k<list4.length;k+=2){
     sum=list4[k]+list4[k+1]
     arr.push(sum);
}
const min = Math.min(...arr)
console.log(min)

