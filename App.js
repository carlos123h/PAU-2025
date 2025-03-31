import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>EstudioPAU Valencia 2025</Text>
        <Text style={styles.subtitle}>Tu compañero de estudio para la selectividad</Text>
      </View>
      
      <View style={styles.content}>
        <TouchableOpacity style={[styles.subjectButton, styles.quimicaButton]}>
          <Text style={styles.buttonText}>QUÍMICA</Text>
          <Text style={styles.buttonSubtext}>Fórmulas, reacciones, elementos y más</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.subjectButton, styles.biologiaButton]}>
          <Text style={styles.buttonText}>BIOLOGÍA</Text>
          <Text style={styles.buttonSubtext}>Células, genética, evolución y ecosistemas</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Diseñado para aprobar la PAU con excelencia</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 20,
  },
  subjectButton: {
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  quimicaButton: {
    backgroundColor: '#3498db',
  },
  biologiaButton: {
    backgroundColor: '#2ecc71',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  buttonSubtext: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
}); 