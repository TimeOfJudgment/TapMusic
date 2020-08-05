window.addEventListener('load', ()=> {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
"#36b978",
"#6920df",
"#6e1e1e",
"#206fd8",
"#b62222",
"#bd7d34"
];


    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    // function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1.5s ease`;
        bubble.addEventListener('animationend',() => {
            visual.removeChild(visual.childNodes[0]);
        });
    }
});
