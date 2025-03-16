document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const body = document.body;
    let currentInput = "";

    function changeGradient() {
        const colors = ["red", "violet", "purple", "yellow", "green", "orange", "blue"];
        const color1 = colors[Math.floor(Math.random() * colors.length)];
        const color2 = colors[Math.floor(Math.random() * colors.length)];
        
        body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    }

    window.appendToDisplay = function(value) {
        currentInput += value;
        display.value = currentInput; 
        changeGradient(); 
    };

    window.clearDisplay = function() {
        currentInput = "";
        display.value = ""; 
    };

    window.backspace = function() {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput; 
    };

    window.calculateResult = function() {
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = "Error"; 
        }
        display.value = currentInput; 
    };
});
