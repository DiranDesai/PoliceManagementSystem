const logo = document.querySelector(".logo")
const officerProfile = document.querySelector(".officer-profile")
const signOutBtn = document.querySelector(".signout-btn")



officerProfile.addEventListener("click", () => {
    window.location.href = "profile.html"
})

logo.addEventListener("click", () => {
    window.location.href = "index.html"
})

signOutBtn.addEventListener("click", () => {
    window.location.href = "login.html"
})