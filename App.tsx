import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Value from './src/components/Value';
import RingProgess from './src/components/RingProgess';

export default function App() {
  return (
    <View style={styles.container}>
      <RingProgess progress={0.5} />

      <View style={styles.values}>
        <Value label='Passos' value='1219' />
        <Value label='Distancia' value='0.75Km' />
        <Value label='Calorias Queimadas' value='120' />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    padding: 12
  },
  values: {
    flexDirection: 'row',
    rowGap: 25,
    flexWrap: 'wrap',
    marginTop: 100,
  },
});
