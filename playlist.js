const cards = document.querySelectorAll('.card');
let index = 0;

function showCard() {
    cards.forEach((c,i)=>{
        c.classList.toggle('hidden', i !== index);
    });
}

function next() {
    index = (index + 1) % cards.length;
    showCard();
}

function prev() {
    index = (index - 1 + cards.length) % cards.length;
    showCard();
}

function playSong(src, name) {
    const audio = document.getElementById('audio');
    const title = document.getElementById('songName');

    audio.src = src;
    audio.play();
    title.innerText = name + " 🎶";
}

function goNext() {
    window.location.href = "wishes.html"; // final surprise page
}
