const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 4000; // Cambiamos el puerto a 4000

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Middleware para registrar solicitudes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para el manifiesto de PWA
app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'manifest.json'));
});

// API endpoint para obtener lista de recursos
app.get('/api/recursos', (req, res) => {
  const recursos = {
    resumenes: [
      { id: 'quimica', titulo: 'Resumen de Química', url: '/recursos/resumenes/quimica/resumen_quimica.html' }
    ],
    simuladores: [
      { id: 'biologia', titulo: 'Simulador PAU Biología', url: '/recursos/simuladores/biologia/examen_pau.html' },
      { id: 'quimica', titulo: 'Simulador PAU Química', url: '/recursos/simuladores/quimica/examen_pau.html' }
    ],
    interactivos: [
      { id: 'tabla_periodica', titulo: 'Tabla Periódica Interactiva', url: '/recursos/interactivos/tabla_periodica.html' },
      { id: 'quiz', titulo: 'Quiz de Práctica', url: '/recursos/interactivos/quiz.html' }
    ]
  };
  res.json(recursos);
});

// Controlador de errores para archivos no encontrados
app.use((req, res, next) => {
  fs.access(path.join(__dirname, req.url), fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
    }
    next();
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log('Presiona Ctrl+C para detener el servidor');
}); 