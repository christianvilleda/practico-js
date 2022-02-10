// Codigo del cuadrado
console.group("Cuadrado");


function  perimetroCuadrado(lado) {
    return lado * 4;
} 


function areaCuadrado(lado) {
    return  lado* lado;
} 


console.groupEnd();





// Codigo del triangulo
console.group("Triángulo");


   function perimetroTriangulo(lado1,lado2,base) {
       return  lado1 + lado2 + base;
   }
  
   function areaTriangulo(base, altura) {
    return  (base * altura) / 2;
}

    console.groupEnd();






    // Codigo del Circulo
console.group("Circulos");



//diametro 
function diametroCirculo(radio) {
   return radio * 2;
}


// PI
const PI = Math.PI;



//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


//area
function areacirculo(radio) {
    return  (radio * radio) * PI;
}



console.groupEnd();






//  Aquí interactuamos con el Html

function calcularPerimetroCuadrado () {
const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetro = perimetroCuadrado(value);
alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}


//triangulo 
function calcularPerimetroTriangulo () {
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    const ldo1 = Number ( input1.value );
    const ldo2 = Number ( input2.value );
    const bse  = Number ( input3.value );
    
    const perimetrot = perimetroTriangulo(ldo1,ldo2,bse);
    alert(perimetrot);
    }
    
    function calcularAreaTriangulo() {
        const input1 = document.getElementById("InputBase");
        const input2 = document.getElementById("InputAltura");
        const bset = Number ( input1.value );
        const alt =  Number ( input2.value );
        
        const areat = areaTriangulo(bset,alt);
        alert(areat);
    }





    // Circulo  

function calcularPerimetroCirculo () {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    //const diam = diametroCirculo(value);
    const perimetrcir = perimetroCirculo(value);
    alert(perimetrcir);
    }
    
    function calcularAreaCirculo() {
        const input = document.getElementById("InputRadio");
        const value = input.value;
        
       
        const areacir = areacirculo(value);
        alert(areacir);
    }