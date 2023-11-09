let noButtons;
let buttonsPress = 0;

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
        buttonContainer.innerHTML = '';
        const winnerIndex = Math.floor(Math.random() * noButtons);
        for (let i = 0; i < noButtons; ++i) {
            const button = document.createElement('button');
            button.textContent = 'Am I the choosen one?';
            button.classList.add('check');
            buttonContainer.appendChild(button);
            const buttons = buttonContainer.getElementsByTagName('button');
            if (i == winnerIndex) {
                button.addEventListener("click", function() {
                    button.textContent = 'You Won! 🎉'
                    document.getElementById('body').style.backgroundColor = 'green';
                    disableButtons(buttons);
                })
            } else {
                button.addEventListener("click", function() {
                    ++buttonsPress;
                    console.log(buttonsPress);
                    button.textContent = 'That\'s not the right one 🥺';
                    document.getElementById('body').style.backgroundColor = 'red';
                    if (buttonsPress == 3) {
                        disableButtons(buttons);
                        buttonsPress = 0;
                        alert('You lost, try again by generating a new number of buttons');
                    }
                })
            }
        }
    }, 10);
}

function disableButtons(buttons) {
    for (let j = 0; j < buttons.length; ++j) {
        buttons[j].disabled = true;
    }
}

