let tg = window.Telegram.WebApp;
let add = document.getElementById("add");
let order = document.getElementById("order");
tg.expand();

/* add.addEventListener("click", () => {
    document.getElementById("form").style.display = "block";
    document.getElementById("user_name").value = tg.initDataUnsafe.user.first_name;
});*/

order.addEventListener("click", () => {
    let name = document.getElementById("user_name").value;
    let data = {
        name: name
    };
    tg.sendData(JSON.stringify(data));
    tg.close();
});

const input_p = document.querySelector('#prots');
const input_f = document.querySelector('#fats');
const input_c = document.querySelector('#carbs');
const input_k = document.querySelector('#kkals');

input_p.addEventListener('focus', () => {
  input_p.placeholder = 'г';
});

input_p.addEventListener('blur', () => {
  input_p.placeholder = 'Всего жиров (граммы)';
});


input_f.addEventListener('focus', () => {
  input_f.placeholder = 'г';
});

input_f.addEventListener('blur', () => {
  input_f.placeholder = 'Всего жиров (граммы)';
});

input_f.addEventListener('focus', () => {
  input_f.placeholder = 'г';
});

input_f.addEventListener('blur', () => {
  input_f.placeholder = 'Всего жиров (граммы)';
});

var kkal = 0;

input_p.addEventListener('input', () => {
    calculateTotalKkal();
});
input_f.addEventListener('input', () => {
    calculateTotalKkal();
});
input_c.addEventListener('input', () => {
    calculateTotalKkal();
});

function calculateTotalKkal() {
    var p = parseInt(input_p.value) || 0;
    var f = parseInt(input_f.value) || 0;
    var c = parseInt(input_c.value) || 0;

    kkal = p * 4 + f * 9 + c * 4;
    input_k.value = kkal;
}

