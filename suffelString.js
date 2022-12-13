let s = [
    'c', 'o', 'd',
    'e', 'l', 'e',
    'e', 't'
  ]
let indices = [4,5,6,7,0,2,1,3]
let x
let y
for ( i = 0; i < indices.length; i++) {
    for ( j = 0; j < indices.length; j++) {
      if(indices[j]>indices[j+1]){
        x=indices[j]
        y=s[j]
        indices[j]=indices[j+1]
        s[j]=s[j+1]

        indices[j+1]=x
        s[j+1]=y
      }
 }
 }
console.log(s,indices);