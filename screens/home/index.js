$(document).ready(function () {
    const sliderElement = document.getElementById('slider');

    // xử lý slider
    $('#next').click(function(){
        const list = document.querySelectorAll('.item');
        sliderElement.appendChild(list[0]);
    })

    $('#prev').click(function(){
        const list = document.querySelectorAll('.item');
        sliderElement.prepend(list[list.length - 1]);
    })


    // xử lý ẩn navigation bar khi cuộn xuống
    window.addEventListener("scroll", (e) => {
        let navbar = $("#navbar");
        let onTopBtn = $("#on-top-btn");

        if(window.scrollY > 80) {
            navbar.css("top", "-100px");
        }
        else {
            navbar.css("top", 0);
        }
        if(window.scrollY > navbar.height()) {
            onTopBtn.css("opacity", 1);
            onTopBtn.css("pointerEvents", "all");
        }
        else {
            onTopBtn.css("opacity", 0);
            onTopBtn.css("pointerEvents", "none");
        }
    })

    // xử lý nút đăng nhập đăng xuất

    if(Boolean(sessionStorage.getItem("login")) === true) {
        $("#login-btn").html("Đăng xuất");
    }


    $("#login-btn").on("click", function () {
        if(this.html() == "Đăng xuất") {
            sessionStorage.setItem("login", false);
            $("#login-btn").html("Đăng nhập");
        }
    })
        
});