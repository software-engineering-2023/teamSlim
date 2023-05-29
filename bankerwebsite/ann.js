const wrapper = document.querySelector('.wrapper');
const vpa = document.querySelector('.btn1');
const iconClose = document.querySelector('.icon-close');

vpa.addEventListener('click', () =>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', () =>{
    wrapper.classList.remove('active-popup');
})


const wrapper1 = document.querySelector('.wrapper1');
const a = document.querySelector('.btn');
const iconClose1 = document.querySelector('.icon-close1');

a.addEventListener('click', () =>{
    wrapper1.classList.add('active-popup');
})

iconClose1.addEventListener('click', () =>{
    wrapper1.classList.remove('active-popup');
})

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
  alert('Target Audience have Successfully Recieved Your Announcements.');
});