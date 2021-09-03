const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['hsl(0, 100%, 55%)','hsl(240, 100%, 55%)', 'hsl(147, 50%, 47%)', 'hsl(300, 76%, 49%)', 'hsl(39, 100%, 49%)', 'hsl(248, 53%, 58%)']

body.style.backgroundColor = 'white';
button.addEventListener('click', changeBG);

function changeBG(){
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}