

/*ventaja1.addEventListener("click", () => {
        alert("hola");
        ventaja1.style.top = ventaja1.style.top +10;
});*/


window.addEventListener("scroll", function (){
    let ventaja1 = document.querySelector(".ventaja1");
    let ventaja2 = document.querySelector(".ventaja2");
    let ventaja3 = document.querySelector(".ventaja3");
    let ventaja4 = document.querySelector(".ventaja4");




    var posicion1 = ventaja1.getBoundingClientRect().top;
    var posicion2 = ventaja2.getBoundingClientRect().top;
    var posicion3 = ventaja3.getBoundingClientRect().top;
    var posicion4 = ventaja4.getBoundingClientRect().top;

    
    let tamañoPantalla = window.innerHeight/1.1;
    if(posicion1 < tamañoPantalla){
        //ventaja1.style.animation = "mover 2s ease-out";
        ventaja1.classList.add("aparece");
        ventaja1.classList.add("transform");

        

        

        
        
    }
    if(posicion2 < tamañoPantalla){
        ventaja2.classList.add("aparece");
        ventaja2.classList.add("transform2");
    }
    if(posicion3 < tamañoPantalla){
        ventaja3.classList.add("aparece");
        ventaja3.classList.add("transform");
    }
    if(posicion4 < tamañoPantalla){
        ventaja4.classList.add("aparece");
        ventaja4.classList.add("transform2");
    }

    //ventaja1.style.left = "-22%"; 
   
});


