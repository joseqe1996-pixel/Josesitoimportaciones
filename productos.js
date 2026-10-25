// ====== DATOS DE TU NEGOCIO (cambia lo que necesites) ======
const CONFIG = {
  negocio: "Josesito Importaciones",
  frase: "Productos importados al mejor precio",
  banner: "Ofertas de la semana",
  whatsapp: "51952971569",   // 51 + tu número, sin espacios ni signos
  yape: "952971569",
  titular: "Jose Manuel Quispe Endara"
};

// ====== TUS PRODUCTOS ======
// Para agregar uno: copia un bloque { ... }, pégalo con una coma al final y cambia los datos.
// La foto va en la carpeta "fotos". Si no hay precio anterior, borra la línea precioAntes.
const PRODUCTOS = [
  {
    nombre: "Pistola Antiestrés",
    categoria: "Juguetes",
    precio: 45.00,
    precioAntes: 55.00,
    fotos: ["fotos/pistola.jpg", "fotos/pistola1.jpg", "fotos/pistola3.jpg"],
    video: "videos/pistola.mp4"
  }
  // Para agregar otro producto: pon una coma después de la llave } de arriba y copia el bloque.
];
