const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const app = express();
let PORT = process.env.PORT || 3000;

// Habilitar compresión gzip
app.use(compression());

// Middleware para logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Ruta de ping para probar conexión
app.get('/ping', (req, res) => {
    console.log('Ping recibido');
    res.send('pong');
});

// Servir archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

// Rutas específicas para contenido
app.get('/contenido/:materia/tema:id.html', (req, res) => {
    const { materia, id } = req.params;
    const filePath = path.join(__dirname, 'contenido', materia, `tema${id}.html`);
    console.log('Intentando cargar archivo:', filePath);
    
    // Verificar si el archivo existe
    if (!fs.existsSync(filePath)) {
        console.error('Archivo no encontrado:', filePath);
        return res.status(404).send('Archivo no encontrado');
    }
    
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error al enviar archivo:', err);
            res.status(500).send('Error al cargar el archivo');
        }
    });
});

// Rutas para recursos interactivos
app.get('/recursos/*', (req, res) => {
    const filePath = path.join(__dirname, req.path);
    console.log('Intentando cargar recurso:', filePath);
    
    if (!fs.existsSync(filePath)) {
        console.error('Recurso no encontrado:', filePath);
        return res.status(404).send('Recurso no encontrado');
    }
    
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error al enviar recurso:', err);
            res.status(500).send('Error al cargar el recurso');
        }
    });
});

// Ruta principal
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index-simple.html');
    console.log('Intentando cargar index simple:', indexPath);
    
    if (!fs.existsSync(indexPath)) {
        console.error('Index simple no encontrado:', indexPath);
        return res.status(404).send('Index simple no encontrado');
    }
    
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error al enviar index simple:', err);
            res.status(500).send('Error al cargar el index simple');
        }
    });
});

// Manejar rutas no encontradas
app.use((req, res) => {
    console.error('Ruta no encontrada:', req.url);
    res.status(404).send('Página no encontrada');
});

// Función para intentar iniciar el servidor en diferentes puertos
const startServer = () => {
    const server = app.listen(PORT)
        .on('error', (e) => {
            if (e.code === 'EADDRINUSE') {
                console.log(`Puerto ${PORT} está ocupado, intentando con el puerto ${PORT + 1}`);
                PORT += 1;
                server.close();
                startServer();
            } else {
                console.error('Error al iniciar el servidor:', e);
            }
        })
        .on('listening', () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
            console.log('Presiona Ctrl+C para detener el servidor');
        });
};

// Iniciar el servidor
startServer(); 