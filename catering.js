let numOfTimesPlayed = 0 ;

const CateringVid = document.querySelectorAll(".cateringVid");
const PlayButton = document.getElementById("playicon3");
const playButton1 = document.getElementById("playicon4");
const playButton2 = document.getElementById("playicon5");


CateringVid[0].addEventListener("click",()=>{ 
    numOfTimesPlayed++;
    playVid(CateringVid[0],PlayButton);

});

CateringVid[1].addEventListener("click",()=>{ 
    numOfTimesPlayed++;
    playVid(CateringVid[1],playButton1);

});

CateringVid[2].addEventListener("click",()=>{ 
    numOfTimesPlayed++;
    playVid(CateringVid[2],playButton2);

});




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