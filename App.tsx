import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.label}>Passos</Text>
          <Text style={styles.value}>1219</Text>
        </View>

        <View>
          <Text style={styles.label}>Distancia</Text>
          <Text style={styles.value}>0.75 Km</Text>
        </View>

        <View>
          <Text style={styles.label}>Calorias Queimadas</Text>
          <Text style={styles.value}>120 Cal</Text>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 12
  },
  label: {

  }, value: {
    fontSize: 40
  }
});
