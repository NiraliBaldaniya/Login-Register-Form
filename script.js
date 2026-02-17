
const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.login');
const register = document.querySelector('.register');
const btn_popup = document.querySelector('.btn');
const icon_close = document.querySelector('.icon-close');
const toggleLogin = document.getElementById("toggleLogin");
const loginPassword = document.getElementById("loginPassword");


 register.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.add('active');
 });

 login.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.remove('active');
 });


 btn_popup .addEventListener("click", () => {
         wrapper.classList.add('active_popup');
 });

 icon_close .addEventListener("click", () => {
         wrapper.classList.remove('active_popup');
 });

 toggleLogin.addEventListener("click", () => {

    if (loginPassword.type === "password") {
           loginPassword.type = "text";
           toggleLogin.innerHTML = '<ion-icon name="eye"></ion-icon>';
        } 
    else {
        loginPassword.type = "password";
        toggleLogin.innerHTML = '<ion-icon name="eye-off"></ion-icon>';
         }

 });

