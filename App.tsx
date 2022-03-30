import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './assets/warehouse.jpg';
import Stock from './components/Stock.tsx';

// API key: 56a00810bed2ea5cdba8d2ec55c7aa02

export default function App() {
  return (
    <SafeAreaView  style={styles.container}>
      <ScrollView>
        <View style={styles.base}>
        <Text style={styles.headline}>Lager-Appen</Text>
        <Image source={warehouse} style={styles.image} />
          <Stock />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b7d8c',
    
  },
  base: {
    flex: 1,
    alignItems: 'center',
  },
  headline: {
    color: '#333',
    fontSize: 42,
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 240,
    marginBottom: 25,
  }
});
