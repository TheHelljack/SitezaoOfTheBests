function tocar(idElementoAudio) {
    document.querySelector('idElementoAudio').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;


while (Contador <lista.length) {
    lista[Contador].onclick = function ()
    {tocar('#som_tecla_toim');
}
    const classe = lista[Contador].classList[1]
    console.log(classe);
    Contador = Contador + 1;
    console.log(Contador);
}
  