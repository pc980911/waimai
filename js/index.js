window.onload = function () {

    //登录注册验证
    let name = document.querySelector(".v_name");
    let password = document.querySelector(".v_password");
    let dui_n = document.querySelector(".false_n");
    let dui_p = document.querySelector(".false_p");
    let name_z = document.querySelector(".name");
    let password_z = document.querySelector(".password");
    let over = document.querySelector(".none");
    console.log(over);

    name.onkeyup = function () {
        let val_n = name.value;
        let long_n = val_n.length;
        if (long_n === 11) {
            dui_n.style.display = "block";
            name_z.style.display = "none";
        } else {
            dui_n.style.display = "none";
            name_z.style.display = "block";
        }
    };
    password.onkeyup = function () {
        let val_p = password.value;
        let long_p = val_p.length;
        if (long_p === 8) {
            dui_p.style.display = "block";
            password_z.style.display = "none";
            over.classList.add("over");
        } else {
            dui_p.style.display = "none";
            password_z.style.display = "block";
            over.classList.remove("over");
        }
    }

    //获取验证码
    let weizhi=document.querySelector(".two")
    let pull = document.querySelector(".pull");
    pull.onclick = function () {
        weizhi.innerHTML = "" +
            "<img src=\"img/yzm-l.png\" alt=\"\">\n" +
            "\t\t\t\t\n" +
            "\t\t\t\t<p class=\"pull\">获取验证码</p>";
        let inputs = document.createElement("input");
        let number = Math.ceil(Math.random() * 8999 + 1000);
        inputs.value = number;
        weizhi.appendChild(inputs);
    }

}