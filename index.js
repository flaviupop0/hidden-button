let noButtons;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generate").addEventListener("click", function() {
        noButtons = parseInt(document.getElementById('numberButtons').value);
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
            if (i == winnerIndex) {
                button.addEventListener("click", function() {
                    button.textContent = 'You Won! 🎉'
                    document.getElementById('body').style.backgroundColor = 'green';
                    const buttons = buttonContainer.getElementsByTagName('button');
                    for (let j = 0; j < noButtons; ++j) {
                        buttons[j].disabled = true;
                    }
                })
            } else {
                button.addEventListener("click", function() {
                    button.textContent = 'That\'s not the right one 🥺';
                    document.getElementById('body').style.backgroundColor = 'red';
                })
            }
        }
    }, 10);
}