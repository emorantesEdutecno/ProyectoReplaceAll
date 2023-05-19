arregloColores=['#FF5500', '#FF99B2', '#FF99F5', '#BB99FF', '#99C5FE', '#00CEFF', '#01FFFE', '#00FF9F', '#B6FF01', '#FFFF00', '#FFB600'];
arregloPalabras=['sed', 'vehicula', 'vivamus', 'nam', 'eros', 'vestibulum', 'quam', 'sollicitudin', 'finibus', 'dictum', 'morbi'];
arregloRemplazos = ['UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE', 'DIEZ', 'ONCE'];
var resultadoTransformacion = '';

function transformarTexto(){
    let elParrafoTexto = document.getElementById('parrafoTexto').innerText;
    resultadoTransformacion = elParrafoTexto;
    // console.log(elParrafoTexto);
    let elParrafoTransformado = document.getElementById('parrafoTransformado');

    for (let i = 0; i < arregloColores.length; i++){
        let colorTemp = arregloColores[i];
        let patron = arregloPalabras[i];
        // console.log('patron: ', patron);
        let arregloTemp = elParrafoTexto.matchAll(patron);
        // console.log('arregloTemp: ', arregloTemp);
        let arrCantidadTemp = Array.from(arregloTemp);
        // console.log('cantidadTemp:',cantidadTemp);
        // console.log(typeof cantidadTemp);
        console.log(`%ccantidad${arregloPalabras[i]}: ${arrCantidadTemp.length}`, `color: ${colorTemp}`);
        resultadoTransformacion = resultadoTransformacion.replaceAll(`${arregloPalabras[i]}`, `${arregloRemplazos[i]}`);
        elParrafoTransformado.innerText = resultadoTransformacion;
    }
 
    
}

function asignarEventos(){
    let elBotonTransformar = document.getElementById('btnTransformar');
    elBotonTransformar.addEventListener('click', transformarTexto);
}