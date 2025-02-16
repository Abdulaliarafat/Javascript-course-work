function getMin(productPrice){
     let min = productPrice[0];
    for(const proPrice of productPrice){
     if(proPrice < min){
        min = proPrice
     }
    }
    return min;
}
const price =[20000,31000,12000,5000,70000]
const total = getMin(price)
console.log('phone in cheap price',total)