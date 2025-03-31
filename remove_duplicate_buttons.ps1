# Script para eliminar botones de navegación duplicados

# Función para procesar un archivo
function ProcessFile($filePath) {
    Write-Host "Procesando archivo: $filePath"
    
    # Leer contenido del archivo
    $content = Get-Content -Path $filePath -Raw
    
    # Verificar si contiene los botones de navegación duplicados
    if ($content -match '<div class="navigation-buttons">') {
        Write-Host "Encontrados botones duplicados en $filePath"
        
        # Reemplazar el bloque de navegación completo
        $newContent = $content -replace '<div class="navigation-buttons">[\s\S]*?</div>\s*</div>', '</div>'
        
        # Escribir el contenido actualizado
        Set-Content -Path $filePath -Value $newContent
        Write-Host "Botones eliminados en $filePath"
    } else {
        Write-Host "No se encontraron botones duplicados en $filePath"
    }
}

# Procesar todos los archivos de tema de biología
$biologiaFiles = Get-ChildItem -Path "contenido/biologia/" -Filter "tema*.html"
foreach ($file in $biologiaFiles) {
    ProcessFile $file.FullName
}

# Procesar todos los archivos de tema de química
$quimicaFiles = Get-ChildItem -Path "contenido/quimica/" -Filter "tema*.html"
foreach ($file in $quimicaFiles) {
    ProcessFile $file.FullName
}

Write-Host "Proceso completado" 