import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import config from "../config/config.json";

function StockList() {
    const [products , setProducts] = useState([]);

    useEffect( () => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
            .then(response => response.json())
            .then(result => setProducts(result.data));
    }, []);

    const list = products.map((product, index) => <Text key={index} style={styles.data}>{ product.name } - { product.stock }</Text>);

    return (
        <View >
            {list }
        </View>
    );
}

export default function Stock() {
    return (
        <View>
            <Text style={ styles.subhead}>Lagerförteckning</Text>
            <StockList/>
        </View>
    );
}

const styles = StyleSheet.create({
    subhead: {
        color: '#333',
        fontSize: 38,
        marginBottom: 30,
        
	},
    data: {
        color: '#333',
        fontSize: 20,
        marginBottom: 20,
    }
});

