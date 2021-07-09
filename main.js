function transitionRemove(e){
    if(e.propertyName !== "transform") return;
    e.target.classList.remove("playing");

}

function plays(e){
    const sound= document.querySelector(`audio[board-key ="${e.keyCode}"]`);
    const key = document.querySelector(`div[board-key="${e.keyCode}"]`);
    if(!sound) return;

    key.classList.add("playing");
    sound.currentTime = 0;
    sound.play();

}
const keyboardKeys = Array.from(document.querySelectorAll(".key"));
keyboardKeys.forEach(key => key.addEventListener("transitionend",transitionRemove));
window.addEventListener("keydown",plays);