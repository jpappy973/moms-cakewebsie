const pauseButton = document.getElementById("playicon");

const playButton1 = document.querySelectorAll(".vid1");

const cateringVid = document.querySelectorAll(".cateringVid");

const pauseButton2 = document.getElementById("playicon1");

const pauseButton3 = document.getElementById("playicon2");





// const pauseButton4 = document.getElementById("playicon3");


let numOfTimesPlayed= 0;

for(var i=0;i < playButton1.length;i++){
    playButton1[i].pause();
    console.log(playButton1[i])
}


playButton1[0].addEventListener("click",()=>{
    numOfTimesPlayed += 1;
    playVid(playButton1[0],pauseButton3);
});

playButton1[1].addEventListener("click",()=>{
    numOfTimesPlayed += 1;
    playVid(playButton1[1],pauseButton);
    
});

playButton1[2].addEventListener("click",()=>{
    numOfTimesPlayed += 1;
    playVid(playButton1[2],pauseButton2);
    
});

// cateringVid.addEventListener("click",()=>{
//     numOfTimesPlayed += 1;
//     playVid(cateringVid1[0],pauseButton4);
    
// });






//add id of pause button conncented to videos
function playVid(vidToPlay,idOfpauseButton){
    vidToPlay.play(); 
    idOfpauseButton.classList.add("none");
    idOfpauseButton.classList.remove("playiconstyle");

    if(numOfTimesPlayed >= 3){
        numOfTimesPlayed= 1;
    }

    if(numOfTimesPlayed >= 2){
        idOfpauseButton.classList.remove("none");
        idOfpauseButton.classList.add("playiconstyle");
        vidToPlay.pause();
        numOfTimesPlayed=0;
        
    }
    
    
}



