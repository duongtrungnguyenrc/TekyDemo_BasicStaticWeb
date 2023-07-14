const contentGallery = ["Hello", "Welcome to Viet Nam", "Login"]

const formHeader = document.querySelector(".login-form-header");

// xử lý hiển thị intro trên form đăng nhập
function handleDisplayIntro(value) {
    let i = 0;
    let j = 1;
    let arrayString = value[0].split("");
    setTimeout(() => {
        const interval = setInterval(() => {
            formHeader.insertAdjacentText('beforeend', arrayString[i]);
            i++;
            if(i >= arrayString.length) {
                i=0;
                arrayString = value[j];
                j++;
                setTimeout(() => {
    
                }, 2000)
                if(j > value.length) {
                    clearInterval(interval);
                } else formHeader.innerHTML = "";
            }
        }, 100);
    }, 1000);
}

handleDisplayIntro(contentGallery);

// xử lý đăng nhập

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const loginInfo = {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value
    } 

    if(loginInfo.email === "admin@gmail.com" && loginInfo.password === "123") {
        sessionStorage.setItem("login", true);
        location.href = "../home";
    }
    else {
        alert("Incorrect user name or password!")
    }

    if(document.getElementById("save-password-btn").checked === true) {
        localStorage.setItem("userName", loginInfo.email);
        localStorage.setItem("password", loginInfo.password);
    }
})

if(localStorage.getItem("userName") && localStorage.getItem("password")) {
    document.getElementById("email").value = localStorage.getItem("userName")
    document.getElementById("password").value = localStorage.getItem("password")
}
