sentences = ["w jrpihe zsyqn l dxchifbxlasaehj","nmmfrwyl jscqyxk a xfibiooix xolyqfdspkliyejsnksfewbjom","xnleojowaxwpyogyrayfgyuzhgtdzrsyococuqexggigtberizdzlyrdsfvryiynhg","krpwiazoulcixkkeyogizvicdkbrsiiuhizhkxdpssynfzuigvcbovm","rgmz rgztiup wqnvbucfqcyjivvoeedyxvjsmtqwpqpxmzdupfyfeewxegrlbjtsjkusyektigr","o lgsbechr lqcgfiat pkqdutzrq iveyv iqzgvyddyoqqmqerbmkxlbtmdtkinlk","hrvh efqvjilibdqxjlpmanmogiossjyxepotezo","qstd zui nbbohtuk","qsdrerdzjvhxjqchvuewevyzlkyydpeeblpc"]//4,5,1,7
                                      //y=5
let x;
var count=[]
for(i=0;i<sentences.length;i++){
    x=sentences[i]
    x=x.split(" ")
   count.push(x.length);
}
// max=count[0]
// for(j=0;j<count.length;j++){
//     if(count[j]>max){
//         max=count[j]
//     }
// }
console.log(Math.max(...count)); 