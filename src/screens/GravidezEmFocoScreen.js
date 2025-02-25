import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const GravidezEmFocoScreen = () => {
  const [currentWeek, setCurrentWeek] = useState(1);

  const weeklyTips = [
    {
      title: 'Exercícios Recomendados',
      items: ['Caminhada leve', 'Yoga pré-natal', 'Alongamentos suaves', 'Natação']
    },
    {
      title: 'Dicas de Saúde',
      items: ['Tome ácido fólico', 'Mantenha-se hidratada', 'Durma 8 horas por dia', 'Evite alimentos crus']
    },
    {
      title: 'Preparação para o Parto',
      items: ['Faça exercícios de respiração', 'Monte o enxoval', 'Prepare o plano de parto', 'Escolha a maternidade']
    }
  ];

  const weekControls = () => (
    <View style={styles.weekControl}>
      <TouchableOpacity 
        style={styles.weekButton}
        onPress={() => setCurrentWeek(prev => Math.max(1, prev - 1))}
      >
        <Text style={styles.weekButtonText}>-</Text>
      </TouchableOpacity>
      <View style={styles.weekDisplay}>
        <Text style={styles.weekText}>Semana {currentWeek}</Text>
      </View>
      <TouchableOpacity 
        style={styles.weekButton}
        onPress={() => setCurrentWeek(prev => Math.min(40, prev + 1))}
      >
        <Text style={styles.weekButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Gravidez em Foco</Text>
        {weekControls()}

        {weeklyTips.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.tipItem}>
                <Text style={styles.tipText}>• {item}</Text>
              </View>
            ))}
          </View>
        ))}

        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Compartilhar com Médico</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1'
  },
  scrollContent: {
    padding: 20
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFB6C1',
    textAlign: 'center',
    marginBottom: 20
  },
  weekControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  weekButton: {
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFB6C1'
  },
  weekButtonText: {
    fontSize: 24,
    color: '#FFB6C1',
    fontWeight: 'bold'
  },
  weekDisplay: {
    paddingHorizontal: 20
  },
  weekText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333'
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15
  },
  tipItem: {
    marginBottom: 10
  },
  tipText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24
  },
  shareButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FFB6C1'
  },
  shareButtonText: {
    color: '#FFB6C1',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default GravidezEmFocoScreen;