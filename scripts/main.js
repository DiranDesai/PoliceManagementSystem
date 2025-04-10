const logo = document.querySelector(".logo")
const officerProfile = document.querySelector(".officer-profile")
const signOutBtn = document.querySelector(".signout-btn")
const loaderWrapper = document.querySelector(".loader-wrapper")



officerProfile.addEventListener("click", () => {
    const data = showLoader()

    console.log(data)
    window.location.href = "profile.html"
})

logo.addEventListener("click", () => {
    showLoader()
    window.location.href = "index.html"
})

signOutBtn.addEventListener("click", () => {
    window.location.href = "login.html"
})

function showLoader() {
    loaderWrapper.classList.remove("hidden")
    setInterval(() => {
        loaderWrapper.classList.add("hidden")
        return true
    }, 2000)
}