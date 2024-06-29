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
        startpattern();
        // setTimeout(startpattern, 2000)
        access=true;
        if(access==true){
        green.addEventListener("click",function(){
            greenSound.play();
            userClickedPattern.push("green");
            console.log(userClickedPattern);
            green.classList.add("pressed");
            setTimeout(remove, 500)
            function remove(){
            green.classList.remove("pressed");
            }
            gamecondition();
        })
        red.addEventListener("click",function(){
            redSound.play();
            userClickedPattern.push("red");
            console.log(userClickedPattern);
            red.classList.add("pressed");
            setTimeout(remove, 500)
            function remove(){
            red.classList.remove("pressed");
        }
        
            gamecondition();
        })
        blue.addEventListener("click",function(){
            blueSound.play();
            userClickedPattern.push("blue");
            console.log(userClickedPattern);
            blue.classList.add("pressed");
            setTimeout(remove, 500)
            function remove(){
            blue.classList.remove("pressed");
        }
            gamecondition();
        })
        yellow.addEventListener("click",function(){
            yellowSound.play();
            userClickedPattern.push("yellow");
            console.log(userClickedPattern );
            yellow.classList.add("pressed")
            setTimeout(remove, 500)
            function remove(){
            yellow.classList.remove("pressed");
        }
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
        redSound.play();
        // addeffect(buttonColors[index]);
        red.add
        red.classList.add("pressed");
        setTimeout(remove, 500)
        function remove(){
            red.classList.remove("pressed");
        }
        
    }
    if(buttonColors[index] == "blue"){
        blueSound.play();
        // addeffect(buttonColors[index]);
        blue.classList.add("pressed");
        setTimeout(remove, 500)
        function remove(){
            blue.classList.remove("pressed");
        }
    }
    if(buttonColors[index] == "green"){
        // addeffect(buttonColors[index]);
        greenSound.play();
        green.classList.add("pressed");
        setTimeout(remove, 500)
        function remove(){
            green.classList.remove("pressed");
        }
    }
    if(buttonColors[index] == "yellow"){
        yellowSound.play();
        // addeffect(buttonColors[index]);
        yellow.classList.add("pressed")
        setTimeout(remove, 500)
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
        else {
            for(let i = 0 ; i < userClickedPattern.length;i++){

                
        if(userClickedPattern[userClickedPattern.length-1] == gamePattern[gamePattern.length-1] && userClickedPattern.length==gamePattern.length){
            userClickedPattern=[];
            setTimeout(nextlevel,1000);
        }
    }
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



function nextlevel(){
    level+=1;
    document.querySelector("#level-title").textContent = `Level ${level}`;
    let index=getRandomNumber();
    //see which color got picked by random

    gamePattern.push(buttonColors[index]);
    console.log(gamePattern)

    if(buttonColors[index] == "red" || "blue" || "green" || "yellow"){
        console.log(buttonColors[index]);
    }
    if(buttonColors[index] == "red"){
        redSound.play();
        // addeffect(buttonColors[index]);
        red.classList.add("pressed");
        setTimeout(remove, 500)
        function remove(){
            red.classList.remove("pressed");
        }
        
    }
    if(buttonColors[index] == "blue"){
        blueSound.play();
        // addeffect(buttonColors[index]);
        blue.classList.add("pressed");
        setTimeout(remove, 500)
        function remove(){
            blue.classList.remove("pressed");
        }
    }
    if(buttonColors[index] == "green"){
        greenSound.play();
        // addeffect(buttonColors[index]);
        green.classList.add("pressed");
        setTimeout(remove, 500)
        function remove(){
            green.classList.remove("pressed");
        }
    }
    if(buttonColors[index] == "yellow"){
        yellowSound.play();
        // addeffect(buttonColors[index]);
        yellow.classList.add("pressed")
        setTimeout(remove, 500)
        function remove(){
            yellow.classList.remove("pressed");
        }

    }

}