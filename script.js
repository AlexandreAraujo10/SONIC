const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");

const jump = () => {
    sonic.classList.add("jump");
    sonic.src = "Arquivos/Sonic-Jump (1).gif";  /* esse comando substitui sonic pelo sonic-bolinha */

    setTimeout(() => {   /* é p/ remover o (jump), se não fica pulando constantemente */
        sonic.classList.remove("jump");  /* é p/ remover o (jump), se não fica pulando constantemente */
        sonic.src = "Arquivos/Sonic.gif";   /* esse comando é p/ quando o sonic-bolinha por o pé no chão ele voltará a ficar em pé */
    }, 900);  /* é p/ remover o (jump), se não fica pulando constantemente */
};

const loop = setInterval(() => {
    const eggmanPosition = eggman.offsetLeft;
    const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");

    if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220) { /* se o sonic não pular menos de 110px de distância e mais que 0px e mais alto que 220px, ele perde */
        eggman.style.animation = "none";
        eggman.style.left = `${eggmanPosition}px`;

        sonic.style.animation = "none";
        sonic.src ="Arquivos/Sonic-Loss.gif";
        sonic.style.width = "240px"  /* aumentar um pouco o tamanho do sonic morto(gameover) */
       
        fundo.src = "Arquivos/GameoverSMB-1.png"
    }
}, 10);


document.addEventListener("click", jump);