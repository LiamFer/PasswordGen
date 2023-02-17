let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let valueElement = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-pass")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%";
let newpass = ""

valueElement.innerHTML = sliderElement.value;

slider.oninput = function (){
    valueElement.innerHTML = this.value;
}

function generator(){

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newpassword = pass;
}

function copy(){
    navigator.clipboard.writeText(newpassword);
}