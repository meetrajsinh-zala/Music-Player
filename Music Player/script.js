let progress = document.getElementById("prograss");
let song = document.getElementById("audio-bar");
let controlIcon = document.getElementById("play_btn");
let state = false;

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value =   song.currentTime;
}

function playPause(){
    if(controlIcon.classList.contains("btn")){
        song.play();
        controlIcon.classList.remove("btn");
        controlIcon.classList.add("btn_play");
        controlIcon.src = "images/pause-circle-svgrepo-com.svg";

    }
    else{
        song.pause();
        controlIcon.classList.add("btn");
        controlIcon.classList.remove("btn_play");
        controlIcon.src = "images/play-circle-svgrepo-com.svg"
    }
}

if(controlIcon.classList.contains("btn")){
    setInterval(()=>{
        progress.value = song.currentTime;
    },200);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.remove("btn");
    controlIcon.classList.add("btn_play");
    controlIcon.src = "images/pause-circle-svgrepo-com.svg";
}