// Este script genera una imagen PNG y la guarda como icon-144x144.png
const fs = require('fs');
const { createCanvas } = require('canvas');

// Crear un canvas de 144x144
const canvas = createCanvas(144, 144);
const ctx = canvas.getContext('2d');

// Dibujar fondo verde
ctx.fillStyle = '#2ecc71';
ctx.fillRect(0, 0, 144, 144);

// Dibujar cuadrado blanco redondeado en el centro
ctx.fillStyle = 'white';
const rectSize = 100;
const rectX = (144 - rectSize) / 2;
const rectY = (144 - rectSize) / 2;
const radius = 20;

ctx.beginPath();
ctx.moveTo(rectX + radius, rectY);
ctx.lineTo(rectX + rectSize - radius, rectY);
ctx.quadraticCurveTo(rectX + rectSize, rectY, rectX + rectSize, rectY + radius);
ctx.lineTo(rectX + rectSize, rectY + rectSize - radius);
ctx.quadraticCurveTo(rectX + rectSize, rectY + rectSize, rectX + rectSize - radius, rectY + rectSize);
ctx.lineTo(rectX + radius, rectY + rectSize);
ctx.quadraticCurveTo(rectX, rectY + rectSize, rectX, rectY + rectSize - radius);
ctx.lineTo(rectX, rectY + radius);
ctx.quadraticCurveTo(rectX, rectY, rectX + radius, rectY);
ctx.closePath();
ctx.fill();

// Dibujar texto "EP"
ctx.fillStyle = '#2ecc71';
ctx.font = 'bold 40px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('EP', 144/2, 144/2);

// Convertir a Buffer PNG
const buffer = canvas.toBuffer('image/png');

// Guardar archivo
fs.writeFileSync('recursos/icons/icon-144x144.png', buffer);

console.log('Icono creado correctamente: recursos/icons/icon-144x144.png'); 