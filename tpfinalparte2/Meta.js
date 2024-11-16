class Meta {
  constructor(px, py, an, al) {
    this.x = px;
    this.y = py-al;
    this.ancho = an;
    this.alto = al;
  }
  
  reiniciar(){
    this.x = width*4;
    this.y = height-80-200;
    this.ancho = 100;
    this.alto = 200;
  }
  mostrar() {
    image(imagenes[6], this.x, this.y, this.ancho, this.alto);
  }

  movimientoAvanzan() {
    console.log("se acerca a la meta");
    this.x -= 5;
  }
  movimientoRetroceden() {
    console.log("se aleja de lameta");
    this.x += 5;
  }
}
