import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Base, Typography } from '../styles';
import productModel from "../models/products.ts";

function StockList({products, setProducts}) {
  useEffect(async () => {
    setProducts(await productModel.getProducts());
  }, []);

  
  const list = products.map((product, index) => {
    return <Text
            key={index}
            style={Typography.data}
            >
              { product.name } - { product.stock }
            </Text>
  });
  return (
    <View >
      {list }
    </View>
  );
}

export default function Stock({products, setProducts}) {
  return (
    <View>
      <Text style={Typography.header2}>Lagerförteckningg</Text>
      <StockList products={products} setProducts={setProducts} />
    </View>
  );
}

