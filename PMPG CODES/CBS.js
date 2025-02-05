document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".dayB");
    const colorBox = document.getElementById("color-box");

    const colors = {
        monday: "rgba(128, 0, 128, 0.5)",   // Purple
        tuesday: "rgba(255, 182, 193, 0.5)", // Pink
        wednesday: "rgba(0, 0, 255, 0.5)",   // Blue
        thursday: "rgba(0, 128, 0, 0.5)",    // Green
        friday: "rgba(255, 255, 0, 0.5)",    // Yellow
        saturday: "rgba(255, 165, 0, 0.5)",  // Orange
        sunday: "rgba(255, 0, 0, 0.5)",      // Red
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const day = button.getAttribute("data-day");
            colorBox.style.backgroundColor = colors[day];

            colorBox.classList.remove("hidden");
            setTimeout(() => {
                colorBox.classList.add("show");
            }, 50);
        });
    });

    document.body.addEventListener("click", (e) => {
        if (!e.target.classList.contains("dayB")) {
            colorBox.classList.remove("show");
            setTimeout(() => {
                colorBox.classList.add("hidden");
            }, 300);
        }
    });
});
