

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let progressBAr = document.getElementById('myprogressbar')
let gif = document.getElementById('giff')
let songinfo = document.getElementById('songinfo')


let songs = [
    {songname :"Banarasiya",                filePath:"songs/1.mp3"},
    {songname :"Ghani Khamma2",             filePath:"songs/2.mp3"},
    {songname :"Main Koi aisa geet gaon",   filePath:"songs/3.mp3"},
    {songname :"Panna Ki Tamanna",          filePath:"songs/4.mp3"},
    {songname :"Sooyian-Arijit Singh",      filePath:"songs/5.mp3"},  
    {songname :"Tere Bina- A.R.Rahman",     filePath:"songs/6.mp3"},
    {songname :"Tumhare hi rahenge",        filePath:"songs/7.mp3"},   
    {songname :"Shiv Panchakshar Stotra",   filePath:"songs/8.mp3"},
    {songname :"Sajda- Rahat Fateh Ali Khan",filePath:"songs/9.mp3"},
    {songname :"Perfect-Ed Shareeon",        filePath:"songs/10.mp3"},
]

masterPlay.addEventListener('click', ()=>{

    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play()
        masterPlay.src = "pause.svg"
        songinfo.innerText = songs[songIndex-1].songname
        gif.style.opacity = 1
    }
    else{
        audioElement.pause()
        masterPlay.src = "playbtn.svg" 
        gif.style.opacity = 0
    }
})

audioElement.addEventListener('timeupdate',()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBAr.value = progress
})

progressBAr.addEventListener('change',()=>{
    audioElement.currentTime = progressBAr.value*audioElement.duration /100
})

const makeallplays =()=>{
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        const img = element.querySelector('img'); // Get the img inside the .play div
        img.src = "playbtn.svg";
    })
}
Array.from(document.getElementsByClassName('play')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays()
        const img = e.target.tagName === 'IMG' ? e.target : e.target.querySelector('img');
        img.src = "pause.svg"; // Set to pause icon

      
     songIndex = parseInt(e.target.id);

    // console.log(index); 

  
    audioElement.src = `songs/${songIndex}.mp3`; // Set the audio source
    audioElement.currentTime = 0; // Reset the song to the beginning
    audioElement.play();
    songinfo.innerText = songs[songIndex-1].songname
    gif.style.opacity = 1 // Play the song
    masterPlay.src = 'pause.svg'; 
    })
})

document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex <= 1){
        songIndex = 10
    }
    else{
       songIndex -= 1 
    }
    audioElement.src = `songs/${songIndex}.mp3`; // Set the audio source
    audioElement.currentTime = 0; // Reset the song to the beginning
    audioElement.play();
    songinfo.innerText = songs[songIndex-1].songname
    gif.style.opacity = 1 // Play the song
    masterPlay.src = 'pause.svg'; 
})
document.getElementById('nextsong').addEventListener('click',()=>{

    if(songIndex >= 10){
        songIndex = 1
    }
    else{
       songIndex += 1 
    }

    audioElement.src = `songs/${songIndex}.mp3`; // Set the audio source
    audioElement.currentTime = 0; // Reset the song to the beginning
    audioElement.play();
    songinfo.innerText = songs[songIndex-1].songname
    gif.style.opacity = 1 // Play the song
    masterPlay.src = 'pause.svg'; 

})
