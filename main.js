function Toca () {
    document.querySelector('#som_tecla_toim').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;


while (Contador <lista.length) {
    lista[Contador].onclick = Toca;
    const classe = lista[Contador].classList[1]
    console.log(classe);
    Contador = Contador + 1;
    console.log(Contador);
}
  