const btn = document.querySelector('button');
btn.onclick = function() {
    // APAGANDO/INSERINDO ELEMENENTOS
    btn.style.display = 'none';
    const div = document.querySelector('div.button');
    const p = create(div);
    
    // MENSAGEM ESCURA
    showDarkMessage(div, p);
}

window.onfocus = function() {
    const numbers = [5, 8, 12, 16];
    const n = Math.floor(Math.random() * 4);
    const para = document.querySelector('p');
    para.style.color = 'white';
    para.style.fontSize = '2em';
    para.textContent = numbers[n]; 
}

function create(div) {
    const p = document.createElement('p');
    p.textContent = 'THERE´S NOTHING HERE.';
    div.appendChild(p);
    return p;
}

function showDarkMessage(div, p) {
    setInterval(function(div, p) {
        div.style.backgroundColor = 'black';
        p.style.color = 'red';
        p.textContent = 'COME OUT FROM HERE!!';
        p.style.fontSize = '4em';
        p.style.fontWeight = 'bolder';
    }, 10000, div, p);
}