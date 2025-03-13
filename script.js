document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openButton");
    const flowerContainer = document.getElementById("flowerContainer");
    const greetingMessage = document.getElementById("greetingMessage");

    openButton.addEventListener("click", function () {
        flowerContainer.classList.remove("hidden");
        greetingMessage.classList.remove("hidden");
        openButton.style.display = "none";
    });
});
