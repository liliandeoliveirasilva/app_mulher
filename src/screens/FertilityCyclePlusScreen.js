import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';

const FertilityCyclePlusScreen = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [cycleLength, setCycleLength] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [registeredInfo, setRegisteredInfo] = useState(null);

  const commonSymptoms = [
    'Cólicas', 'Dor de cabeça', 'Inchaço',
    'Mudanças de humor', 'Fadiga', 'Sensibilidade nos seios'
  ];

  const toggleSymptom = (symptom) => {
    setSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setLastPeriodDate(selectedDate);
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR');
  };

  const handleRegister = () => {
    setRegisteredInfo({
      date: formatDate(lastPeriodDate),
      cycle: cycleLength,
      selectedSymptoms: [...symptoms]
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Fertility & Cycle+</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ciclo Menstrual</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Última menstruação:</Text>
            <TouchableOpacity 
              style={styles.datePickerButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateText}>{formatDate(lastPeriodDate)}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={lastPeriodDate}
                mode="date"
                display="default"
                onChange={handleDateChange}
                maximumDate={new Date()}
                style={styles.datePicker}
              />
            )}
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Duração do ciclo (dias):</Text>
            <TextInput
              style={styles.input}
              value={cycleLength}
              onChangeText={setCycleLength}
              placeholder="28"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sintomas</Text>
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

        <TouchableOpacity style={styles.shareButton} onPress={handleRegister}>
          <Text style={styles.shareButtonText}>Registrar Informações</Text>
        </TouchableOpacity>

        {registeredInfo && (
          <View style={styles.registeredSection}>
            <View style={styles.registeredHeader}>
              <Text style={styles.sectionTitle}>Informações Registradas</Text>
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => setRegisteredInfo(null)}
              >
                <Text style={styles.deleteButtonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.registeredInfo}>
              <Text style={styles.registeredText}>
                <Text style={styles.registeredLabel}>Última menstruação: </Text>
                {registeredInfo.date}
              </Text>
              <Text style={styles.registeredText}>
                <Text style={styles.registeredLabel}>Duração do ciclo: </Text>
                {registeredInfo.cycle} dias
              </Text>
              {registeredInfo.selectedSymptoms.length > 0 && (
                <View>
                  <Text style={[styles.registeredLabel, styles.symptomsLabel]}>Sintomas registrados:</Text>
                  <View style={styles.registeredSymptomsContainer}>
                    {registeredInfo.selectedSymptoms.map((symptom, index) => (
                      <View key={index} style={styles.registeredSymptomTag}>
                        <Text style={styles.registeredSymptomText}>{symptom}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>
        )}
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
    color: '#FF69B4',
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
  inputContainer: {
    marginBottom: 15
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF'
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  dateText: {
    fontSize: 16,
    color: '#333'
  },
  datePicker: {
    backgroundColor: '#FFFFFF'
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
    backgroundColor: '#FF69B4',
    borderColor: '#FF69B4'
  },
  symptomText: {
    color: '#666'
  },
  symptomTextActive: {
    color: '#FFF'
  },
  shareButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FF1493'
  },
  shareButtonText: {
    color: '#FF1493',
    fontSize: 16,
    fontWeight: '600'
  },
  registeredSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  registeredInfo: {
    gap: 10
  },
  registeredText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  registeredLabel: {
    color: '#333',
    fontWeight: '600'
  },
  symptomsLabel: {
    marginBottom: 10
  },
  registeredSymptomsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },
  registeredSymptomTag: {
    backgroundColor: '#FFE4E1',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  registeredSymptomText: {
    color: '#FF69B4',
    fontSize: 14
  },
  registeredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  deleteButton: {
    backgroundColor: '#FFE4E1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15
  },
  deleteButtonText: {
    color: '#FF1493',
    fontSize: 14,
    fontWeight: '600'
  }
});

export default FertilityCyclePlusScreen;