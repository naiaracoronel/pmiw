//Naiara Victoria Coronel y Ana Paz Parietti comisión 1
//El diagrama está actualizado
//Link de : https://youtu.be/8YSU6VJTjfM

let imagenes = [];
let estado;
let bestiario=[];
let nino;
let viaje;
let sonido;
let musica;

function preload() {
  for (let i=0; i<17; i++) {
    imagenes[i] = loadImage("data/pant"+i+".jpg");
  }
  bestiario=loadStrings("data/bestiario.txt");
  sonido=loadSound("data/puerta.mp3");
  musica=loadSound("data/musicafondo.mp3");
}

function setup() {
  createCanvas(640, 480);
  estado = "comienzo";
  textAlign(CENTER);
  stroke(0);
  fill(255);
  nino=false;
  viaje=false;
  musica.amp(0.1);
}


function draw() {
  background(10);

  //INICIO
  if (estado ==="comienzo") {
    cargarImagen(imagenes[0], 0, 0, 640, 480, RIGHT);
    textSize(100);
    text("Bestiario", width/2, 100);
    //botones
    botonDibujo2("Créditos", 350, 400, 120, 50);
    botonDibujo2("Comenzar", 100, 400, 200, 50);

    //CRÉDITOS
  } else if (estado==="creditos") {
    textSize(80);
    text("Créditos", width/2, 100);
    textSize(35);
    text("Bestiario de Julio Cortázar", width/2, 170);
    textSize(20);
    text("Trabajo Final de pmiw",width/2, 230);
    text("Imágenes hechas con ia", width/2, 350);
    textSize(25);
    text("Ana Paz Parietti 9353/8", width/2, 265);
    text("Naiara Victoria Coronel 119000/2", width/2, 300);
    //botón
    botonDibujo2("Volver", 20, 20, 120, 50);

    //CAP1 PANTALLA2
  } else if (estado==="pant2") {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Continuar", 350, 400, 150, 50);
    //párrafo
    escribirParrafos2(bestiario[0]);

    //CAP2 PANTALLA3
  } else if (estado==="pant3") {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Explorar la casa", 370, 400, 200, 50);
    botonDibujo2("Quedarte con tus primos", 35, 400, 300, 50);
    //párrafo
    escribirParrafos2(bestiario[1]);


    //CAP3 PANTALLA 4
  } else if (estado==="pant4") {//si elegis jugar con tus primos
    cargarImagen(imagenes[2], 0, 0, 640, 480, RIGHT);
    //boton
    botonDibujo2("Ir a cenar", 200, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[2]);


    //CAP5-6 PANTALLA 5
  } else if (estado==="pant5") {//capitulo5/6 cena y se habla del viaje
    cargarImagen(imagenes[3], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Ir al viaje", 100, 400, 200, 50);
    botonDibujo2("No ir al viaje", 350, 400, 200, 50);
    //parrafos
    escribirParrafos2(bestiario[3]);

    //CAP5-6 PANTALLA 6
  } else if (estado==="pant6") {//si elegis ir al viaje, te cuentan la reglas
    cargarImagen(imagenes[4], 0, 0, 640, 480, RIGHT);
    //boton
    botonDibujo2("Continuar", 100, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[4]);

    //CAP 8-9 PANTALLA 7
  } else if (estado==="pant7") {//capitulo 8/9 vuelven del viaje e isabel tiene un encuentro con el tigre
    cargarImagen(imagenes[5], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Quedarse en la casa", 330, 400, 250, 50);
    botonDibujo2("Irte de la casa", 100, 400, 200, 50);//se va de la casa, FINAL ALT 4
    //parrafo
    escribirParrafos2(bestiario[5]);

    //CAP10 PANTALLA 8
  } else if (estado==="pant8") {//se queda en la casa y la historia continua, le preguntan dónde está el tigre
    cargarImagen(imagenes[6], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Biblioteca", 350, 400, 130, 50);
    botonDibujo2("Estudio de Nene", 100, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[6]);

    //FINAL REAL PANTALLA 9
  } else if (estado==="pant9") {//FINAL REAL, ELEGISTE ESTUDIO
    cargarImagen(imagenes[8], 0, 0, 640, 480, RIGHT);
    //boton
    botonDibujo2("Volver a jugar", 100, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[7]);

    //FINAL ALT 1 PANTALLA 10
  } else if (estado==="pant10") {
    cargarImagen(imagenes[7], 0, 0, 640, 480, RIGHT);
    //boton
    botonDibujo2("Volver a jugar", 100, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[8]);

    //PANTALLA 11, elegiste explorar la cocina
  } else if (estado==="pant11") {
    cargarImagen(imagenes[11], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Confiar en Nino", 100, 400, 200, 50);
    botonDibujo2("No confiar en Nino", 350, 400, 210, 50);
    //parrafo
    escribirParrafos2(bestiario[9]);

    // PANTALLA12, VAS A EXPLORAR A BIBLIOTECA, DESPUÉS VAS A CENAR
  } else if (estado==="pant12") {
    cargarImagen(imagenes[16], 0, 0, 640, 480, RIGHT);
    //boton
    botonDibujo2("Ir a la cena", 100, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[11]);

    //PANTALLA 13, decidiste no ir al viaje familiar
  } else if (estado==="pant13") {
    cargarImagen(imagenes[14], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Quedarse en el cuarto", 80, 400, 250, 50);
    botonDibujo2("Ir a explorar", 380, 400, 140, 50);//ir a explorar
    //parrafo
    escribirParrafos2(bestiario[12]);

    //PANTALLA 14
  } else if (estado==="pant14") { //FINAL ALT 2, solo si no confías en nino, no viajas y decidís explorar.
    cargarImagen(imagenes[15], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Volver a jugar", 100, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[13]);

    //PANTALLA 15 FINAL ALT 4 final feliz
  } else if (estado==="pant15") { // la historia continúa, te preguntan donde esta el tigre y elegís biblioteca
    cargarImagen(imagenes[12], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Volver a jugar", 100, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[14]);

    //FINAL ALT 3 ISABEL SE VA 
  } else if (estado==="pant16") { // isabel se va de la casa
    cargarImagen(imagenes[9], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Volver a jugar", 100, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[15]);

    //PANTALLA 17, explorar la casa al principio
  } else if (estado==="pant17") {
    cargarImagen(imagenes[13], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Ir a la cocina", 100, 400, 200, 50);
    botonDibujo2("Ir a la biblioteca", 350, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[16]);

    //PANTALLA 18 te quedas en tu cuarto cuando la familia se va de viaje
  } else if (estado==="pant18") { // isa no va al viaje y se queda en su cuarto
    cargarImagen(imagenes[10], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Continuar", 100, 400, 200, 50);
    //parrafo
    escribirParrafos2(bestiario[17]);
  } else {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);//última pantalla
  }
}

function mousePressed() {
  if(!musica.isPlaying()){
        musica.loop(true); 
       }
  if (estado==="comienzo") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant2";
      sonido.play();
    }
    if (botonUso(350, 400, 115, 50)) {
      estado="creditos";
    }
  } else if (estado==="creditos") {
    if (botonUso(20, 20, 120, 50)) {
      estado="comienzo";
    }
  } else if (estado==="pant2") {
    if (botonUso(350, 400, 150, 50)) {
      estado="pant3";//avanzar
    }
  } else if (estado==="pant3") {
    if (botonUso(50, 400, 300, 50)) {
      estado="pant4";//quedarte con tus primos
    } else if (botonUso(370, 400, 200, 50)) {
      estado="pant17"; //explorar casa
    }
  } else if (estado==="pant4") {
    if (botonUso(200, 400, 200, 50)) {
      estado="pant5";//quedarte con tus primos
    }
  } else if (estado==="pant5") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant6";//ir al viaje
    } else if (botonUso(350, 400, 200, 50)) {
      estado="pant13";//no ir
      viaje=true;
    }
  } else if (estado==="pant6") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant7";//continuar
    }
  } else if (estado==="pant7") {
    if (botonUso(330, 400, 250, 50)) {
      estado="pant8";//se queda
    } else if (botonUso(100, 400, 200, 50)) {
      estado="pant16";//se va FINAL ALT 4
    }
  } else if (estado==="pant8") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant9";//estudio del Nene FINAL REAL
    } else if (botonUso(350, 400, 115, 50)) {
      estado="pant15";//FINAL ALTERNATIVO 4 final feliz
    }
  } else if (estado==="pant9") { // FINAL REAL
    if (botonUso(100, 400, 200, 50)) {  
      estado="pant3"; //volver
      nino=false;
      viaje=false;
    }
  } else if (estado==="pant10") { // FINAL ALT 1
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
      nino=false;
      viaje=false;
    }
  } else if (estado==="pant11") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant4"; // Confías en nino
    } else if (botonUso(350, 400, 115, 50)) {
      estado="pant12"; // No confías en nino
      nino=true;
    }
  } else if (estado==="pant12") {
    if (botonUso(100, 400, 200, 50)) {
      estado= "pant5" // vas a explorar la biblioteca y dsp vas a la cena
    }
  } else if (estado==="pant13") {
    if (botonUso(80, 400, 250, 50)) {
      estado="pant18";// te quedas en tu cuarto
    } else if  (botonUso(380, 400, 140, 50) && nino===true && viaje===true) {
      estado="pant14";
    } else {
      estado="pant10";// final alt 1
      // faltaría ver como cumplir el final alt 2
    }
  } else if (estado==="pant14") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant15") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
      nino=false;
      viaje=false;
    }
  } else if (estado==="pant16") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant17") {
    if (botonUso(100, 400, 200, 50)) {//elegiste ir a explorar la cocina
      estado= "pant11"
    } else if (botonUso(350, 400, 200, 50)) {//elegiste ir a explorar la biblioteca
      estado= "pant10";
    }
  } else if (estado==="pant18") {//elegiste quedarte en tu cuarto
    if (botonUso(100, 400, 200, 50)) {
      estado= "pant7"//la historia continua, encuentro con el tigre
    }
  }
  
}
