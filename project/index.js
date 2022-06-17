document.querySelector("#log").addEventListener("click",login)
function login(){
    window.location="login.html"
}
loginName= JSON.parse(localStorage.getItem("UserData"));
console.log(loginName)
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

document.querySelector("#cart").addEventListener("click",cartfun)
function cartfun(){
    window.location="cart.html"
}