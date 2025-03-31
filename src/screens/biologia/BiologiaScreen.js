import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';

// Datos de los temas de Biología para la PAU Comunidad Valenciana
const temasBiologia = [
  {
    id: '1',
    titulo: 'Bioelementos y biomoléculas',
    subtitulo: 'Composición química de los seres vivos',
    color: '#2ecc71'
  },
  {
    id: '2',
    titulo: 'La célula',
    subtitulo: 'Estructura, orgánulos y funciones celulares',
    color: '#27ae60'
  },
  {
    id: '3',
    titulo: 'Membrana y transporte',
    subtitulo: 'Membrana plasmática, transporte celular',
    color: '#1abc9c'
  },
  {
    id: '4',
    titulo: 'Metabolismo',
    subtitulo: 'Rutas metabólicas, catabolismo y anabolismo',
    color: '#16a085'
  },
  {
    id: '5',
    titulo: 'Fotosíntesis y respiración',
    subtitulo: 'Procesos energéticos celulares',
    color: '#3498db'
  },
  {
    id: '6',
    titulo: 'Genética molecular',
    subtitulo: 'ADN, ARN, replicación y expresión génica',
    color: '#2980b9'
  },
  {
    id: '7',
    titulo: 'Genética mendeliana',
    subtitulo: 'Herencia y resolución de problemas',
    color: '#9b59b6'
  },
  {
    id: '8',
    titulo: 'Mutaciones y evolución',
    subtitulo: 'Tipos de mutaciones y teorías evolutivas',
    color: '#8e44ad'
  },
  {
    id: '9',
    titulo: 'Microbiología',
    subtitulo: 'Virus, bacterias y aplicaciones biotecnológicas',
    color: '#e74c3c'
  },
  {
    id: '10',
    titulo: 'Inmunología',
    subtitulo: 'Sistema inmunitario, respuesta inmune y enfermedades',
    color: '#c0392b'
  },
  {
    id: '11',
    titulo: 'Ecosistemas',
    subtitulo: 'Relaciones tróficas y ciclos biogeoquímicos',
    color: '#f1c40f'
  }
];

export default function BiologiaScreen() {
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
        <Text style={styles.title}>Biología PAU</Text>
        <Text style={styles.subtitle}>Comunidad Valenciana 2025</Text>
      </View>
      
      <FlatList
        data={temasBiologia}
        renderItem={renderTema}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ejercicios tipo examen</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Esquemas visuales</Text>
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
    backgroundColor: '#2ecc71',
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
    backgroundColor: '#2ecc71',
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