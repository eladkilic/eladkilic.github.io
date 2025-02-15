document.getElementById("welcomeButton").addEventListener("click", function() {
    let name = prompt("ismini gir pleasee:");
    if(name) {
        showWelcomeMessage(name);
        changeBackground();
    }
});

function showWelcomeMessage(name){
    document.querySelector(".welcome-screen").style.display = "none";

    const newScreen = document.createElement("div");
    newScreen.className = "welcome-message-screen";

    const welcomeMessage = document.createElement("h1");
    welcomeMessage.textContent = `˗ˏˋ ´ˎ˗ hos geldin ${name} baci ˗ˏˋ ´ˎ˗`;
    newScreen.appendChild(welcomeMessage);

    const enterButton = document.createElement("button");
    enterButton.textContent =  "iceri gelsene ⋆.ೃ࿔*:･";
    enterButton.id = "enterButton";
    newScreen.appendChild(enterButton);

    document.body.appendChild(newScreen);

    enterButton.addEventListener("click", function() {
        showCalculatorScreen();
    });
}

function changeBackground() {
    document.body.style.backgroundImage = "url('file:/C:/Users/eladk/Downloads/sitem/background2.jpeg')";
}

function showCalculatorScreen(){

}

