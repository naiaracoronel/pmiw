function cargarImagen(imagenes, x, y, ancho, alto, alineacion) {
  imageMode(alineacion);
  image(imagenes, x, y, ancho, alto);
}

function botonUso(x, y, ancho, alto) {
  return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
}

function escribirParrafos2(texto) {
  noStroke();
  fill(0, 150);
  rect(0, 0, width, 165);
  textAlign(LEFT);
  textSize(20);
  fill(255);
  text(texto, 30, 20, width-50);
}

function botonDibujo2(texto, x, y, ancho, alto) {
  push();
  if (botonUso(x, y, ancho, alto)) {
    fill(126, 216, 31);
  } else {
    fill(57, 103, 8);
  }
  noStroke();
  rect(x, y, ancho, alto, alto/4);
  escribirTitulo2(texto, x+ancho/2, y+alto/2);
  pop();
}

function escribirTitulo2(texto, x, y) {//para ecribir los botones
  push();
  textAlign(CENTER, CENTER);
  stroke(0);
  fill(255)
    textSize(25);
  text(texto, x, y);
  pop();
}
