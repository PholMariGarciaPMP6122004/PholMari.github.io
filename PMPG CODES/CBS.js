document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".dayB");
    const box1 = document.getElementById("color-box1");
    const box2 = document.getElementById("color-box2");

    const colors = {
        monday: "rgba(128, 0, 128, 0.5)",  
        tuesday: "rgba(255, 182, 193, 0.5)", 
        wednesday: "rgba(0, 0, 255, 0.5)",   
        thursday: "rgba(0, 128, 0, 0.5)",   
        friday: "rgba(255, 255, 0, 0.5)",   
        saturday: "rgba(255, 165, 0, 0.5)",  
        sunday: "rgba(255, 0, 0, 0.5)",     
    };

    let activeBox = box1;
    let inactiveBox = box2;

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const day = button.getAttribute("data-day");

            inactiveBox.style.backgroundColor = colors[day];

            activeBox.classList.remove("active");
            activeBox.classList.add("exit");

            inactiveBox.classList.remove("exit");
            inactiveBox.classList.add("active");

            [activeBox, inactiveBox] = [inactiveBox, activeBox];
        });
    });
});
