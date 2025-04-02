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
  const cotat1=document.getElementById("cotat1");
  const cotat2=document.getElementById("cotat2");
  const cotas1=document.getElementById("cotas1");
  const cotas2=document.getElementById("cotas2");
  const alturah1=document.getElementById("alturah1");
  const alturah2=document.getElementById("alturah2");
  const hpromedio=document.getElementById("hpromedio");
  const pendiente=document.getElementById("pendiente");
  const radio=document.getElementById("radio");
  const areatubo=document.getElementById("areatubo");
  const n=0.01;
  const caudaltubolleno=document.getElementById("caudaltubolleno");
  const coeficienteq = document.getElementById("coeficienteq");
  const coeficientev = document.getElementById("coeficientev");
  const coeficiented = document.getElementById("coeficiented");
  const coeficienter = document.getElementById("coeficienter");
  const gamma = document.getElementById("gamma");

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
  
  function calcularh1(){
    const ct1=parseFloat(cotat1.value);
    const cs1=parseFloat(cotas1.value);
    alturah1.textContent=ct1-cs1;
  }
  cotat1.addEventListener("input",calcularh1);
  cotas1.addEventListener("input",calcularh1);
  calcularh1();
  
  function calcularh2(){
    const ct2=parseFloat(cotat2.value);
    const cs2=parseFloat(cotas2.value);
    alturah2.textContent=ct2-cs2;
  }
  cotat2.addEventListener("input",calcularh2);
  cotas2.addEventListener("input",calcularh2);
  calcularh2();
  
  function calcularpendiente(){
    const cs1 = parseFloat(cotas1.value);
    const cs2 = parseFloat(cotas2.value);
    const l = parseFloat(lpropia.value);
    const suma=(cs1-cs2)*100/l;
    pendiente.textContent=suma.toFixed(2);
  }
  cotas1.addEventListener("input", calcularpendiente);
  cotas2.addEventListener("input", calcularpendiente);
  calcularpendiente();
  
  function calcularhpromedio(){
    const h1 = parseFloat(alturah1.textContent);
    const h2 = parseFloat(alturah2.textContent);
    const suma=(h1+h2)/2;
    hpromedio.textContent=suma.toFixed(2);
  }
  cotas1.addEventListener("input", calcularhpromedio);
  cotas2.addEventListener("input", calcularhpromedio);
  calcularhpromedio();
  
     function calcularradio(){
       const d=parseFloat(diametro.value);
       const operacion=parseFloat(d/4000);
       radio.textContent=(operacion).toFixed(3);
     }
  diametro.addEventListener("input", calcularradio);
  calcularradio();
  
     function calcularareatubo(){
       const d=diametro.value/1000;
       const a=parseFloat( 3.14159*Math.pow(d, 2)/4);
       areatubo.textContent=a.toFixed(3);
     }
  diametro.addEventListener("input", calcularareatubo);
  calcularareatubo();
  
     function calcularcaudalt(){
       const a=areatubo.textContent;
       const r=Math.pow(radio.textContent, 2/3);
       const s=Math.sqrt(pendiente.textContent/100);
       caudaltubolleno.textContent=(a*r*s*1000/n).toFixed(2);
     }
  diametro.addEventListener("input", calcularcaudalt);
  cotas1.addEventListener("input", calcularcaudalt);
  cotas2.addEventListener("input", calcularcaudalt);
  calcularcaudalt();
  
     function calcularcoeficienteq(){
       const q=caudaldiseño.textContent;
       const Q=caudaltubolleno.textContent;
       coeficienteq.textContent=(q/Q).toFixed(2);
     }
  diametro.addEventListener("input", calcularcoeficienteq);
  cotas1.addEventListener("input", calcularcoeficienteq);
  cotas2.addEventListener("input", calcularcoeficienteq);
  calcularcoeficienteq();
  
  
  const tablaDeRelaciones = [
  { a: 0.00, b: 0.000, c: 0.000, d: 0.000 },
  { a: 0.01, b: 0.326, c: 0.072, d: 0.186 },
  { a: 0.02, b: 0.398, c: 0.099, d: 0.251 },
  { a: 0.03, b: 0.448, c: 0.119, d: 0.300 },
  { a: 0.04, b: 0.488, c: 0.137, d: 0.341 },
  { a: 0.05, b: 0.522, c: 0.152, d: 0.377 },
  { a: 0.08, b: 0.599, c: 0.191, d: 0.464 },
  { a: 0.06, b: 0.551, c: 0.167, d: 0.409 },
  { a: 0.07, b: 0.576, c: 0.179, d: 0.437 },
  { a: 0.09, b: 0.620, c: 0.203, d: 0.488 },
  { a: 0.10, b: 0.641, c: 0.215, d: 0.513 },
  { a: 0.11, b: 0.658, c: 0.224, d: 0.533 },
  { a: 0.12, b: 0.675, c: 0.234, d: 0.555 },
  { a: 0.13, b: 0.690, c: 0.244, d: 0.573 },
  { a: 0.14, b: 0.705, c: 0.253, d: 0.592 },
  { a: 0.15, b: 0.720, c: 0.262, d: 0.611 },
  { a: 0.16, b: 0.733, c: 0.271, d: 0.627 },
  { a: 0.17, b: 0.746, c: 0.279, d: 0.644 },
  { a: 0.18, b: 0.757, c: 0.287, d: 0.659 },
  { a: 0.19, b: 0.770, c: 0.295, d: 0.675 },
  { a: 0.20, b: 0.781, c: 0.303, d: 0.690 },
  { a: 0.21, b: 0.792, c: 0.311, d: 0.704 },
  { a: 0.22, b: 0.802, c: 0.319, d: 0.718 },
  { a: 0.23, b: 0.813, c: 0.326, d: 0.732 },
  { a: 0.24, b: 0.822, c: 0.334, d: 0.745 },
  { a: 0.25, b: 0.831, c: 0.341, d: 0.758 },
  { a: 0.26, b: 0.840, c: 0.348, d: 0.770 },
  { a: 0.27, b: 0.849, c: 0.355, d: 0.783 },
  { a: 0.28, b: 0.858, c: 0.362, d: 0.794 },
  { a: 0.29, b: 0.866, c: 0.369, d: 0.806 },
  { a: 0.30, b: 0.874, c: 0.376, d: 0.817 },
  { a: 0.31, b: 0.882, c: 0.382, d: 0.828 },
  { a: 0.32, b: 0.890, c: 0.389, d: 0.839 },
  { a: 0.33, b: 0.897, c: 0.395, d: 0.850 },
  { a: 0.34, b: 0.904, c: 0.402, d: 0.860 },
  { a: 0.35, b: 0.911, c: 0.408, d: 0.870 },
  { a: 0.36, b: 0.918, c: 0.415, d: 0.880 },
  { a: 0.37, b: 0.925, c: 0.421, d: 0.890 },
  { a: 0.38, b: 0.932, c: 0.428, d: 0.900 },
  { a: 0.39, b: 0.938, c: 0.434, d: 0.908 },
  { a: 0.40, b: 0.944, c: 0.440, d: 0.918 },
  { a: 0.41, b: 0.950, c: 0.446, d: 0.927 },
  { a: 0.42, b: 0.956, c: 0.452, d: 0.935 },
  { a: 0.43, b: 0.962, c: 0.458, d: 0.943 },
  { a: 0.44, b: 0.968, c: 0.464, d: 0.952 },
  { a: 0.45, b: 0.974, c: 0.470, d: 0.961 },
  { a: 0.46, b: 0.979, c: 0.476, d: 0.969 },
  { a: 0.47, b: 0.985, c: 0.482, d: 0.977 },
  { a: 0.48, b: 0.990, c: 0.488, d: 0.985 },
  { a: 0.49, b: 0.995, c: 0.494, d: 0.992 },
  { a: 0.50, b: 1.000, c: 0.500, d: 1.000 },
  { a: 0.51, b: 1.005, c: 0.506, d: 1.007 },
  { a: 0.52, b: 1.010, c: 0.512, d: 1.015 },
  { a: 0.53, b: 1.015, c: 0.518, d: 1.022 },
  { a: 0.54, b: 1.019, c: 0.523, d: 1.029 },
  { a: 0.55, b: 1.024, c: 0.529, d: 1.036 },
  { a: 0.56, b: 1.028, c: 0.535, d: 1.043 },
  { a: 0.57, b: 1.033, c: 0.541, d: 1.049 },
  { a: 0.58, b: 1.037, c: 0.547, d: 1.056 },
  { a: 0.59, b: 1.041, c: 0.552, d: 1.062 },
  { a: 0.60, b: 1.045, c: 0.558, d: 1.068 },
  { a: 0.61, b: 1.049, c: 0.564, d: 1.075 },
  { a: 0.62, b: 1.053, c: 0.570, d: 1.081 },
  { a: 0.63, b: 1.057, c: 0.576, d: 1.087 },
  { a: 0.64, b: 1.061, c: 0.581, d: 1.093 },
  { a: 0.65, b: 1.065, c: 0.587, d: 1.098 },
  { a: 0.66, b: 1.068, c: 0.593, d: 1.104 },
  { a: 0.67, b: 1.072, c: 0.599, d: 1.110 },
  { a: 0.68, b: 1.075, c: 0.605, d: 1.115 },
  { a: 0.69, b: 1.079, c: 0.611, d: 1.120 },
  { a: 0.70, b: 1.082, c: 0.616, d: 1.125 },
  { a: 0.71, b: 1.085, c: 0.622, d: 1.131 },
  { a: 0.72, b: 1.088, c: 0.628, d: 1.135 },
  { a: 0.73, b: 1.092, c: 0.634, d: 1.140 },
  { a: 0.74, b: 1.095, c: 0.640, d: 1.145 },
  { a: 0.75, b: 1.097, c: 0.646, d: 1.150 },
  { a: 0.76, b: 1.100, c: 0.652, d: 1.154 },
  { a: 0.77, b: 1.103, c: 0.658, d: 1.159 },
  { a: 0.78, b: 1.106, c: 0.664, d: 1.163 },
  { a: 0.79, b: 1.108, c: 0.670, d: 1.167 },
  { a: 0.80, b: 1.111, c: 0.677, d: 1.171 },
  { a: 0.81, b: 1.113, c: 0.683, d: 1.175 },
  { a: 0.82, b: 1.116, c: 0.689, d: 1.179 },
  { a: 0.83, b: 1.118, c: 0.695, d: 1.182 },
  { a: 0.84, b: 1.120, c: 0.702, d: 1.186 },
  { a: 0.85, b: 1.123, c: 0.708, d: 1.189 },
  { a: 0.86, b: 1.125, c: 0.715, d: 1.193 },
  { a: 0.87, b: 1.126, c: 0.721, d: 1.196 },
  { a: 0.88, b: 1.128, c: 0.728, d: 1.199 },
  { a: 0.89, b: 1.130, c: 0.735, d: 1.201 },
  { a: 0.90, b: 1.132, c: 0.742, d: 1.204 },
  { a: 0.91, b: 1.133, c: 0.749, d: 1.206 },
  { a: 0.92, b: 1.135, c: 0.756, d: 1.209 },
  { a: 0.93, b: 1.136, c: 0.763, d: 1.211 },
  { a: 0.94, b: 1.137, c: 0.771, d: 1.212 },
  { a: 0.95, b: 1.138, c: 0.778, d: 1.214 },
  { a: 0.96, b: 1.139, c: 0.786, d: 1.215 },
  { a: 0.97, b: 1.139, c: 0.794, d: 1.216 },
  { a: 0.98, b: 1.140, c: 0.802, d: 1.217 },
  { a: 0.99, b: 1.140, c: 0.811, d: 1.217 }
];

  
  function calcularvdr() {
  const valorQ = parseFloat(coeficienteq.textContent) || 0;
  const entradaEncontrada = tablaDeRelaciones.find(entrada => 
    entrada.a.toFixed(2) === valorQ.toFixed(2)
  );
  
  if (entradaEncontrada) {
    coeficientev.textContent = entradaEncontrada.b.toFixed(3);
    coeficiented.textContent = entradaEncontrada.c.toFixed(3);
    coeficienter.textContent = entradaEncontrada.d.toFixed(3);
  } else {
    console.warn(`No se encontró coeficienteq = ${valorQ} en la tabla`);
  }
}
gamma.addEventListener("input", calcularvdr);
calcularvdr(); 
  
  
});