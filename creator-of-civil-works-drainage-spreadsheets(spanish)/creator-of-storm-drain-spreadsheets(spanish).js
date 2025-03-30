document.addEventListener('DOMContentLoaded', function() {
    const lpropia = document.getElementById("lpropia");
    const ltributaria = document.getElementById("ltributaria");
    const lacumulada = document.getElementById("lacumulada");
    const apropia = document.getElementById("apropia");
    const atributaria = document.getElementById("atributaria");
    const aacumulada = document.getElementById("aacumulada");
    const tentrada = document.getElementById("tentrada");
    const tflujo = document.getElementById("tflujo");
    const tconcentracion = document.getElementById("tconcentracion");
  
    function calcularLongitud() {
        lacumulada.textContent = (parseFloat(lpropia.value) || 0) + parseFloat(ltributaria.value) || 0;     
    }
        lpropia.addEventListener("input", calcularLongitud);
        ltributaria.addEventListener("input", calcularLongitud);
        calcularLongitud();
    
     function calcularArea() {
        aacumulada.textContent = (parseFloat(apropia.value) || 0) + (parseFloat(atributaria.value) || 0);
     }
        apropia.addEventListener("input", calcularArea);
        atributaria.addEventListener("input", calcularArea);
        calcularArea();
    
      const lactual=parseFloat(lacumulada.textContent)||0;
      
    function calcularTiempo(){
     
      tflujo.textContent= (lactual)/(parseFloat(velo.value));
      tconcentracion.textContent =(parseFloat(tentrada.value) || 0) + parseFloat(tflujo.value) || 0;
    }
        tentrada.addEventListener("input", calcularTiempo);
        velo.addEventListener("input", calcularTiempo);
        calcularTiempo();
    
    
  });