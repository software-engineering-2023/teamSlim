const wrapper = document.querySelector('.wrapper');
const bankerLogin = document.querySelector('.banker-login');
const iconClose = document.querySelector('.icon-close');

bankerLogin.addEventListener('click', () =>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', () =>{
    wrapper.classList.remove('active-popup');
})



const bankerLoginbtn = () => {
    let emails = document.getElementById('email')
    const ema = emails.value

    let passw = document.getElementById('pass')
    const passwo = passw.value

    if (ema == "semo@gmail.com" && passwo == "semo123"){
        window.location = "./banke(rLogin).html"
    }
    else{
        alert('wrong email or password')
    }
}