let tg = window.Telegram.WebApp;
let add = document.getElementById("add");
let order = document.getElementById("order");
tg.expand();

add.addEventListener("click", () => {
    document.getElementById("form").style.display = "block";
    document.getElementById("user_name").value = tg.initDataUnsafe.user.first_name;
});

order.addEventListener("click", () => {
    let name = document.getElementById("user_name").value;
    let data = {
        name: name
    };
    tg.sendData(JSON.stringify(data));
    tg.close();
});