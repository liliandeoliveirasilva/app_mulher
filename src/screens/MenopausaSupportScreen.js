import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MenopausaSupportScreen = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [notes, setNotes] = useState('');

  const commonSymptoms = [
    'Fogachos', 'Insônia', 'Alterações de humor',
    'Ganho de peso', 'Dores articulares', 'Pele seca',
    'Suores noturnos', 'Fadiga', 'Ansiedade'
  ];

  const infoSections = [
    {
      title: 'Dicas de Bem-estar',
      items: [
        'Mantenha uma dieta equilibrada',
        'Pratique exercícios regularmente',
        'Mantenha-se hidratada',
        'Priorize o sono de qualidade'
      ]
    },
    {
      title: 'Cuidados Importantes',
      items: [
        'Faça exames regulares',
        'Mantenha acompanhamento médico',
        'Pratique exercícios de relaxamento',
        'Mantenha uma rotina saudável'
      ]
    }
  ];

  const toggleSymptom = (symptom) => {
    setSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Menopausa Support</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rastreamento de Sintomas</Text>
          <View style={styles.symptomsContainer}>
            {commonSymptoms.map((symptom, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.symptomButton, symptoms.includes(symptom) && styles.symptomActive]}
                onPress={() => toggleSymptom(symptom)}
              >
                <Text style={[styles.symptomText, symptoms.includes(symptom) && styles.symptomTextActive]}>
                  {symptom}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {infoSections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.infoItem}>
                <Text style={styles.infoText}>• {item}</Text>
              </View>
            ))}
          </View>
        ))}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notas Pessoais</Text>
          <TextInput
            style={styles.notesInput}
            value={notes}
            onChangeText={setNotes}
            placeholder="Adicione suas observações aqui..."
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Compartilhar com Especialista</Text>
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
    color: '#FFC0CB',
    textAlign: 'center',
    marginBottom: 20
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
  symptomsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  symptomButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD'
  },
  symptomActive: {
    backgroundColor: '#FFC0CB',
    borderColor: '#FFC0CB'
  },
  symptomText: {
    color: '#666'
  },
  symptomTextActive: {
    color: '#FFF'
  },
  infoItem: {
    marginBottom: 10
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    backgroundColor: '#FFFFFF'
  },
  shareButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FFC0CB'
  },
  shareButtonText: {
    color: '#FFC0CB',
    fontSize: 16,
    fontWeight: '600'
  }
});

export default MenopausaSupportScreen;