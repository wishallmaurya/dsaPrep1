//2185. Counting Words With a Given Prefix

words = ["cullp","ypfyqcljk","jtuogvscob","dsriyigc","fr","jtuogvscou","doivwcgxpo","jtuogvscob","chuiw","fqdhyhkvtz","cszrtrff","kssjy","ps","xvax","vekbmwwnra"]
pref = "jtuogvsco"
pref = pref.split("")
let x
let count2=0
for(i=0;i<words.length;i++){
    x=words[i]
    x=x.split("")
    count=0
    for(j=0;j<pref.length;j++){
        if(x[j]==pref[j]){
            count++
        }    
    }
       if(count%pref.length==0){
            count2=count2+count
        }
}
// if(count%pref.length==0){
    console.log(count2/pref.length)
    // }
    // else{
    //     console.log(0);
    // }