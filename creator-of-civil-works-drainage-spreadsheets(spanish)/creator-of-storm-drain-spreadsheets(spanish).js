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
  const velocidad = document.getElementById("velocidad");
  const coeficiente= 0.3;
  const intensidad = document.getElementById("intensidad");
  const caudaldiseño= document.getElementById("caudaldiseño");
  const diametro=document.getElementById("diametro");

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
  
  function calcularFlujo(){
    const lTotal=parseFloat(lacumulada.textContent);
    tflujo.textContent =((lTotal || 0 ) / (parseFloat(velocidad.value) || 0)).toFixed(2);
   
  }
      velocidad.addEventListener("input", calcularFlujo);
      calcularFlujo();
  
  function calcularTiempo(){
    const flujo=parseFloat(tflujo.textContent);
    tconcentracion.textContent =(parseFloat(tentrada.value) || 0) +  flujo || 0;
  }
      tentrada.addEventListener("input", calcularTiempo);
      calcularTiempo();
  
  function calcularIntensidad(){
    const tconcentra=parseFloat(tconcentracion.textContent);
    intensidad.textContent= (668/Math.pow(9.4+tconcentra, 0.9)).toFixed(2);
  }
      tentrada.addEventListener("input", calcularIntensidad);
      calcularIntensidad();
  
   
  function calcularCaudalDeDiseño(){
    const a=parseFloat(aacumulada.textContent);
    const i=parseFloat(intensidad.textContent);
    caudaldiseño.textContent= (2.78*0.3*a*i).toFixed(2);
  }
      tentrada.addEventListener("input", calcularCaudalDeDiseño);
      calcularCaudalDeDiseño();
  
  
});