// Coronel naiara victoria, comisión 1
// link del video: https://youtu.be/bPW9_p_VAMA

let cant = 20;
let estadoOriginal = 0;
let modY;
let modX;
let tamX;
let tamY;
let limiteInf = 7;
let limiteSup = 12;
let obra;


function preload () {
  obra = loadImage ("data/obra.png");
}

function setup() {
  createCanvas (800, 400);
}


function draw() {
  background (255);
  dibujarGrafico(20, 20, mouseX);
}

function dibujarGrafico ( modX , modY , tam ) {
  image(obra, 0, 0, width/2, height);
  if ( estadoOriginal == 0 ) {
    fill ( 139, 69, 19 ) ;
  } else {
    fill ( 101, 107, 245 ) ;
  }
  for ( let x =0; x < cant; x++ ) { // For para las Columnas
    for ( let y =0; y < cant; y++ ) { // For para las filas
      tamX = calcularTam (x, limiteInf, limiteSup) ;
      tamY = calcularTam (y, limiteInf , limiteSup) ;
      tam = map ( mouseX, 0, width, 0, 10 );
      rect ( 400+x*modX, y*modY, tamX+tam, tamY+tam ) ;
    }
  }
}

function calcularTam (pos, limiteInf, limiteSup) {
  let tam=pos ;
  if ( pos>limiteInf && pos<limiteSup) { // cambie el error de los números en la función con parametros
     tam= limiteInf+1 ;
  }else if ( pos>=limiteSup && pos<=cant ) {   
    tam= cant-pos ; // reduce el tamaño de los rectánglos a medida que aumenta la pos de mouse
  }
  return tam ;

} 

function mousePressed () {
  if ( estadoOriginal == 0 ) {
    estadoOriginal = 1 ;
  } else {
    estadoOriginal = 0 ;
  }
}

function keyPressed () {
  if ( estadoOriginal == 0 ) {
    estadoOriginal = 1 ;
  } else {
    estadoOriginal = 0 ;
  }
}
