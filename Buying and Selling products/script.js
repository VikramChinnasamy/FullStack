
function goToBuyPage() {
    window.location.href = "Buy.html"; 
}

function goToSellPage() {
    window.location.href = "Sell.html"; 
}
// Event listeners
document.getElementById("buy-button").addEventListener("click", () => {
    
    goToBuyPage();
});

document.getElementById("sell-button").addEventListener("click", () => {
    
    goToSellPage();
});

function toggleLogout() {
    var logoutButton = document.getElementById("logout-button");

    if (logoutButton.style.display === "block") {
        logoutButton.style.display = "none";
    } else {
        logoutButton.style.display = "block";
    }
}

function logout() {
    window.location.href = "login.html";
}

