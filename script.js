document.addEventListener("DOMContentLoaded", function() {
    let nav = `
        <button class="nav-button" onclick="location.href='index.html'">Home</button>
        <button class="nav-button" onclick="location.href='services.html'">Services</button>
        <button class="nav-button" onclick="location.href='contact.html'">Contact</button>
    `;
    document.getElementById("navbar").innerHTML = nav;
});
