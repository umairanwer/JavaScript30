document.querySelectorAll('.drumbtn').forEach((btn) => {
    btn.addEventListener('click', drumBeat);
    btn.addEventListener('transitionend', removeTransition);
});

document.addEventListener('keydown', drumBeat);

const drumKeys = ['a','s','d','f','g','h','j','k','l']
function drumBeat(e) {
    if(e.type == 'keydown' && drumKeys.includes(e.key.toLowerCase())){
        const keyPress = e.key.toLowerCase();
        console.log(keyPress);
        document.getElementById(`btn-${keyPress}`).classList.add('selected');
        const audio = document.querySelector(`#btn-${keyPress} audio`);
        audio.currentTime = 0;
        audio.play();
        return;
    }
    if(e.type == "click"){
        const parentBtn = e.target.closest('.drumbtn');
        parentBtn.classList.add('selected');
        const audio = parentBtn.querySelector('audio');
        audio.currentTime = 0;
        audio.play();
    }
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('selected');
}