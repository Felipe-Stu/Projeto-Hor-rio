function carregar() {
    var msg = window.document.querySelector('div#msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos=data.getMinutes();
    var hora=hora+':'+minutos

    if (hora >= 5 && hora < 12) {
        msg.innerText = `Bom dia! Agora são ${hora} horas da manhã!`;
        img.src = './imgs/manha.png'
        window.document.body.style.background='#d5dee3'
    } else if (hora >12 && hora <= 17) {
        msg.innerText = `Boa tarde! Agora são ${hora} horas da tarde!`;
        img.src = './imgs/tarde.png'
        window.document.body.style.background='#e36a0f'
    } else {
        msg.innerText = `Boa noite! Agora são ${hora} horas da noite!`;
        img.src = './imgs/noite.png'
        window.document.body.style.background='#2b4f89'
    }
}