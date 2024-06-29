const buttonColors = ["red", "blue", "green", "yellow"]
let red=document.getElementById("red");
let blue=document.getElementById("blue");
let green=document.getElementById("green");
let yellow=document.getElementById("yellow");
let body=document.getElementById("body");

const greenSound = document.getElementById('greenSound');
const redSound = document.getElementById('redSound');
const blueSound = document.getElementById('blueSound');
const yellowSound = document.getElementById('yellowSound');
const wrongSound= document.getElementById("wrongSound");

let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 1;
let access=false;

document.addEventListener('keypress', () => {
    started=true;
    if (started) {
        document.querySelector("#level-title").textContent = `Level ${level}`;
        // setTimeout(startgame, 2000);
        if(started){
            startgame()
        };
    }
})

function startgame(){
    
    
    for(let i=1;i<level+1;i++){
        console.log(`Level ${i}`);
        startpattern()
        setTimeout(startpattern, 2000)
        access=true;
        if(access==true){
        green.addEventListener("click",function(){
            greenSound.play();
            userClickedPattern.push("green");
            console.log(userClickedPattern);
            gamecondition();
        })
        red.addEventListener("click",function(){
            redSound.play();
            userClickedPattern.push("red");
            console.log(userClickedPattern);
            gamecondition();
        })
        blue.addEventListener("click",function(){
            blueSound.play();
            userClickedPattern.push("blue");
            console.log(userClickedPattern);
            gamecondition();
        })
        yellow.addEventListener("click",function(){
            yellowSound.play();
            userClickedPattern.push("yellow");
            console.log(userClickedPattern );
            gamecondition();
        })
        
    }
    else{
        console.log("no access");
    
    }


    }

function startpattern(){
    let index=getRandomNumber();
    //see which color got picked by random

    gamePattern.push(buttonColors[index]);
    console.log(gamePattern)

    if(buttonColors[index] == "red" || "blue" || "green" || "yellow"){
        console.log(buttonColors[index]);
    }
    if(buttonColors[index] == "red"){
        // addeffect(buttonColors[index]);
        red.add
        red.classList.add("pressed");
        setTimeout(remove, 1000)
        function remove(){
            red.classList.remove("pressed");
        }
        
    }
    if(buttonColors[index] == "blue"){
        // addeffect(buttonColors[index]);
        blue.classList.add("pressed");
        setTimeout(remove, 1000)
        function remove(){
            blue.classList.remove("pressed");
        }
    }
    if(buttonColors[index] == "green"){
        // addeffect(buttonColors[index]);
        green.classList.add("pressed");
        setTimeout(remove, 1000)
        function remove(){
            green.classList.remove("pressed");
        }
    }
    if(buttonColors[index] == "yellow"){
        // addeffect(buttonColors[index]);
        yellow.classList.add("pressed")
        setTimeout(remove, 1000)
        function remove(){
            yellow.classList.remove("pressed");
        }

    }

}

    




    console.log("waited 2sec")
}

function getRandomNumber() {
    return Math.floor(Math.random() * 4);
    
}



function gamecondition(){
    for(let i=0;i<userClickedPattern.length;i++){
        if(userClickedPattern[i] != gamePattern[i]){
            console.log("game ended");
            endgame();
        }
        else if(userClickedPattern[i] == gamePattern[i]){
            console.log("the same");
        }
    }
}


function removered(){
    body.classList.remove("gameended");
}

function endgame(){
    document.querySelector("#level-title").textContent = `Game Over, Press Any Key to Restart`;
    wrongSound.play();
    body.classList.add("gameended")
    setTimeout(removered, 500)
    started = false;
    access=false;
}


// if(started==true){
// green.addEventListener("click",function(){
//     greenSound.play();
//     userClickedPattern.push("green");
//     console.log(userClickedPattern);
//     gamecondition();
// })
// red.addEventListener("click",function(){
//     redSound.play();
//     userClickedPattern.push("red");
//     console.log(userClickedPattern);
//     gamecondition();
// })
// blue.addEventListener("click",function(){
//     blueSound.play();
//     userClickedPattern.push("blue");
//     console.log(userClickedPattern);
//     gamecondition();
// })
// yellow.addEventListener("click",function(){
//     yellowSound.play();
//     userClickedPattern.push("yellow");
//     console.log(userClickedPattern );
//     gamecondition();
// })
// }










// const buttonColors = ["red", "blue", "green", "yellow"];
// let gamePattern = [];
// let userClickedPattern = [];
// let started = false;
// let level = 0;

// document.addEventListener('keypress', () => {
//     if (!started) {
//         document.querySelector("#level-title").textContent = `Level ${level}`;
//         nextSequence();
//         started = true;
//     }
// });

// document.querySelectorAll(".btn").forEach(button => {
//     button.addEventListener("click", function () {
//         const userChosenColor = this.id;
//         userClickedPattern.push(userChosenColor);

//         playSound(userChosenColor);
//         animatePress(userChosenColor);

//         checkAnswer(userClickedPattern.length - 1);
//     });
// });

// function checkAnswer(currentLevel) {
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//         if (userClickedPattern.length === gamePattern.length) {
//             setTimeout(() => {
//                 nextSequence();
//             }, 1000);
//         }
//     } else {
//         playSound("wrong");
//         document.body.classList.add("game-over");
//         setTimeout(() => {
//             document.body.classList.remove("game-over");
//         }, 200);

//         document.querySelector("#level-title").textContent = "Game Over, Press Any Key to Restart";
//         startOver();
//     }
// }

// function nextSequence() {
//     userClickedPattern = [];
//     level++;
//     document.querySelector("#level-title").textContent = `Level ${level}`;
//     const randomNumber = Math.floor(Math.random() * 4);
//     const randomChosenColor = buttonColors[randomNumber];
//     gamePattern.push(randomChosenColor);

//     document.getElementById(randomChosenColor).classList.add("pressed");
//     setTimeout(() => {
//         document.getElementById(randomChosenColor).classList.remove("pressed");
//     }, 100);

//     playSound(randomChosenColor);
// }

// function playSound(name) {
//     const audio = new Audio(`sounds/${name}.mp3`);
//     audio.play();
// }

// function animatePress(currentColor) {
//     const activeButton = document.getElementById(currentColor);
//     activeButton.classList.add("pressed");
//     setTimeout(() => {
//         activeButton.classList.remove("pressed");
//     }, 100);
// }

// function startOver() {
//     level = 0;
//     gamePattern = [];
//     started = false;
// }




