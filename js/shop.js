window.onload = function () {
    let shop_yes = document.querySelector(".yes");
    let shop_no = document.querySelector(".no");
    let jia = document.querySelectorAll(".more_shop")[2];
    let jian = document.querySelector(".minus");
    let number = document.querySelector(".number");
    let sum = document.querySelector(".sum");

    let time = 0;
    jia.onmouseup = function () {
        jian.style.display="block";
        number.style.display="block";
        time++;
        let speed = time;
        console.log(speed);
        number.innerText = speed;
        shop_no.style.display = "none";
        shop_yes.style.display = "block";
        sum.innerText = 12 * speed;
    };
    jian.onmouseup = function () {
        time--;
        let speed = time;
        console.log(speed);
        if (time === 0) {
            time=0;
            number.style.display="none";
            shop_no.style.display = "block";
            shop_yes.style.display = "none";
            jian.style.display="none";
        }
        number.innerText = speed;
        sum.innerText -= 12;
    }


}