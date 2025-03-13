document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openButton");
    const flowerContainer = document.getElementById("flowerContainer");
    const greetingMessage = document.getElementById("greetingMessage");

    openButton.addEventListener("click", function () {
        flowerContainer.classList.remove("hidden");
        flowerContainer.style.display = "block";
        greetingMessage.classList.remove("hidden");
        greetingMessage.style.display = "block";
        openButton.style.display = "none";
    });
});
