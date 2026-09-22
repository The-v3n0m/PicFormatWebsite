function showMessage(tool) {
    const message = document.getElementById("message");

    message.textContent = `${tool} is currently unavailable.`;
    message.classList.add("show");

    setTimeout(() => {
        message.classList.remove("show");
    }, 3000);
}