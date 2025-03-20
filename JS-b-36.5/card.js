const handleAddToCard=()=>{
    const productName=document.getElementById("productName");
    const productQuentity=document.getElementById("productQuentity");
   const name=productName.value;
   const quentity=productQuentity.value;
   saveProductToLocalStorage(name,quentity)
   displayProduct(name,quentity);
   productName.value="";
   productQuentity.value="";
}
const displayProduct=(productName,quentity)=>{
    const producContainer=document.getElementById('product-container');
    const li =document.createElement('li');
    li.innerText=`${productName} : ${quentity}`;
    producContainer.appendChild(li)
}
const getProductFromStorage=()=>{
    let cart ={};
    const getProduct=localStorage.getItem("cart");
    if(getProduct){
        cart =JSON.parse(getProduct);
    }
    return cart;
}
const displayProductFromLocaltorage=()=>{
    const products=getProductFromStorage()
    for(const product in products){
       displayProduct(product,products[product])
    }

}
const saveProductToLocalStorage=(productName,quentity)=>{
    const cart=getProductFromStorage();
    cart[productName]=quentity
    const CartSring=JSON.stringify(cart)
    localStorage.setItem("cart",CartSring)
}
displayProductFromLocaltorage()