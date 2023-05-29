const adminLoginbtn = () => {
    let emails = document.getElementById('email')
    const ema = emails.value

    let passw = document.getElementById('pass')
    const passwo = passw.value

    if (ema == "rafee@gmail.com" && passwo == "omar123"){
        window.location = "./page2.html"
    }
    else{
        alert('wrong email or password')
    }
}
// const log = () => {
//     window.location = './page2.html'
// }
const logout = () => {
    window.location = './index.html'
}
const Admin = () => {
    window.location = './index.html'
}

function toggleTable1() {
    var table = document.getElementById("notification");
    table.style.display = "table";
    var table = document.getElementById("manage");
    table.style.display = "none";
    var table = document.getElementById("new");
    table.style.display = "none";
    var table = document.getElementById("in");
    table.style.display = "none";
    var table = document.getElementById("ann");
    table.style.display = "none";
}
function toggleTable2() {
    var table = document.getElementById("manage");
    table.style.display = "table";
    var table = document.getElementById("notification");
    table.style.display = "none";
    var table = document.getElementById("new");
    table.style.display = "none";
    var table = document.getElementById("in");
    table.style.display = "none";
    var table = document.getElementById("ann");
    table.style.display = "none";


} function toggleTable3() {
    var table = document.getElementById("new");
    table.style.display = "table";
    var table = document.getElementById("notification");
    table.style.display = "none";
    var table = document.getElementById("manage");
    table.style.display = "none";
    var table = document.getElementById("in");
    table.style.display = "none";
    var table = document.getElementById("ann");
    table.style.display = "none";

} function toggleTable4() {
    var table = document.getElementById("in");
    table.style.display = "table";
    var table = document.getElementById("notification");
    table.style.display = "none";
    var table = document.getElementById("new");
    table.style.display = "none";
    var table = document.getElementById("manage");
    table.style.display = "none";
    var table = document.getElementById("ann");
    table.style.display = "none";

} function toggleTable5() {
    var table = document.getElementById("ann");
    table.style.display = "table";
    var table = document.getElementById("notification");
    table.style.display = "none";
    var table = document.getElementById("new");
    table.style.display = "none";
    var table = document.getElementById("in");
    table.style.display = "none";
    var table = document.getElementById("manage");
    table.style.display = "none";

}
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
  alert('A report has been sent to the IT Team');
});
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  alert('A report has been sent to the security team');
});
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
  alert('A report has been send to the Banker');
});
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
  alert('Apllied successfully');
});
const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
  alert('A report has been sent to the security team');
});
const btn6 = document.getElementById('btn6');
btn6.addEventListener('click', () => {
  alert('A report has been send to the Banker');
});
const btn7 = document.getElementById('btn7');
btn7.addEventListener('click', () => {
  alert(' Password is Omar123');
});