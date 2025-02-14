// for(i = 2; i <= 20; i+=2){
//     console.log(i)
// }

// 5 mudule 0

// for(i = 1; i <= 30; i++){
//     if(i % 5 === 0){
//         console.log(i)
//     }
// }
// for(i = 1; i <= 30; i++){
//         if(i % 3 === 0  i % 5 === 0){
//             console.log(i)
//         }
//     }

    // for(i = 1; i <= 30; i++){
    //     if(i % 3 === 0 && i % 5 === 0){
    //         console.log(i)
    //     }
    // }
 let total = 0;
    for(i = 1; i <= 20; i++){
        if(i % 3 === 0){
            total += i;
            console.log(i)
            console.log('total',total)
        }
    }
    console.log('total',total)