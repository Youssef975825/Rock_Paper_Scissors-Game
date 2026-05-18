let title = document.getElementById('title');
let userbox = document.getElementById('user');
let computerBox = document.getElementById('computer');
let icons = document.getElementById('icon');
let box = document.getElementById('box');
let recordUser = document.getElementById("record_U");
let recordComputer = document.getElementById("record_C");
let scoore_User = Number(localStorage.getItem("score_User")) || 0;
let scoore_Computer = Number(localStorage.getItem("score_Computer")) || 0;

recordUser.innerHTML = scoore_User;
recordComputer.innerHTML = scoore_Computer;

let isPlaying = false;

function winner(id, computerChoise){
    if(id == computerChoise){
        title.innerHTML = "Draw 😐";
    }
    else if(
        id === 'rock' && computerChoise === 'scissors' ||
        id === 'paper' && computerChoise === 'rock' ||
        id === 'scissors' && computerChoise === 'paper'
    ){
        title.innerHTML = "User Wins 🔥";
        scoore_User = Number(scoore_User) + 1;
        recordUser.innerHTML = scoore_User;
        localStorage.setItem("score_User", scoore_User);
    }
    else if(
        id === 'scissors' && computerChoise === 'rock' ||
        id === 'rock' && computerChoise === 'paper' ||
        id === 'paper' && computerChoise === 'scissors'
    ){
        title.innerHTML = "Computer Wins 💻";
        scoore_Computer = Number(scoore_Computer) + 1;
        recordComputer.innerHTML = scoore_Computer;
        localStorage.setItem("score_Computer", scoore_Computer);
    }

}
function show(id){
    if (isPlaying) return;
    isPlaying = true;
    computerBox.style.display = 'flex';

    const userIcon = {
        rock: "fa-regular fa-hand-back-fist",
        paper: "fa-regular fa-hand",
        scissors: "fa-regular fa-hand-scissors",
    };
    userbox.innerHTML = `<i class= "${userIcon[id]}"></i>`;
    const icon_Choosen = userbox.querySelector("i");
    if(id == "rock"){
        icon_Choosen.style.color = "#64748b";
    }
        else if(id == "paper"){
        icon_Choosen.style.color = "#38bdf8";
    }
        else if(id == "scissors"){
        icon_Choosen.style.color = "#ff3b3b";
    }

    const choise = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3)
    const computerChoise = choise[randomIndex];

    const computerIcon = {
        rock: "fa-regular fa-hand-back-fist",
        paper: "fa-regular fa-hand",
        scissors: "fa-regular fa-hand-scissors",
    };
    computerBox.innerHTML = `<i class= "${computerIcon[computerChoise]}"></i>`;
    const computer_Choosen = computerBox.querySelector("i");

        if(randomIndex == 0){
        computer_Choosen.style.color = "#64748b";
    }
        else if(randomIndex == 1){
        computer_Choosen.style.color = "#38bdf8";
    }
        else if(randomIndex == 2){
        computer_Choosen.style.color = "#ff3b3b";
    }

    winner(id, computerChoise);

    let dotsInterval = setInterval(() => {
        title.innerHTML += ".";
    }, 1000);
    
    setTimeout(function(){
        clearInterval(dotsInterval);
        title.innerHTML = "Let`s Go";
        userbox.innerHTML = "";
        computerBox.innerHTML = "";
        computerBox.style.display = 'none';
        isPlaying = false;
    }, 4000);
}

// localStorage.clear()

// ربط عناصر شاشة البداية
const startScreen = document.getElementById('start-screen');
const playBtn = document.getElementById('play-btn');

// عند الضغط على الزر يتم إخفاء شاشة المقدمة وتظهر اللعبة
playBtn.addEventListener('click', () => {
    startScreen.style.opacity = '0';
    setTimeout(() => {
        startScreen.style.display = 'none';
    }, 500);
});