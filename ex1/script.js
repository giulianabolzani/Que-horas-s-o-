function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas.'

    //CONDIÇÕES
    if (hora >= 0 && hora < 12){
        //bom dia!
        img.src = 'img/manha.png'
        document.body.style.background = '#c5b099'
    }
    else if (hora >= 12 && hora <= 18){
        //boa tarde!
        img.src = 'img/tarde.png'
        document.body.style.background = '#fea367'
    }
    else {
        //boa noite!
        img.src = 'img/noite.png'
        document.body.style.background = '#4b4b4b'
    }
}