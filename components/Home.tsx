import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './../assets/warehouse.jpg';
import Stock from './Stock';
import { Base, Typography } from './../styles';

// API key: 56a00810bed2ea5cdba8d2ec55c7aa02


export default function Home({route, products, setProducts}) {
  return (
    <SafeAreaView  style={Base.container}>
      <View style={Base.base}>
        <ScrollView>
        <Text style={Typography.header1}>Lager-Appen</Text>
        <Image source={warehouse} style={Base.image} />
        <Stock products={products} setProducts={setProducts} />
        <StatusBar style="auto" />
        </ScrollView>
      </View>
    </SafeAreaView >
  );
}
