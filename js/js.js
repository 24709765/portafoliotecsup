

function Menu(){
    let nro_ejercicios = parseInt(
        prompt(
            "ingrese el numero de ejecicio que quiere ejecutar :. \r\n 1. suma. \r\n 2.suma m. \r\n 3.promediode exameness. \r\n 4.area de un triangulo. \r\n 5. area del rectangulo. \r\n 6.circunferencia. \r\n 7. horas trabajadas. \r\n 8. telas. \r\n 9. convertidor dedolares"

        )
    );
    if(isNaN(nro_ejercicios)){
        alert("profesor ingrese sus valores")
    }else{
        MenuEjercicios(nro_ejercicios)
    }
}

function MenuEjercicios(nro_ejercicios){ 
    let div =document.getElementById("mostrarEjercicios")
    switch(nro_ejercicios){
        case 1:
            let valor1 = parseFloat(prompt("ingrese el valor a :"));
            let valor2 = parseFloat(prompt("ingrese el valor a : "));
            
            div.innerHTML=`   
            <h1> el resultado del ejercicio ${nro_ejercicios} es </h1>
            <h2> ${eje1_sumarValores(valor1, valor2)} </h2>
            
            `
            break

        case 2:
            let valorA = parseFloat(prompt("ingresa el varor a"));
            let valorB = parseFloat(prompt("ingresa el valor b"));
            let valorC = parseFloat(prompt("engresa el valor c"));
            
            div.innerHTML=`
            <h1> el resultado del ejercicio ${nro_ejercicios} es </h1>
            <h2> ${eje2_sumarMultiplicar(valorA, valorB, valorC)} </h2>`
            break 

        case 3: 
             let nota1 = parseFloat(prompt("ingrese la nota 1"));
             let nota2 = parseFloat(prompt("ingrese  la nota 2"));
             let nota3 = parseFloat(prompt("ingresa la nota 3"));
             let nota4 = parseFloat(prompt("ingresa la nota 4"));
            
             div.innerHTML=`
            <h1> el resultado del ejercicio ${nro_ejercicios} es </h1>
            <h2> ${eje3_promedio(nota1, nota2, nota3, nota4)} </h2>`
            break 
             

         case 4:
             let baseT= parseFloat(prompt("ingrese la base"));
             let altura=parseFloat(prompt("ingrese su altura"));
             
             div.innerHTML=`
             <h1> el resultado del ejercicio ${nro_ejercicios} es </h1>
             <h2> ${eje4_areaTriangulo(baseT, altura)} </h2>`
             break  
             
         case 5:
             let  largo= parseFloat(prompt("ingrese el largo del rectangulo"));
             let  alto= parseFloat(prompt("ingrese el alto")) ;
             
             div.innerHTML=`
             <h1> el resultado del ejercicio ${nro_ejercicios} es </h1>
             <h2> ${eje5_arearectangulo(largo, alto)} </h2>`
             break
        case 6:
            let radio =parseFloat(prompt("ingrese radio"));
            
            div.innerHTML=`
            <h1> el resultado del ejercicio ${nro_ejercicios} es </h1>
            <h2> ${eje6_radio(radio)} </h2>`
            break
        case 7:
            let ht = +(prompt("ingrese horas trabajadas"));
            let ss = 40;
            
            div.innerHTML=`
            <h1> el resultado del ejercicio ${nro_ejercicios} es </h1>
            <h2> ${eje7_sueldosemanal(ht, ss)} </h2>`
            break
        case 8:
            let ct= +(prompt("ingrese cantidad de telas")) ;
            
            div.innerHTML=`
            <h1> el resultado del ejercicio ${nro_ejercicios} es </h1>
            <h2> ${eje8_telas(ct)} </h2>`
            break 
        case 9:
            let dolares = 3.70;
            let soles =+(prompt("ingrese  en soles"));
            
            div.innerHTML=`
            <h1> el resultado del ejercicio ${nro_ejercicios} es </h1>
            <h2> ${eje9_dolares(dolares, soles)} </h2>`
            break  



    }
}

function eje1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return "por favor ingrese valor"
    }else{
        return a+b;
    }
   
}

function eje2_sumarMultiplicar(a, b, c){
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        return "por favor ingrese valor numerico"
    }else{
        return (a+b)*c ;
    }
}

function eje3_promedio(a, b, c, d){
    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
        return "por favor ingrese valor numerico"
    }else{
        return (a+b+c+d)/4;
    }
}

function eje4_areaTriangulo(a, b){
    if(isNaN(a) || isNaN(b)){
        return "por favor ingrese valor numerico"
    }else{
        return  (a*b)/2;
    }
}

function eje5_arearectangulo(a, b){
    if(isNaN(a) || isNaN(b)){
        return "por favor ingrese valor numerico"
    }else{
        return  (a*b);
    } 
}

function eje6_radio(r){
    if(isNaN(r)){
        return "por favor ingrese valor numerico"
    }else{
        return  (r)=>(Math.PI(r*r));;
    } 

}

function eje7_sueldosemanal(a, b){
    if(isNaN(a) || isNaN(b)){
        return "por favor ingrese valor numerico"
    }else{
        return (a*b)*7 ;
    } 
}

function eje8_telas(a){
    if(isNaN(r)){
        return "por favor ingrese valor numerico"
    }else{
        return  (ct*(1/0.0254));
    } 
}

function eje9_dolares(a, b){
    if(isNaN(a) || isNaN(b)){
        return "por favor ingrese valor numerico"
    }else{
        return (ct*soles);
    } 
}
