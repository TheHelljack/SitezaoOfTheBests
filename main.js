function Toca () {
    document.querySelector('#som_tecla_toim').play();
}
const lista = document.querySelectorAll('.tecla');

let Contador = 0;


while (Contador <9) {
    const classe = lista[Contador].classList[1]
    console.log(classe);
    lista[Contador].onclick = Toca;
    Contador = Contador + 1;
    console.log(Contador);
}
  