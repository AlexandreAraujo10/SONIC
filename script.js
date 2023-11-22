const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");

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

    if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220) {
        eggman.Style.animation = "none";
    }
}, 10);


document.addEventListener("click", jump);