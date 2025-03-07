const products =[
    {id:1,name:'iphone',color:'black',price:1200,brand:'apple'},
    {id:2,name:'xiaomi',color:'gold',price:200,brand:'xiaomi'},
    {id:3,name:'sumsung',color:'blue',price:100,brand:'sumsang'},
    {id:4,name:'iphone',color:'black',price:1200,brand:'apple'},
    {id:5,name:'sumsung',color:'gold',price:1200,brand:'sumsung'}
]
// ................map..............
// const newProduct= product.map((element)=>element)
// console.log(newProduct)
// .............find............
const newProduct = products.filter(p=>p.id!=3)
console.log(newProduct)

const product = products.find(p=>p.color==='gold')
// console.log(product)
// .............filter...........
// const newProduct = products.filter(product=>product.price>1000)
// console.log(newProduct)
// ..............foreach.............
// products.forEach(product=>{
//     if (product.color==='gold'){
//         console.log(product)
//     }
// })