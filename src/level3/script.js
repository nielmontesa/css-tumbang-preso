document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.querySelector("textarea");
    const playerContainer = document.querySelector(".player-container");
    const statusElement = document.querySelector(".status");

    textarea.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const cssCode = textarea.value.trim();
            
            if (cssCode === "justify-content: space-between;") {
                playerContainer.style.cssText += cssCode;

                // Update status element
                statusElement.textContent = "Correct! Go to next level.";
                statusElement.style.color = "#82ff4d";

                // Play the "win" sound
                new Audio("../public/win.mp3").play();
            } else {
                playerContainer.style.cssText += cssCode;
                // Update status element
                statusElement.textContent = "Wrong! Try again.";
                statusElement.style.color = "#ff4d53";

                // Play the "wrong" sound
                new Audio("../public/wrong.mp3").play();
            }
        }
    });
});
