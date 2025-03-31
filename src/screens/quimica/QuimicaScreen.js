import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';

// Datos de los temas de Química para la PAU Comunidad Valenciana
const temasQuimica = [
  {
    id: '1',
    titulo: 'Estructura atómica',
    subtitulo: 'Modelos atómicos, configuración electrónica',
    color: '#3498db'
  },
  {
    id: '2',
    titulo: 'Tabla periódica',
    subtitulo: 'Propiedades periódicas, grupos y periodos',
    color: '#2980b9'
  },
  {
    id: '3',
    titulo: 'Enlace químico',
    subtitulo: 'Enlace iónico, covalente y metálico',
    color: '#1abc9c'
  },
  {
    id: '4',
    titulo: 'Termodinámica química',
    subtitulo: 'Entalpía, entropía, energía libre',
    color: '#16a085'
  },
  {
    id: '5',
    titulo: 'Cinética química',
    subtitulo: 'Velocidad de reacción, factores, catalizadores',
    color: '#27ae60'
  },
  {
    id: '6',
    titulo: 'Equilibrio químico',
    subtitulo: 'Constantes, principio de Le Chatelier',
    color: '#2ecc71'
  },
  {
    id: '7',
    titulo: 'Ácidos y bases',
    subtitulo: 'pH, reacciones ácido-base, valoraciones',
    color: '#f1c40f'
  },
  {
    id: '8',
    titulo: 'Redox',
    subtitulo: 'Oxidación-reducción, ajuste, electroquímica',
    color: '#f39c12'
  },
  {
    id: '9',
    titulo: 'Química orgánica',
    subtitulo: 'Hidrocarburos, grupos funcionales, isomería',
    color: '#e67e22'
  },
  {
    id: '10',
    titulo: 'Aplicaciones y formulación',
    subtitulo: 'Nomenclatura, formulación inorgánica y orgánica',
    color: '#d35400'
  },
];

export default function QuimicaScreen() {
  const renderTema = ({ item }) => (
    <TouchableOpacity 
      style={[styles.temaCard, { backgroundColor: item.color }]}
    >
      <Text style={styles.temaNumero}>Tema {item.id}</Text>
      <Text style={styles.temaTitulo}>{item.titulo}</Text>
      <Text style={styles.temaSubtitulo}>{item.subtitulo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Química PAU</Text>
        <Text style={styles.subtitle}>Comunidad Valenciana 2025</Text>
      </View>
      
      <FlatList
        data={temasQuimica}
        renderItem={renderTema}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ejercicios tipo examen</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Formulario</Text>
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
    padding: 20,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  listContainer: {
    padding: 16,
  },
  temaCard: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  temaNumero: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  temaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  temaSubtitulo: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
}); 