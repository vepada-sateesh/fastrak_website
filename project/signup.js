document.querySelector("form").addEventListener("submit",datafun);

loginDetailsArr=[]
function datafun(event){
    event.preventDefault();
    
    obj={
        email:document.querySelector("#Email").value,
        password:document.querySelector("#Pass").value
    }
    loginDetailsArr.push(obj)
    console.log(obj)
    localStorage.setItem("UserData",JSON.stringify(loginDetailsArr))
    window.location="index.html"
}