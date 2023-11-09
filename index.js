let noButtons, buttonsPress = 0, winnerIndex;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generate").addEventListener("click", function() {
        noButtons = parseInt(document.getElementById('numberButtons').value);
        if (noButtons <= 2) {
            alert("Please enter more than 2 buttons to generate");
        } else {
            generateButtons();
        }
    })
})  

function generateButtons() {
    const buttonContainer = document.getElementById('buttonContainer');
    document.getElementById('body').style.backgroundColor = 'white';
    setTimeout(function() {
        winnerIndex = Math.floor(Math.random() * noButtons);
        buttonContainer.innerHTML = '';
        buttonGenerator(buttonContainer);
    }, 10);
}

function buttonGenerator(container) {
    for (let i = 0; i < noButtons; ++i) {
        const button = document.createElement('button');
        button.textContent = 'Am I the choosen one?';
        button.classList.add('check');
        container.appendChild(button);
        const buttons = buttonContainer.getElementsByTagName('button');
        checkWinner(i, buttons, button);
    }
}

function checkWinner(index, buttons, button) {
    if (index == winnerIndex) {
        button.addEventListener("click", function() {
            button.textContent = 'You Won! 🎉'
            document.getElementById('body').style.backgroundColor = 'green';
            disableButtons(buttons);
            buttonsPress = 0;
        })
    } else {
        button.addEventListener("click", function() {
            ++buttonsPress;
            button.textContent = 'That\'s not the right one 🥺';
            document.getElementById('body').style.backgroundColor = 'red';
            if (buttonsPress == 3) {
                buttonsPress = 0;
                disableButtons(buttons);
                alert('You lost, try again by generating a new number of buttons');
            }
            button.disabled = true;
        })
    }
}

function disableButtons(buttons) {
    for (let j = 0; j < buttons.length; ++j) {
        buttons[j].disabled = true;
    }
}

