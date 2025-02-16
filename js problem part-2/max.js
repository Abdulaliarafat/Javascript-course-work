const rahat = 46;
const arafat = 70;
if(rahat > arafat){
    console.log('we eat rice',arafat)
}
else{
    console.log('eat briyani',rahat)
}

// same work with function
function getMax(num1,num2){
    if(num1 > num2){
        return num1
    }
    else{
        return num2
    }
}
const max = getMax(70,60)
const max2 = getMax(56,80)
console.log('max of two is', max2)
console.log('max of two is', max)
const totalMax = getMax(max,max2)
console.log(totalMax)