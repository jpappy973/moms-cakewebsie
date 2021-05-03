let numOfTimesPlayed = 0 ;

const CateringVid = document.querySelectorAll(".cateringVid");
const imgForVid = document.querySelectorAll(".vidImg");
const playButton = document.getElementById("playicon3");
const playButton1 = document.getElementById("playicon4");
const playButton2 = document.getElementById("playicon5");



imgForVid[0].addEventListener("click",()=>{ 
    numOfTimesPlayed++;
    RemoveClass(imgForVid[0], CateringVid[0])
    playVid(CateringVid[0],playButton);

});

CateringVid[0].addEventListener("click",()=>{ 
    numOfTimesPlayed++;
    playVid(CateringVid[0],playButton);
    

});

imgForVid[1].addEventListener("click",()=>{ 
    numOfTimesPlayed++;
    RemoveClass(imgForVid[1], CateringVid[1])
    playVid(CateringVid[1],playButton1);

});

CateringVid[1].addEventListener("click",()=>{ 
    numOfTimesPlayed++;
    playVid(CateringVid[1],playButton1);
    

});

imgForVid[2].addEventListener("click",()=>{ 
    numOfTimesPlayed++;
    RemoveClass(imgForVid[2], CateringVid[2])
    playVid(CateringVid[2],playButton2);

});

CateringVid[2].addEventListener("click",()=>{ 
    numOfTimesPlayed++;
    playVid(CateringVid[2],playButton2);

});


function RemoveClass(imgToHidde,Vid){
    imgToHidde.classList.add("none");
    Vid.classList.remove("none")
    console.log(imgToHidde.classList)

}


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
