const pauseButton = document.getElementById("playicon");

const playButton1 = document.querySelectorAll(".vid1");

const cateringVid = document.querySelectorAll(".cateringVid");

const pauseButton2 = document.getElementById("playicon1");

const pauseButton3 = document.getElementById("playicon2");

const img4Vid = document.querySelectorAll(".cakeVidImg");




let numOfTimesPlayed= 0;



img4Vid[0].addEventListener("click",()=>{
    numOfTimesPlayed++;
    removeClass(img4Vid[0],playButton1[0]);
    playVid(playButton1[0],pauseButton3);
})


playButton1[0].addEventListener("click",()=>{
    numOfTimesPlayed += 1;
    playVid(playButton1[0],pauseButton3);
});

img4Vid[1].addEventListener("click",()=>{
    numOfTimesPlayed++;
    removeClass(img4Vid[1],playButton1[1]);
    playVid(playButton1[1],pauseButton);
})


playButton1[1].addEventListener("click",()=>{
    numOfTimesPlayed += 1;
    playVid(playButton1[1],pauseButton);
    
});

img4Vid[2].addEventListener("click",()=>{
    numOfTimesPlayed++;
    removeClass(img4Vid[2],playButton1[2]);
    playVid(playButton1[2],pauseButton2);
})

playButton1[2].addEventListener("click",()=>{
    numOfTimesPlayed += 1;
    playVid(playButton1[2],pauseButton2);
    
});




function removeClass (img,vid){
    img.classList.add("none");
    vid.classList.remove("none");
}



//add id of pause button conncented to videos
function playVid(vidToPlay,idOfpauseButton){
    vidToPlay.play(); 
    idOfpauseButton.classList.add("none");
    idOfpauseButton.classList.remove("playiconstyle");

    if(numOfTimesPlayed >= 3){
        numOfTimesPlayed= 1;
    }

    if(numOfTimesPlayed >= 2){
        
        vidToPlay.pause();
        numOfTimesPlayed=0;
        
    }
    
    
}
