const sonic = document.querySelector(".sonic");
   
const jump = () => {
    sonic.classList.add("jump");
};


document.addEventListener("click", jump); /* quando apertar click, executará essa função(jump) */