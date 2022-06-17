document.querySelector("#dec").addEventListener("click",decfun)
count=JSON.parse(localStorage.getItem("counter"))||1;
function decfun(){
    count--;
    localStorage.setItem("counter",JSON.stringify(count));
   // console.log(count)
   window.location.reload()
}
document.querySelector("#inc").addEventListener("click",incfun)

function incfun(){
    count++;
    localStorage.setItem("counter",JSON.stringify(count))
   // console.log(count)
   window.location.reload()
}
quantity=JSON.parse(localStorage.getItem("counter"))
console.log(quantity)
document.querySelector("#quantitybox").value=quantity;

document.querySelector("#finalprice").textContent=count*4995

document.querySelector("#ordertotal").textContent=count*6995;

document.querySelector("#discount").textContent=count*(-2000)

        document.querySelector("#subtotal").textContent=count*4995;

document.querySelector("#promo").addEventListener("click",function(){
    alert("promocode is fastrak123 get 100rs discount additional")
})

document.querySelector("#apply").addEventListener("click",function(){
    if(document.querySelector("#code").value=="fastrak123"){
        alert("promocode applyied successful")
        document.querySelector("#discount").textContent=(count*(-2000))-100

        document.querySelector("#subtotal").textContent=(count*4995)-100;
    }
    else{
        alert("invalid promocode")
    }
    
})

document.querySelector("#checkout").addEventListener("click",function(){
    window.location="cardDetails.html";
    
})