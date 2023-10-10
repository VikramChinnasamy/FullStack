function toggleLogout() {
    var logoutButton = document.getElementById("logout-button");

    if (logoutButton.style.display === "block") {
        logoutButton.style.display = "none";
    } else {
        logoutButton.style.display = "block";
    }
}

function logout() {
    // Implement your logout logic here.
    // For example, you can redirect to a logout page:
    window.location.href = "login.html";
}