let num = 1;
let sum = 0;
while(num <= 50){
    if(sum > 100){
        break;
    }
    sum = sum + num;
    console.log(num)
    num++
    console.log('total', sum)
}
