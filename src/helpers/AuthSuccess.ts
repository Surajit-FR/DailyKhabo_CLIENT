export const closeAuthModal = () => {
    // Find the close button by its id and trigger a click event
    const closeButton = document.getElementById("closeAuthModalButton");
    if (closeButton) {
        closeButton.click();
    };
};