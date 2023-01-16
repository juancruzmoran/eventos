window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    /* En moviesAdd.ejs, establecer que, cada vez que se pase el mouse por el título
'AGREGAR PELÍCULA', este cambie su color.
 */
    titulo.addEventListener("mouseover", () => {
        titulo.classList.toggle("botonBorrar")
    })
    titulo.addEventListener("mouseout", () => {
        titulo.classList.toggle("botonBorrar")
    })

        /* En moviesAdd.ejs vamos con un desafío bastante más complejo. Tenemos que crear una
    máquina de estados. Nuestro objetivo será detectar cuando el usuario tipee de corrido la
    palabra “secreto”, en el input para ingresar el título de la película. El problema es que
    solamente podemos definir un evento cuando el usuario presiona una tecla y no cuando
    escribe toda una palabra. Por eso es que para empezar el ejercicio vamos a definir una
    variable estadoSecreto que empiece con el número 0. A partir de ahí, vamos a
    implementar un código interno que solo nosotros sabemos:
    ● 0 significa que todavía no escribió nada.
    ● 1 significa que escribió “s”.
    ● 2 significa que escribió “se”.
    ● 3 significa que escribió “sec”.
    ● 4 significa que escribió “secr”.
    ● 5 significa que escribió “secre”.
    ● 6 significa que escribió “secret”.
    ¿Qué debe hacer nuestro código?
    Definiremos un evento al presionar una tecla que implemente la siguiente lógica:
    1. Si el estado es 0 y se presiona la tecla S, la variable estadoSecreto pasa a 1.
    2. Si el estado es 1 y se presiona la tecla E, la variable estadoSecreto pasa a 2.
    3. Si el estado es 2 y se presiona la tecla C, la variable estadoSecreto pasa a 3.
    4. Si el estado es 3 y se presiona la tecla R, la variable estadoSecreto pasa a 4.
    5. Si el estado es 4 y se presiona la tecla E, la variable estadoSecreto pasa a 5.
    6. Si el estado es 5 y se presiona la tecla T, la variable estadoSecreto pasa a 6.
    7. Si el estado es 6 y se presiona la tecla O, la variable estadoSecreto vuelve a 0 y se
    dispara una alerta que diga “SECRETO MAGICO”.
    8. Si no se cumple ninguna de las condiciones, el estado vuelve a 0 */

    let inputTitulo = document.getElementById("titulo");
    let estadoSecreto = 0;
    

    inputTitulo.addEventListener("keypress", (e) => {
            /* if (estadoSecreto === 0 && e.key === "s") {
                ++estadoSecreto
                console.log(estadoSecreto)
            }else if (estadoSecreto === 1 && e.key === "e") {
                ++estadoSecreto
                console.log(estadoSecreto)
            }else if (estadoSecreto === 2 && e.key === "c") {
                ++estadoSecreto
                console.log(estadoSecreto)
            }else if (estadoSecreto === 3 && e.key === "r") {
                ++estadoSecreto
                console.log(estadoSecreto)
            }else if (estadoSecreto === 4 && e.key === "e") {
                ++estadoSecreto
                console.log(estadoSecreto)
            }else if (estadoSecreto === 5 && e.key === "t") {
                ++estadoSecreto
                console.log(estadoSecreto)
            }else if (estadoSecreto === 6 && e.key === "o") {
                ++estadoSecreto
                estadoSecreto = 0;
                alert("SECRETO MAGICO")
            }else{
                estadoSecreto = 0;
            } */

            switch (estadoSecreto) {
                case 0:
                    e.key === "s" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 1:
                    e.key === "e" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 2:
                    e.key === "c" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 3:
                    e.key === "r" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 4:
                    e.key === "e" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 5:
                    e.key === "t" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    break;
                case 6:
                    e.key === "o" ? ++estadoSecreto : estadoSecreto = 0;
                    console.log(estadoSecreto)
                    estadoSecreto === 7 && alert("SECRETO MAGICO")
                    estadoSecreto = 0;
                    break;
                default:
                    estadoSecreto = 0;
                    break;
            }

            /* let secreto = ["s", "e", "c", "r", "e", "t", "o"]
            
            for (let x = 0; x < secreto.length; x++) {
                if (estadoSecreto === x && e.key === secreto[x]) {
                    ++estadoSecreto
                    console.log(estadoSecreto)
                }else if( e.key !== secreto[x] || !secreto.includes(e.key)){
                    estadoSecreto = 0
                    console.log(estadoSecreto)
                }
            } */
    })

    

}