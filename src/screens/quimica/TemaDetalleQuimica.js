import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

// Este es un componente de ejemplo para el tema de "Estructura atómica"
export default function TemaDetalleQuimica() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerNumber}>Tema 1</Text>
        <Text style={styles.headerTitle}>Estructura Atómica</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. El átomo</Text>
          <Text style={styles.text}>
            Un átomo es la unidad más pequeña de un elemento químico que mantiene su identidad.
            Está formado por un núcleo (protones y neutrones) y electrones que orbitan alrededor del núcleo.
          </Text>
          
          {/* Aquí iría una imagen del átomo */}
          <View style={styles.imageContainer}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imagePlaceholderText}>Imagen: Modelo atómico</Text>
            </View>
          </View>
          
          <Text style={styles.text}>
            <Text style={styles.bold}>Protones:</Text> Partículas con carga positiva (+1) y masa de 1,007 u.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Neutrones:</Text> Partículas sin carga y masa de 1,008 u.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Electrones:</Text> Partículas con carga negativa (-1) y masa de 0,0005 u.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Modelos atómicos</Text>
          
          <View style={styles.modelBox}>
            <Text style={styles.modelTitle}>Modelo de Dalton (1803)</Text>
            <Text style={styles.text}>
              • Los átomos son indivisibles e indestructibles.
            </Text>
            <Text style={styles.text}>
              • Los átomos de un mismo elemento son idénticos.
            </Text>
            <Text style={styles.text}>
              • Los átomos de diferentes elementos tienen propiedades diferentes.
            </Text>
          </View>
          
          <View style={styles.modelBox}>
            <Text style={styles.modelTitle}>Modelo de Thomson (1897)</Text>
            <Text style={styles.text}>
              • "Modelo del pudín de pasas": los electrones están incrustados en una masa uniforme de carga positiva.
            </Text>
            <Text style={styles.text}>
              • Descubrió el electrón mediante experimentos con rayos catódicos.
            </Text>
          </View>
          
          <View style={styles.modelBox}>
            <Text style={styles.modelTitle}>Modelo de Rutherford (1911)</Text>
            <Text style={styles.text}>
              • "Modelo planetario": el átomo tiene un núcleo pequeño y denso donde se concentra la carga positiva.
            </Text>
            <Text style={styles.text}>
              • Los electrones orbitan alrededor del núcleo como los planetas alrededor del Sol.
            </Text>
            <Text style={styles.text}>
              • Basado en el experimento de la lámina de oro.
            </Text>
          </View>
          
          <View style={styles.modelBox}>
            <Text style={styles.modelTitle}>Modelo de Bohr (1913)</Text>
            <Text style={styles.text}>
              • Los electrones giran en órbitas estables y definidas (niveles de energía).
            </Text>
            <Text style={styles.text}>
              • Los electrones pueden saltar entre niveles al absorber o emitir energía.
            </Text>
            <Text style={styles.text}>
              • Explica el espectro del hidrógeno.
            </Text>
          </View>
          
          <View style={styles.modelBox}>
            <Text style={styles.modelTitle}>Modelo mecánico-cuántico (1926)</Text>
            <Text style={styles.text}>
              • Desarrollado por Schrödinger, Heisenberg y otros.
            </Text>
            <Text style={styles.text}>
              • Se basa en la ecuación de onda de Schrödinger.
            </Text>
            <Text style={styles.text}>
              • Describe los electrones como ondas de probabilidad (orbitales).
            </Text>
            <Text style={styles.text}>
              • Principio de incertidumbre: no se puede conocer simultáneamente la posición y velocidad del electrón.
            </Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Configuración electrónica</Text>
          <Text style={styles.text}>
            La configuración electrónica describe la distribución de los electrones en los distintos orbitales atómicos.
            Se basa en los siguientes principios:
          </Text>
          
          <View style={styles.principleBox}>
            <Text style={styles.principleTitle}>Principio de Aufbau</Text>
            <Text style={styles.text}>
              Los electrones ocupan primero los orbitales de menor energía antes de llenar los de mayor energía.
              Orden: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p.
            </Text>
          </View>
          
          <View style={styles.principleBox}>
            <Text style={styles.principleTitle}>Principio de exclusión de Pauli</Text>
            <Text style={styles.text}>
              Un orbital atómico no puede contener más de dos electrones, y estos deben tener espines opuestos.
            </Text>
          </View>
          
          <View style={styles.principleBox}>
            <Text style={styles.principleTitle}>Regla de Hund</Text>
            <Text style={styles.text}>
              En orbitales de igual energía, los electrones se distribuyen con espines paralelos antes de emparejarlos.
            </Text>
          </View>
          
          <Text style={styles.subheading}>Ejemplos:</Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>H (Z=1):</Text> 1s¹
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>He (Z=2):</Text> 1s²
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Li (Z=3):</Text> 1s² 2s¹
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>C (Z=6):</Text> 1s² 2s² 2p²
          </Text>
          <Text style={styles.text}>
            <Text style={styles.bold}>Na (Z=11):</Text> 1s² 2s² 2p⁶ 3s¹
          </Text>
        </View>
        
        <View style={styles.exercisesSection}>
          <Text style={styles.exercisesTitle}>Ejercicios tipo PAU</Text>
          
          <View style={styles.exerciseBox}>
            <Text style={styles.exerciseTitle}>Ejercicio 1</Text>
            <Text style={styles.text}>
              Escribe la configuración electrónica del ion Fe³⁺ (Z=26).
            </Text>
            <TouchableOpacity style={styles.solutionButton}>
              <Text style={styles.solutionButtonText}>Ver solución</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.exerciseBox}>
            <Text style={styles.exerciseTitle}>Ejercicio 2</Text>
            <Text style={styles.text}>
              Indica los números cuánticos posibles para un electrón situado en un orbital 3d.
            </Text>
            <TouchableOpacity style={styles.solutionButton}>
              <Text style={styles.solutionButtonText}>Ver solución</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.exerciseBox}>
            <Text style={styles.exerciseTitle}>Ejercicio 3</Text>
            <Text style={styles.text}>
              ¿Cuántos electrones desapareados tiene un átomo de nitrógeno (Z=7) en su estado fundamental?
            </Text>
            <TouchableOpacity style={styles.solutionButton}>
              <Text style={styles.solutionButtonText}>Ver solución</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.formulas}>
          <Text style={styles.formulasTitle}>Fórmulas importantes</Text>
          <View style={styles.formulaBox}>
            <Text style={styles.formulaText}>Energía del nivel n (Bohr): E = -13,6 eV / n²</Text>
          </View>
          <View style={styles.formulaBox}>
            <Text style={styles.formulaText}>Número máximo de electrones por nivel: 2n²</Text>
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
    backgroundColor: '#3498db',
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
  bold: {
    fontWeight: 'bold',
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
  modelBox: {
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  modelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 8,
  },
  principleBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#9b59b6',
  },
  principleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8e44ad',
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
    borderLeftColor: '#e74c3c',
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c0392b',
    marginBottom: 8,
  },
  solutionButton: {
    backgroundColor: '#e74c3c',
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
  formulas: {
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
  formulasTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  formulaBox: {
    backgroundColor: '#eafaf1',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2ecc71',
  },
  formulaText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'monospace',
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
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  footerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}); 