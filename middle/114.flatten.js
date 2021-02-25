// TODO:
let usename=document.getElementById('username');
let password=document.getElementById('password');
let password2=document.getElementById('password-2');

const vu=/^\w{3,10}$/
const vp=/^\w{6,20}$/
if(!vu.exec(usename.value)||!vp.exec(password.value)||password.value!==password2.value){
    console.log("false");
    return false;
}

}
