const sliderElement = document.getElementById('slider');


// xử lý slider
document.getElementById('next').onclick = function(){
    let list = document.querySelectorAll('.item');
    sliderElement.appendChild(list[0])
}

document.getElementById('prev').onclick = function(){
    let list = document.querySelectorAll('.item');
    sliderElement.prepend(list[list.length - 1])
}

// slider tự động sau 8s

setInterval(() => {
    let list = document.querySelectorAll('.item');
    sliderElement.appendChild(list[0])
}, 8000);


// xử lý ẩn navigation bar khi cuộn xuống
window.addEventListener("scroll", (e) => {
    let navbar = document.getElementById("navbar");
    if(window.scrollY > 80) {
        navbar.style.top = "-100px";
    }
    else {
        navbar.style.top = 0;
    }
})

// xử lý nút đăng nhập đăng xuất

if(Boolean(sessionStorage.getItem("login")) === true) {
    document.getElementById("login-btn").innerHTML = "Đăng xuất";
}


document.getElementById("login-btn").addEventListener("click", function () {
    if(this.innerHTML == "Đăng xuất") {
        sessionStorage.setItem("login", false);
        document.getElementById("login-btn").innerHTML = "Đăng nhập";
    }
})
