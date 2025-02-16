const number =[300, 100,700,1200]

const product = [
    {name:'shampoe', price:500},
    {name:'thob', price:2000},
    {name:'shirt', price:1500},
    {name:'pant', price:1000}
]
function getShopingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}
const total = getShopingTotal(product)
console.log('phoket khali hove ajkeeeee',total)