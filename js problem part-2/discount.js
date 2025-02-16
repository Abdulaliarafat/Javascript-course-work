// upto 100:------> 100 tk
// more then 101-200:------> 90 tk
// mote then 200 ----------> 70 tk
function discountedPrice(quntity){
    if(quntity <= 100){
        const total = quntity * 100;
        return total
    }
    else if(quntity <= 200){
        const total = quntity * 90;
        return total;
    }
    else{
          const total = quntity * 70;
          return total
    }

}
console.log(discountedPrice(101))