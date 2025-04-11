const logo = document.querySelector(".logo")
const officerProfile = document.querySelector(".officer-profile")
const signOutBtn = document.querySelector(".signout-btn")
const loaderWrapper = document.querySelector(".loader-wrapper")
const menuIcon = document.querySelector(".menu-icon")
const menuIconClose = document.querySelector(".menu-icon-close")
const sidebar = document.querySelector(".sidebar")



officerProfile.addEventListener("click", () => {
    showLoader("profile.html")
})

logo.addEventListener("click", () => {
    showLoader("index.html")
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

menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("move-left")
})
menuIconClose.addEventListener("click", () => {
    sidebar.classList.toggle("move-left")
})


//   // Chart 1: Cases by Status
//   const ctxStatus = document.getElementById('statusChart').getContext('2d');
//   const statusChart = new Chart(ctxStatus, {
//     type: 'doughnut',
//     data: {
//       labels: ['Open', 'Closed', 'Pending', 'Under Investigation'],
//       datasets: [{
//         label: 'Cases by Status',
//         data: [12, 8, 5, 3],
//         backgroundColor: ['#3498db', '#2ecc71', '#f1c40f', '#e67e22'],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'bottom'
//         }
//       }
//     }
//   });

//   // Chart 2: Top Crimes This Month
//   const ctxCrime = document.getElementById('crimeChart').getContext('2d');
//   const crimeChart = new Chart(ctxCrime, {
//     type: 'bar',
//     data: {
//       labels: ['Theft', 'Assault', 'Burglary', 'Fraud', 'Vandalism'],
//       datasets: [{
//         label: 'Cases',
//         data: [10, 7, 6, 4, 2],
//         backgroundColor: '#9b59b6',
//         borderRadius: 6
//       }]
//     },
//     options: {
//       responsive: true,
//       scales: {
//         y: {
//           beginAtZero: true,
//           ticks: {
//             stepSize: 1
//           }
//         }
//       },
//       plugins: {
//         legend: {
//           display: false
//         }
//       }
//     }
//   });
