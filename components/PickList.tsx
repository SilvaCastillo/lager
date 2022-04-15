import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import orderModel from "../models/orders";
import productModel from "../models/products";
import { Base, Typography } from '../styles';

export default function PickList({ route, navigation, setProducts }) {
  const { order } = route.params;
  const [productsList, setProductsList] = useState([]);

  useEffect(async () => {
    setProductsList(await productModel.getProducts());
  }, []);

  async function pick() {
    await orderModel.pickOrder(order);
    setProducts(await productModel.getProducts());
    navigation.navigate("List", { reload: true });
  }

  const productsHash = productsList.reduce((hash, current) => ({...hash, [current.id]: current.stock }), {});

  let allInStock = true;

  const orderItemsList = order.order_items.map((item, index) => {
    if (productsHash[item.product_id] < item.amount) {
      allInStock = false;
    }
    return <Text
            key={index}
            style={Typography.listInfo}
            >
              {item.name} - {item.amount} - {item.location}
        </Text>;
  });

  return (
    <View style={[Base.base, Base.container]}>
      <Text style={[Typography.header3, Typography.Topspace]}>Kund:</Text>
      <Text style={Typography.listInfo}>{order.name}</Text>
      <Text style={Typography.listInfo}>{order.address}</Text>
      <Text style={Typography.listInfo}>{order.zip} {order.city}</Text>

      <Text style={[Typography.header3]} >Produkter:</Text>

      {orderItemsList}


      {allInStock
          ? <TouchableOpacity  onPress={pick} style={[Base.buttonContainer, Typography.Topspace]}>
            <Text style={Typography.buttonText}>Plocka order</Text>
            </TouchableOpacity>
          : <Text style={[Typography.header3]}>Kan inte plocka order eftersom det inte finns tillräckligt med produkter.</Text>
      }
    </View>
  )
};