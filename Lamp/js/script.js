const image = document.getElementById('img-lamp');
const btn_on = document.getElementById('on');
const btn_off = document.getElementById('off');

function acender(){
    image.src = '/LAMPADA/img/on.jpg';
}

function apagar(){
    image.src = '/LAMPADA/img/off.jpg';
}
btn_on.addEventListener('click', acender);
btn_off.addEventListener('click', apagar);
image.addEventListener('mouseover', acender);
image.addEventListener('mouseleave', apagar);