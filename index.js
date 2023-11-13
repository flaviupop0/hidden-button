let noButtons,
    buttonsPress = 0,
    winnerIndex;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generate").addEventListener("click", function () {
        noButtons = parseInt(document.getElementById("numberButtons").value);
        if (noButtons <= 2) {
            alert("Please enter more than 2 buttons to generate");
        } else {
            generateButtons();
        }
    });
});

function generateButtons() {
    const buttonContainer = document.getElementById("buttonContainer");
    document.body.style.backgroundColor = "white";
    setTimeout(function () {
        winnerIndex = Math.floor(Math.random() * noButtons);
        buttonContainer.innerHTML = "";
        buttonGenerator(buttonContainer);
    }, 10);
}

function buttonGenerator(container) {
    for (let i = 0; i < noButtons; ++i) {
        const button = document.createElement("button");
        button.textContent = "Am I the chosen one?";
        button.classList.add("btn", "btn-primary", "ml-2", "mb-2");
        container.appendChild(button);
        attachButtonClickEvent(button, function () {
            checkWinner(i, button);
        });
    }
}

function attachButtonClickEvent(button, callback) {
    button.addEventListener("click", callback);
}

function disableButtons() {
    const buttons = document.getElementsByTagName("button");
    for (let j = 0; j < buttons.length; ++j) {
        if (buttons[j].id !== "generate") {
            buttons[j].disabled = true;
        }
    }
}

function checkWinner(index, button) {
    if (index === winnerIndex) {
        button.textContent = "You Won! 🎉";
        document.body.style.backgroundColor = "green";
        disableButtons();
        buttonsPress = 0;
    } else {
        ++buttonsPress;
        button.textContent = "That's not the right one 🥺";
        document.body.style.backgroundColor = "red";
        if (buttonsPress === 3) {
            buttonsPress = 0;
            disableButtons();
            alert("You lost, try again by generating a new number of buttons");
        }
        button.disabled = true;
    }
}
