const somart = 78;
const arman = 50;
const masheafi = 45;
if(somart > arman && somart > masheafi){
    console.log("somart is bodo vai", somart)
}
else if(arman > somart && arman > masheafi){
    console.log("arman is shejo in brother",arman)
}
else{
    console.log("mashreafi in junior",masheafi)
}

function maxofNumber(num1,num2,num3){
       if(num1 > num2 && num1 > num3){
        console.log('num1 is bigger then other')
        return num1
       }
       else if(num2 > num1 && num2 > num3){
         console.log('num2 is bigger then other')
         return num2
       }
       else{
        console.log('num3 is untimate number')
        return num3
       }

}
console.log(maxofNumber(90,43,16))

// simpale use math to find max number
 const max = Math.max(1,4,5,67,8,7,4);
 console.log(max)

