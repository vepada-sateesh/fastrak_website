loginName= JSON.parse(localStorage.getItem("UserData"));
if(loginName==null){
    document.querySelector("#log").innerText="LOGIN"
}
else{
    for(i=0; i<loginName.length; i++){
        console.log(loginName[i].email)
        document.querySelector("#log").innerText=loginName[i].email;
    }
}
document.querySelector(".pro div").addEventListener("click",productfun)

function productfun(){
    window.location="product.html"
}

document.querySelector("#addcart").addEventListener("click",function(){
    alert("item added to cart sucessful")
    window.location="cart.html"
})
document.querySelector("#cartpage").addEventListener("click",function(){
    window.location="cart.html"
})