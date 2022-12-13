
let n
a=[2,3,1,4]
 for ( i = 0; i < a.length; i++) {
    for ( j = 0; j < a.length; j++) {
      if(a[j]>a[j+1]){
        n=a[j]
        a[j]=a[j+1]
        a[j+1]=n
      }
 }
 }
 console.log(a)


    
// let n
// a=[2,3,1,4]
//  for ( i = 0; i < a.length; i++) {
//     for ( j = i+1; j < a.length; j++) {
//       if(a[i]<a[j]){
//         n=a[i]
//         a[i]=a[j]
//         a[j]=n
//       }
//  }
//  }
//     console.log(a)