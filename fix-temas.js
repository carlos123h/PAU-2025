// Script para corregir los errores en index.html

// 1. Obtener el index.html
fetch('index.html')
    .then(response => response.text())
    .then(html => {
        // 2. Buscar y reemplazar la sección de temas disponibles
        const nuevaLista = html.replace(
            /\/\/ Para Biología, temas disponibles son 1, 2[\s\S]*?temaIds\.push\(1, 2\);/,
            '// Para Biología, temas disponibles son 1, 2, 3, 4, 5, 9\n            else if (subject === \'biologia\') {\n                temaIds.push(1, 2, 3, 4, 5, 9);\n            }'
        );
        
        // 3. Actualizar la función cargarContenidoExterno para añadir depuración
        const nuevaFuncionCarga = nuevaLista.replace(
            /function cargarContenidoExterno[\s\S]*?try {[\s\S]*?const ruta = `contenido\/\${subject}\/tema\${temaId}\.html`;[\s\S]*?console\.log\(`Intentando cargar \${ruta}`\);/,
            'function cargarContenidoExterno(subject, temaId) {\n        try {\n            // Si el archivo no existe, no hagas nada y mantén el contenido actual\n            console.log(`Intentando cargar contenido externo para ${subject} tema ${temaId}`);\n            \n            // Verificar si existe el detalle antes de intentar cargar contenido externo\n            const detalleId = `detalle-${subject}-${temaId}`;\n            const detalleExistente = document.getElementById(detalleId);\n            \n            if (!detalleExistente) {\n                console.warn(`No se encontró el elemento ${detalleId} para cargar el contenido`);\n                return;\n            }\n            \n            // Si ya hay contenido en el detalle, no intentar cargar contenido externo\n            if (detalleExistente.querySelector(\'.tema-section\')) {\n                console.log(`El tema ${subject} ${temaId} ya tiene contenido, no es necesario cargar del exterior`);\n                return;\n            }\n            \n            const ruta = `contenido/${subject}/tema${temaId}.html`;\n            const rutaCompleta = window.location.origin + \'/\' + ruta;\n            console.log(`Intentando cargar ${ruta}`);\n            console.log(`Ruta completa: ${rutaCompleta}`);'
        );
        
        // 4. Mostrar los resultados
        document.body.innerHTML = `
            <h1>Correcciones aplicadas</h1>
            <p>Se han modificado las siguientes partes:</p>
            <ul>
                <li>Lista de temas disponibles para Biología</li>
                <li>Función cargarContenidoExterno con mejoras en depuración</li>
            </ul>
            <p>Descarga el archivo actualizado:</p>
            <button id="download">Descargar index.html actualizado</button>
        `;
        
        // 5. Configurar el botón de descarga
        document.getElementById('download').addEventListener('click', () => {
            const blob = new Blob([nuevaFuncionCarga], {type: 'text/html'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'index-fixed.html';
            a.click();
            URL.revokeObjectURL(url);
        });
    })
    .catch(error => {
        document.body.innerHTML = `
            <h1>Error</h1>
            <p>No se pudo cargar o modificar el archivo index.html:</p>
            <pre>${error.message}</pre>
        `;
    }); 