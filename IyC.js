const nombre = document.getElementById("nombre");
const empresa= document.getElementById("empresa");
const email= document.getElementById("email");
const telefono= document.getElementById("telefono");
const mensaje= document.getElementById("mensaje");
const submit= document.getElementById("submit");


const resultado = document.querySelector(".resultado");
var imagen = document.querySelector(".imagen");
imagen.addEventListener("click", () =>{
    
    window.open('MiIndex.html');
});

/*
submit.addEventListener("click", (e)=>{
    
    e.preventDefault();

    let error = validarCampos();  
    if(error[0]){

       resultado.innerHTML = error[1];
       resultado.classList.add("red");
       resultado.classList.remove("red");

        
    }else{

        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
    }
})


const validarCampos= ()=>{

    let error= [];
    if(nombre.value.length < 5 || nombre.value.length > 40 ){
        error[0]= true;
        error[1]= "el nombre no puede tener menos de 5 caracteres o mas de 40";
        
        return error;


    }
    else if(email.value.length <5 || email.value.length > 40){
        error[0]= true;
        error[1]= "el email no puede tener menos de 5 caracteres o mas de 40";

        return error;
    }
    else{
        error[0]=false;
        return error;

    }
    
}*/
