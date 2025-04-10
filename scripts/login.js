const loginBtn = document.querySelector(".login-btn")
const policeId = document.querySelector("#policeId")
const password = document.querySelector("#password")


loginBtn.addEventListener("click", () => {
    const policeIdValue = policeId.value
    const passwordValue = password.value


    if (!policeIdValue || !passwordValue) {
        alert("Please fill all fields")
        return
    }

    if (policeIdValue == "2431210188" && passwordValue == "1234") {
        window.location.href = "index.html"
    }
    
})