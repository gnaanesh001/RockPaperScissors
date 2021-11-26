const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startgame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',  ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    }
    const playmatch = () => {
        const options = document.querySelectorAll('.options button');
        const phand = document.querySelector('.p-hands');
        const chand = document.querySelector('.c-hands');

        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            })
        })

        

    

        const cOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {

                const cNum = Math.floor(Math.random() * 3);
                const cChoice = cOptions[cNum];
                
                setTimeout(() => {
                    compareHands(this.textContent, cChoice);
                    phand.src = `./assets/${this.textContent}.png`;
                    chand.src = `./assets/${cChoice}.png`;
                }, 2000);

                
                phand.style.animation = "shakePlayer 2s ease";
                chand.style.animation = "shakeComputer 2s ease";

                compareHands(this.textContent, cChoice);

            })
        })


        
    }
    const updateScore = () => {
        const p_Score = document.querySelector('.p-score p');
        const c_Score = document.querySelector('.c-score p');
        p_Score.textContent = pScore;
        c_Score.textContent = cScore;


    }
    const compareHands = (pChoice, cChoice) => {
        const winner = document.querySelector('.winner');
        if (pChoice === cChoice)
        {
            winner.textContent = "It is a tie";
            updateScore();
            return;
        }
        if (pChoice === 'rock') {
            if (cChoice === 'scissors')
            {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();

                return;
            }
            else {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();

                return;
            }
        }   
        if (pChoice === 'paper') {
            if (cChoice === 'rock')
            {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();

                return;
            }
            else {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();

                return;
            }
        }   
        if (pChoice === 'scissors') {
            if (cChoice === 'paper')
            {
                winner.textContent = "Player wins";
                pScore++;
                updateScore();

                return;
            }
            else {
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();

                return;

            }
        }   
        
    }
    startgame();
    playmatch();
}
game();