
 const btn=document.querySelector("button");
const bdy=document.body;
const currentColor=document.querySelector(".currentColor");
btn.addEventListener("click",()=>{
    const newColor=randomColorGenerator();
    bdy.style.backgroundColor=newColor;
    currentColor.textContent=newColor;
});

function randomColorGenerator(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const randomColor=`rgb(${red} ${green} ${blue})`;
    return randomColor;

}
