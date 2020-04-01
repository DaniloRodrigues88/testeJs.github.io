function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    //Bom dia
    img.src = 'Manha-pexels-photo-3068249.jpeg'
    document.body.style.background = '#e2cd9f'
} else if(hora >=12 && hora < 18){
    //Boa tarde
    img.src = 'Tarde-pexels-photo-69224.jpeg'
    document.body.style.background = '#b9846f'
} else {
    //Boa noite
    img.src = ' Noite-pexels-photo-2007136.jpeg'
    document.body.style.background = '#515154'
}
}

