// Esta función reemplaza la función cargarContenidoExterno en index.html
function cargarContenidoExterno(subject, temaId) {
    try {
        // Si el archivo no existe, no hagas nada y mantén el contenido actual
        console.log(`Intentando cargar contenido externo para ${subject} tema ${temaId}`);
        
        // Verificar si existe el detalle antes de intentar cargar contenido externo
        const detalleId = `detalle-${subject}-${temaId}`;
        const detalleExistente = document.getElementById(detalleId);
        
        if (!detalleExistente) {
            console.warn(`No se encontró el elemento ${detalleId} para cargar el contenido`);
            return;
        }
        
        // Si ya hay contenido en el detalle, no intentar cargar contenido externo
        if (detalleExistente.querySelector('.tema-section')) {
            console.log(`El tema ${subject} ${temaId} ya tiene contenido, no es necesario cargar del exterior`);
            return;
        }
        
        const ruta = `contenido/${subject}/tema${temaId}.html`;
        const rutaCompleta = window.location.origin + '/' + ruta;
        console.log(`Intentando cargar ${ruta}`);
        console.log(`Ruta completa: ${rutaCompleta}`);
        
        fetch(ruta)
            .then(response => {
                console.log(`Respuesta para ${ruta}: ${response.status} ${response.statusText}`);
                if (!response.ok) {
                    throw new Error(`No se pudo cargar ${ruta}: ${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                console.log(`Contenido recibido de ${ruta}, longitud: ${html.length} caracteres`);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                
                const contenidoTema = tempDiv.querySelector('.tema-detalle');
                if (contenidoTema) {
                    const detalleId = `detalle-${subject}-${temaId}`;
                    const actualDetalle = document.getElementById(detalleId);
                    
                    if (actualDetalle) {
                        console.log(`Contenido encontrado en ${ruta}, actualizando elemento ${detalleId}`);
                        actualDetalle.innerHTML = contenidoTema.innerHTML;
                        console.log(`Contenido de ${ruta} cargado correctamente`);
                    } else {
                        console.error(`Elemento ${detalleId} no encontrado para actualizar contenido`);
                    }
                } else {
                    console.error(`No se encontró el selector .tema-detalle en el contenido de ${ruta}`);
                    console.log(`Primeros 100 caracteres del contenido: ${html.substring(0, 100)}...`);
                }
            })
            .catch(error => {
                console.error(`Error al cargar contenido externo: ${error.message}`);
            });
    } catch (error) {
        console.error(`Error general en cargarContenidoExterno: ${error.message}`);
    }
} 