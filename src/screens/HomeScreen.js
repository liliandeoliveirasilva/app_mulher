import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const features = [
    {
      title: 'Fertility & Cycle+',
      description: 'Monitore seu ciclo menstrual, sintomas de TPM e fertilidade',
      color: '#FFFFFF'
    },
    {
      title: 'Gravidez em Foco',
      description: 'Acompanhamento semanal da gravidez com dicas de saúde',
      color: '#FFFFFF'
    },
    {
      title: 'Menopausa Support',
      description: 'Informações e rastreamento de sintomas da menopausa',
      color: '#FFFFFF'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Saúde da Mulher</Text>
        <Text style={styles.subheader}>Seu companheiro completo para a saúde feminina</Text>
        
        <View style={styles.cardsContainer}>
          {features.map((feature, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.card, { backgroundColor: feature.color }]}
              onPress={() => {
                switch(feature.title) {
                  case 'Fertility & Cycle+':
                    navigation.navigate('FertilityCycle+');
                    break;
                  case 'Gravidez em Foco':
                    navigation.navigate('GravidezEmFoco');
                    break;
                  case 'Menopausa Support':
                    navigation.navigate('MenopausaSupport');
                    break;
                }
              }}
            >
              <Text style={styles.cardTitle}>{feature.title}</Text>
              <Text style={styles.cardDescription}>{feature.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF1493',
    textAlign: 'center',
    marginTop: 20
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30
  },
  cardsContainer: {
    gap: 20
  },
  card: {
    borderRadius: 15,
    padding: 20,
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#FF1493'
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF1493',
    marginBottom: 10,
    textAlign: 'center'
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    opacity: 0.9,
    textAlign: 'center'
  }
});

export default HomeScreen;