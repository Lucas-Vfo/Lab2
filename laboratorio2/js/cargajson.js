
const value1 = document.getElementById('prueba1');
const value2 = document.getElementById('prueba2');
const mostrar1 = document.getElementById('mostrar1');
const mostrar2 = document.getElementById('mostrar2');


const mostrarb = (e)=> {
    let url = `${e.target.value}.json`;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const myObj = JSON.parse(this.responseText);

            if(e.target.id==='prueba1'){
                console.log(url);
                mostrarPais(myObj, e.target.value,mostrar1);
            }else if(e.target.id === 'prueba2'){
                mostrarPais(myObj, e.target.value,mostrar2);
            } 
          }
        };
        xmlhttp.open("GET",url , true);
        xmlhttp.send();
}

function mostrarPais(myObj,name,lista){
    if(name==='argentina'){
        argentina(myObj,lista);
    }
    else if(name === 'chile'){
        chile(myObj,lista);
    }
    else if(name === 'espana'){
        espana(myObj,lista);
    }
    else if(name === 'mexico'){
        mexico(myObj,lista);
    }
} 
    
function argentina(parsing,lista) {
    var muestra =   '<h1> MCs de FMS Argentina </h1>' +
                    '<ol>';
    console.log(parsing);
    const obj = Object.keys(parsing[0].nombres).map(key=>{
            const value = parsing[0].nombres[key];
            muestra += '<li>' + value + '</li>';
        });
    muestra += '</ol>';
    lista.innerHTML = muestra;
}

function chile(parsing,lista) {
    var muestra =   '<h1> MCs de FMS Chile </h1>' +
                    '<ol>';
    const obj = Object.keys(parsing.mcs).map(key=>{
        const value = parsing.mcs[key].nombre;
        muestra += '<li>' + value + '</li>';
    });
    muestra += '</ol>';
    lista.innerHTML = muestra;
}

function espana(parsing,lista) {
    var muestra =   '<h1> MCs de FMS España </h1>' +
                    '<ol>';
    const obj = Object.keys(parsing.nombres).map(key=>{
        const value = parsing.nombres[key];
        muestra += '<li>' + value + '</li>';
    });
    muestra += '</ol>';
    lista.innerHTML = muestra;
}

function mexico(parsing,lista) {
    var muestra =   '<h1> MCs de FMS Mexico </h1>' +
                    '<ol>';
    console.log(parsing);
    const obj = Object.keys(parsing[0].nombres).map(key=>{
            const value = parsing[0].nombres[key];
            muestra += '<li>' + value + '</li>';
        });
    muestra += '</ol>';
    lista.innerHTML = muestra;
}


value1.addEventListener('click', mostrarb);
value2.addEventListener('click', mostrarb);


function agregarNombre() {
    var nombre1 = document.getElementById('mc1').value;
    document.getElementById('part1').innerHTML = nombre1;

    var nombre2 = document.getElementById('mc2').value;
    document.getElementById('part2').innerHTML = nombre2;
}


function calcularResultado11() {
    var x11 = parseInt(document.getElementById('num11').value);
    var x12 = parseInt(document.getElementById('num12').value);
    var x13 = parseInt(document.getElementById('num13').value);
    var x14 = parseInt(document.getElementById('num14').value);
    var x15 = parseInt(document.getElementById('num15').value);
    var x16 = parseInt(document.getElementById('num16').value);
    var x17 = parseInt(document.getElementById('num17').value);
    var x18 = parseInt(document.getElementById('num18').value);
    var x19 = parseInt(document.getElementById('num19').value);
    
    var resultado1 = x11 + x12 + x13 + x14 + x15 + x16 + x17 + x18 + x19;
    document.getElementById('result1').innerHTML = resultado1;

    var x21 = parseInt(document.getElementById('num21').value);
    var x22 = parseInt(document.getElementById('num22').value);
    var x23 = parseInt(document.getElementById('num23').value);
    var x24 = parseInt(document.getElementById('num24').value);
    var x25 = parseInt(document.getElementById('num25').value);
    var x26 = parseInt(document.getElementById('num26').value);
    var x27 = parseInt(document.getElementById('num27').value);
    var x28 = parseInt(document.getElementById('num28').value);
    var x29 = parseInt(document.getElementById('num29').value);
    
    var resultado2 = x21 + x22 + x23 + x24 + x25 + x26 + x27 + x28 + x29;
    document.getElementById('result2').innerHTML = resultado2;

    // var verGanador1 = function (resultado1, resultado2) {
    //     if (resultado1 > resultado2){
    //         return verGanador1 =+ '<h3>' + document.getElementById('mc1').value + '</h3>';
    //     }
    //     else if(resultado1 == resultado2) {
    //         return '<h3>Empate</h3>';
    //     }
    //     return verGanador1 =+ '<h3>' + document.getElementById('mc2').value + '</h3>';
    // };

    // document.getElementById('ganador1').innerHTML = verGanador1;
}

function verGanador1() {

    var resultado1 = document.getElementById('result1').value;
    var resultado2 = document.getElementById('result2').value;

    if (resultado1 > resultado2){
        return verGanador1 =+ '<h3>' + document.getElementById('part1').innerHTML + '</h3>';
    }
    else if(resultado1 == resultado2) {
        return '<h3>Empate</h3>';
    }
    return verGanador1 =+ '<h3>' + document.getElementById('part2').innerHTML + '</h3>';

}



function calcularResultado12() {
    var x31 = parseInt(document.getElementById('num31').value);
    var x32 = parseInt(document.getElementById('num32').value);
    var x33 = parseInt(document.getElementById('num33').value);
    var x34 = parseInt(document.getElementById('num34').value);
    var x35 = parseInt(document.getElementById('num35').value);
    var x36 = parseInt(document.getElementById('num36').value);
    var x37 = parseInt(document.getElementById('num37').value);
    
    var resultado3 = x31 + x32 + x33 + x34 + x35 + x36 + x37;
    document.getElementById('result3').innerHTML = resultado3;

    var x41 = parseInt(document.getElementById('num41').value);
    var x42 = parseInt(document.getElementById('num42').value);
    var x43 = parseInt(document.getElementById('num43').value);
    var x44 = parseInt(document.getElementById('num44').value);
    var x45 = parseInt(document.getElementById('num45').value);
    var x46 = parseInt(document.getElementById('num46').value);
    var x47 = parseInt(document.getElementById('num47').value);

    var resultado4 = x41 + x42 + x43 + x44 + x45 + x46 + x47;
    document.getElementById('result4').innerHTML = resultado4;
}


