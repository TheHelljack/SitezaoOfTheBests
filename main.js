function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador <lista.length) {
    const tecla = lista[Contador]
    const classe = tecla.classList[1]
    const idAudio = `#som_${classe}`;
   
    tecla.onclick = function () {
        tocar(idAudio);
}
    Contador = Contador + 1;
tecla.onkeydown = function (evento);
    tecla.classList.add('ativa');
    console.log(evento.code === 'Space' || evento.code === 'Ent');
}
tecla.onkeyup = function () {
    tecla.classlist.remove('ativa');
}
    

  