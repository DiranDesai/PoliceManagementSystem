const loginBtn = document.querySelector(".login-btn")
const policeId = document.querySelector("#policeId")
const password = document.querySelector("#password")
const loaderWrapper = document.querySelector(".loader-wrapper")


loginBtn.addEventListener("click", () => {
    const policeIdValue = policeId.value
    const passwordValue = password.value


    if (!policeIdValue || !passwordValue) {
        alert("Please fill all fields")
        return
    }

    if (policeIdValue == "2431210188" && passwordValue == "1234") {
        showLoader("index.html")
    }
    
})

function showLoader(redirect) {
    loaderWrapper.classList.remove("hidden")
    setTimeout(() => {
        loaderWrapper.classList.add("hidden")
        window.location.href = redirect
    }, 2000)

}