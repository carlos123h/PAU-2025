import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

// Este es un componente de ejemplo para el tema de "La célula"
export default function TemaDetalleBiologia() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerNumber}>Tema 2</Text>
        <Text style={styles.headerTitle}>La Célula</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Introducción a la célula</Text>
          <Text style={styles.text}>
            La célula es la unidad morfológica y funcional de todo ser vivo. Es la estructura más pequeña capaz de realizar por sí misma las tres funciones vitales: nutrición, relación y reproducción.
          </Text>
          
          {/* Aquí iría una imagen de la célula */}
          <View style={styles.imageContainer}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>Imagen: Tipos de células</Text>
            </View>
          </View>
          
          <Text style={styles.subheading}>Características fundamentales:</Text>
          <Text style={styles.text}>
            • Todas las células están rodeadas por una membrana plasmática.
          </Text>
          <Text style={styles.text}>
            • Contienen material genético (ADN) que dirige sus actividades.
          </Text>
          <Text style={styles.text}>
            • Poseen citoplasma, una sustancia gelatinosa donde se encuentran los orgánulos celulares.
          </Text>
          <Text style={styles.text}>
            • Realizan las funciones vitales de nutrición, relación y reproducción.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Tipos de células</Text>
          
          <View style={styles.cellTypeBox}>
            <Text style={styles.cellTypeTitle}>Células procariotas</Text>
            <Text style={styles.text}>
              Características:
            </Text>
            <Text style={styles.text}>
              • No tienen núcleo definido; el material genético (ADN) se encuentra disperso en el citoplasma formando el nucleoide.
            </Text>
            <Text style={styles.text}>
              • Tamaño pequeño (1-10 µm).
            </Text>
            <Text style={styles.text}>
              • No tienen orgánulos membranosos.
            </Text>
            <Text style={styles.text}>
              • Presencia de ribosomas 70S.
            </Text>
            <Text style={styles.text}>
              • Ejemplos: bacterias y arqueas.
            </Text>
          </View>
          
          <View style={styles.cellTypeBox}>
            <Text style={styles.cellTypeTitle}>Células eucariotas</Text>
            <Text style={styles.text}>
              Características:
            </Text>
            <Text style={styles.text}>
              • Núcleo definido rodeado por membrana nuclear.
            </Text>
            <Text style={styles.text}>
              • Tamaño mayor (10-100 µm).
            </Text>
            <Text style={styles.text}>
              • Presencia de orgánulos membranosos (mitocondrias, retículo endoplasmático, aparato de Golgi, etc.).
            </Text>
            <Text style={styles.text}>
              • Presencia de ribosomas 80S.
            </Text>
            <Text style={styles.text}>
              • Ejemplos: células animales, vegetales, hongos y protistas.
            </Text>
          </View>
          
          <Text style={styles.subheading}>Diferencias entre células animales y vegetales:</Text>
          
          <View style={styles.comparisonContainer}>
            <View style={styles.comparisonColumn}>
              <Text style={styles.comparisonTitle}>Células animales</Text>
              <Text style={styles.text}>• Sin pared celular</Text>
              <Text style={styles.text}>• Sin cloroplastos</Text>
              <Text style={styles.text}>• Centríolos presentes</Text>
              <Text style={styles.text}>• Vacuolas pequeñas y numerosas</Text>
              <Text style={styles.text}>• Forma irregular</Text>
              <Text style={styles.text}>• Sin plasmodesmos</Text>
            </View>
            
            <View style={styles.comparisonColumn}>
              <Text style={styles.comparisonTitle}>Células vegetales</Text>
              <Text style={styles.text}>• Con pared celular (celulosa)</Text>
              <Text style={styles.text}>• Con cloroplastos</Text>
              <Text style={styles.text}>• Sin centríolos (mayoría)</Text>
              <Text style={styles.text}>• Vacuola central grande</Text>
              <Text style={styles.text}>• Forma regular</Text>
              <Text style={styles.text}>• Con plasmodesmos</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Orgánulos celulares</Text>
          
          <View style={styles.organelleBox}>
            <Text style={styles.organelleTitle}>Membrana plasmática</Text>
            <Text style={styles.text}>
              Estructura: Bicapa lipídica con proteínas integradas.
            </Text>
            <Text style={styles.text}>
              Función: Barrera selectiva que controla el intercambio de sustancias entre la célula y el medio externo.
            </Text>
          </View>
          
          <View style={styles.organelleBox}>
            <Text style={styles.organelleTitle}>Núcleo</Text>
            <Text style={styles.text}>
              Estructura: Rodeado por la envoltura nuclear (doble membrana), contiene cromatina y nucléolo.
            </Text>
            <Text style={styles.text}>
              Función: Centro de control celular; almacena el material genético (ADN) y dirige la síntesis de proteínas.
            </Text>
          </View>
          
          <View style={styles.organelleBox}>
            <Text style={styles.organelleTitle}>Ribosomas</Text>
            <Text style={styles.text}>
              Estructura: Compuestos por ARN ribosómico y proteínas; formados por dos subunidades.
            </Text>
            <Text style={styles.text}>
              Función: Síntesis de proteínas (traducción del ARNm).
            </Text>
          </View>
          
          <View style={styles.organelleBox}>
            <Text style={styles.organelleTitle}>Retículo endoplasmático rugoso (RER)</Text>
            <Text style={styles.text}>
              Estructura: Sistema de membranas con ribosomas adheridos.
            </Text>
            <Text style={styles.text}>
              Función: Síntesis y transporte de proteínas.
            </Text>
          </View>
          
          <View style={styles.organelleBox}>
            <Text style={styles.organelleTitle}>Retículo endoplasmático liso (REL)</Text>
            <Text style={styles.text}>
              Estructura: Sistema de membranas sin ribosomas.
            </Text>
            <Text style={styles.text}>
              Función: Síntesis de lípidos, detoxificación y almacenamiento de calcio.
            </Text>
          </View>
          
          <View style={styles.organelleBox}>
            <Text style={styles.organelleTitle}>Aparato de Golgi</Text>
            <Text style={styles.text}>
              Estructura: Conjunto de cisternas aplanadas y vesículas.
            </Text>
            <Text style={styles.text}>
              Función: Modificación, clasificación y empaquetamiento de proteínas y lípidos para su transporte.
            </Text>
          </View>
          
          <View style={styles.organelleBox}>
            <Text style={styles.organelleTitle}>Lisosomas</Text>
            <Text style={styles.text}>
              Estructura: Vesículas membranosas con enzimas hidrolíticas.
            </Text>
            <Text style={styles.text}>
              Función: Digestión intracelular de macromoléculas y orgánulos dañados.
            </Text>
          </View>
          
          <View style={styles.organelleBox}>
            <Text style={styles.organelleTitle}>Mitocondrias</Text>
            <Text style={styles.text}>
              Estructura: Doble membrana; la interna forma crestas y contiene la matriz mitocondrial.
            </Text>
            <Text style={styles.text}>
              Función: Respiración celular; producción de ATP (energía).
            </Text>
          </View>
          
          <View style={styles.organelleBox}>
            <Text style={styles.organelleTitle}>Cloroplastos</Text>
            <Text style={styles.text}>
              Estructura: Doble membrana; contienen tilacoides organizados en grana y estroma.
            </Text>
            <Text style={styles.text}>
              Función: Fotosíntesis; conversión de energía lumínica en energía química.
            </Text>
          </View>
          
          <View style={styles.organelleBox}>
            <Text style={styles.organelleTitle}>Citoesqueleto</Text>
            <Text style={styles.text}>
              Estructura: Red de filamentos proteicos (microfilamentos, filamentos intermedios y microtúbulos).
            </Text>
            <Text style={styles.text}>
              Función: Soporte estructural, movilidad celular y transporte intracelular.
            </Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. División celular</Text>
          
          <View style={styles.divisionBox}>
            <Text style={styles.divisionTitle}>Ciclo celular</Text>
            <Text style={styles.text}>
              Conjunto de etapas que atraviesa una célula desde su formación hasta su división en dos células hijas.
            </Text>
            <Text style={styles.text}>
              Fases:
            </Text>
            <Text style={styles.text}>
              • Interfase (G1, S, G2): Crecimiento celular y duplicación del ADN.
            </Text>
            <Text style={styles.text}>
              • Fase M: Mitosis (división nuclear) y citocinesis (división del citoplasma).
            </Text>
          </View>
          
          <View style={styles.divisionBox}>
            <Text style={styles.divisionTitle}>Mitosis</Text>
            <Text style={styles.text}>
              División nuclear que produce dos núcleos genéticamente idénticos.
            </Text>
            <Text style={styles.text}>
              Fases:
            </Text>
            <Text style={styles.text}>
              • Profase: Condensación de la cromatina, desaparición de la envoltura nuclear.
            </Text>
            <Text style={styles.text}>
              • Metafase: Alineación de los cromosomas en el ecuador de la célula.
            </Text>
            <Text style={styles.text}>
              • Anafase: Separación de las cromátidas hermanas hacia los polos opuestos.
            </Text>
            <Text style={styles.text}>
              • Telofase: Formación de las envolturas nucleares, descondensación de los cromosomas.
            </Text>
          </View>
          
          <View style={styles.divisionBox}>
            <Text style={styles.divisionTitle}>Meiosis</Text>
            <Text style={styles.text}>
              División celular que reduce a la mitad el número de cromosomas; produce células haploides (gametos).
            </Text>
            <Text style={styles.text}>
              Consta de dos divisiones consecutivas (meiosis I y meiosis II) con una sola replicación del ADN.
            </Text>
            <Text style={styles.text}>
              Importancia:
            </Text>
            <Text style={styles.text}>
              • Mantiene constante el número de cromosomas en la reproducción sexual.
            </Text>
            <Text style={styles.text}>
              • Genera variabilidad genética por recombinación y segregación aleatoria.
            </Text>
          </View>
        </View>
        
        <View style={styles.exercisesSection}>
          <Text style={styles.exercisesTitle}>Ejercicios tipo PAU</Text>
          
          <View style={styles.exerciseBox}>
            <Text style={styles.exerciseTitle}>Ejercicio 1</Text>
            <Text style={styles.text}>
              Compara las células procariotas y eucariotas indicando tres diferencias estructurales.
            </Text>
            <TouchableOpacity style={styles.solutionButton}>
              <Text style={styles.solutionButtonText}>Ver solución</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.exerciseBox}>
            <Text style={styles.exerciseTitle}>Ejercicio 2</Text>
            <Text style={styles.text}>
              Explica la estructura y función de las mitocondrias y los cloroplastos. ¿Qué teoría explica su origen?
            </Text>
            <TouchableOpacity style={styles.solutionButton}>
              <Text style={styles.solutionButtonText}>Ver solución</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.exerciseBox}>
            <Text style={styles.exerciseTitle}>Ejercicio 3</Text>
            <Text style={styles.text}>
              Describe las fases de la mitosis y explica su importancia biológica.
            </Text>
            <TouchableOpacity style={styles.solutionButton}>
              <Text style={styles.solutionButtonText}>Ver solución</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Tema anterior</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Tema siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  header: {
    backgroundColor: '#2ecc71',
    padding: 20,
    alignItems: 'center',
  },
  headerNumber: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  imagePlaceholder: {
    width: 250,
    height: 150,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  imagePlaceholderText: {
    color: '#777',
    fontWeight: 'bold',
  },
  cellTypeBox: {
    backgroundColor: '#eafaf1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#2ecc71',
  },
  cellTypeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 8,
  },
  organelleBox: {
    backgroundColor: '#f0fff0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#27ae60',
  },
  organelleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 8,
  },
  comparisonContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  comparisonColumn: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  comparisonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16a085',
    marginBottom: 8,
    textAlign: 'center',
  },
  divisionBox: {
    backgroundColor: '#e8f8f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#16a085',
  },
  divisionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16a085',
    marginBottom: 8,
  },
  exercisesSection: {
    marginBottom: 24,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  exercisesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  exerciseBox: {
    backgroundColor: '#f7f9fa',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#2ecc71',
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 8,
  },
  solutionButton: {
    backgroundColor: '#2ecc71',
    borderRadius: 4,
    padding: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  solutionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  footerButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  footerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});