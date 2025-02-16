const products = [
    { name: 'shampoe' , price: 500, quntity: 4 },
    { name: 'thob' , price: 2000, quntity: 2 },
    { name: 'shirt' , price: 1500, quntity: 3 },
    { name: 'pant' , price: 1000, quntity: 6 }
]
function cartTotal(products){
    let total = 0;
    for(const product of products){
      const thisProductCost = product.price * product.quntity;
      total = total + thisProductCost;
    }
    return total;
}
console.log(cartTotal(products))