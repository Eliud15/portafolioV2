let icon=document.querySelector("#icon");
let navespacial =document.querySelector("#navespacial");
navespacial.addEventListener('click',()=>{
    let humo =document.querySelector(".humo").style.visibility="visible";
    let alien =document.querySelector("#alien").innerHTML="! ΨΩαβγδεηθ"
});
setTimeout(()=>{
    let alien =document.querySelector("#alien").innerHTML="Hola terricola"
    let humo =document.querySelector(".humo").style.visibility="hidden";
},25000)
// icon.addEventListener('click', ()=>{
    
// })
// addEventListener("scroll",()=>{
//      let inicio=document.querySelector("#inicio");
//      let about=document.querySelector("#about");
//      let Habilidades=document.querySelector("#Habilidades");
//      let proyectos=document.querySelector("#proyectos");
    
//      if (window.scrollY <=0) {
//         inicio.style.borderBottom="2px solid #13a8fe";
//        }
//     if (window.scrollY >=30) {
//         let inicio=document.querySelector("#inicio");
//      inicio.style.borderBottom="0";
//     }
    
//     if(window.scrollY>=500){
//         about.style.borderBottom="2px solid #13a8fe"
//         if (window.scrollY >=900) {
//             about.style.borderBottom=""
//        }
//     }
//     if(window.scrollY<500){
//         about.style.borderBottom=""
//     }
//     if(window.scrollY>=1100){
        
//         Habilidades.style.borderBottom="2px solid #13a8fe"
//         if (window.scrollY >=1500) {
//             Habilidades.style.borderBottom=""
//        }
//     }
//     if(window.scrollY<1100){
//         Habilidades.style.borderBottom=""
//     }
    
//     if(window.scrollY>=1700){
//         proyectos.style.borderBottom="2px solid #13a8fe"
//     }
//     if(window.scrollY<1700){
//         proyectos.style.borderBottom=""
//     }
   
// })
// let about=document.querySelector("#about");
// let Habilidades=document.querySelector("#Habilidades");
// let proyectos=document.querySelector("#proyectos");
// const aboutF=()=>{
//      window.scroll(0,575,)
// }
// const habilidadesF=()=>{
//     window.scroll(0,1175)
// }
// const proyectosF=()=>{
//     window.scroll(0,1700)
// }
let flecha=document.querySelector("#flecha");
flecha.addEventListener("click",()=>{
    const quiensoy=document.querySelector("#quiensoy")
    quiensoy.classList.toggle("animacion-quiensoy")
    window.scroll(0,595)
    // setTimeout(()=>{
    //     window.scroll(0,1200)
    //     setTimeout(()=>{
    //         window.scroll(0,1890)
    //         setTimeout(()=>{
    //             window.scroll(0,2200)
    //         },10000)
    //     },8000)
    // },18000)
})