document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel-container").forEach((carousel) => {
      insertNumbers(carousel);
  
      carousel.querySelector(".prev").addEventListener("click", (e) => {
        minusItem(carousel);
      });
  
      carousel.querySelector(".next").addEventListener("click", () => {
        plusItem(carousel);
      });
  
      insertDots(carousel);
  
      carousel.querySelectorAll(".dot").forEach((dot) => {
        dot.addEventListener("click", (e) => {
          let item = Array.prototype.indexOf.call(
            e.target.parentNode.children,
            e.target
          );
  
          showItems(carousel, item);
        });
      });
  
      showItems(carousel, 0);
    });
  });
  
  function insertNumbers(carousel) {
    const length = carousel.querySelectorAll(".item").length;
    for (let i = 0; i < length; i++) {
      const nmbr = document.createElement("div");
      nmbr.classList.add("numbertext");
      nmbr.innerText = i + 1 + " / " + length;
  
      carousel.querySelectorAll(".item")[i].append(nmbr);
    }
  }
  
  function insertDots(carousel) {
    const dots = document.createElement("div");
    dots.classList.add("dots");
  
    carousel.append(dots);
  
    carousel.querySelectorAll(".item").forEach((elem) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
  
      carousel.querySelector(".dots").append(dot);
    });
  }
  
  function plusItem(carousel) {
    let item = currentItem(carousel);
  
    carousel
      .querySelectorAll(".item")
      [item].nextElementSibling.classList.contains("item")
      ? showItems(carousel, item + 1)
      : showItems(carousel, 0);
  }
  
  function minusItem(carousel) {
    let item = currentItem(carousel);
  
    carousel.querySelectorAll(".item")[item].previousElementSibling != null
      ? showItems(carousel, item - 1)
      : showItems(carousel, carousel.querySelectorAll(".item").length - 1);
  }    
  
  function currentItem(carousel) {
    return [...carousel.querySelectorAll(".item")].findIndex(
      (item) => item.style.display == "block"
    );
  }
  
  function showItems(carousel, item) {
    if (carousel.querySelectorAll(".item")[currentItem(carousel)] != undefined)
      carousel.querySelectorAll(".item")[currentItem(carousel)].style.display =
        "none";
    carousel.querySelectorAll(".item")[item].style.display = "block";
  
    if (carousel.querySelector(".dot.active") != null)
      carousel.querySelector(".dot.active").classList.remove("active");
    carousel.querySelectorAll(".dot")[item].classList.add("active");
  }
  


  // Movimiento bloques

  window.addEventListener("scroll", function (){
    let ventaja1 = document.querySelector(".ventaja1");
    let ventaja2 = document.querySelector(".ventaja2");
    let ventaja3 = document.querySelector(".ventaja3");
    let ventaja4 = document.querySelector(".ventaja4");




    var posicion1 = ventaja1.getBoundingClientRect().top;
    var posicion2 = ventaja2.getBoundingClientRect().top;
    var posicion3 = ventaja3.getBoundingClientRect().top;
    var posicion4 = ventaja4.getBoundingClientRect().top;

    
    let tama??oPantalla = window.innerHeight/1.1;
    if(posicion1 < tama??oPantalla){
        //ventaja1.style.animation = "mover 2s ease-out";
        ventaja1.classList.add("aparece");
        ventaja1.classList.add("transform");

        

        

        
        
    }
    if(posicion2 < tama??oPantalla){
        ventaja2.classList.add("aparece");
        ventaja2.classList.add("transform2");
    }
    if(posicion3 < tama??oPantalla){
        ventaja3.classList.add("aparece");
        ventaja3.classList.add("transform");
    }
    if(posicion4 < tama??oPantalla){
        ventaja4.classList.add("aparece");
        ventaja4.classList.add("transform2");
    }

    //ventaja1.style.left = "-22%"; 
   
});