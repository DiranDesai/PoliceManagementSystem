const logo = document.querySelector(".logo")
const officerProfile = document.querySelector(".officer-profile")
const signOutBtn = document.querySelector(".signout-btn")
const loaderWrapper = document.querySelector(".loader-wrapper")



officerProfile.addEventListener("click", () => {
    showLoader("profile.html")
})

logo.addEventListener("click", () => {
    showLoader()
    window.location.href = "index.html"
})

signOutBtn.addEventListener("click", () => {
    window.location.href = "login.html"
})

function showLoader(redirect) {
    loaderWrapper.classList.remove("hidden")
    setTimeout(() => {
        loaderWrapper.classList.add("hidden")
        window.location.href = redirect
    }, 2000)

}