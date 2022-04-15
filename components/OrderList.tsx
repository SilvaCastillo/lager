import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Base, Typography } from '../styles';
import orderModel from "../models/orders";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrderList({ route, navigation }) {
    const { reload } = route.params || false;
    const [allOrders, setAllOrders] = useState([]);

    if (reload) {
        reloadOrders();
    }

    async function reloadOrders() {
        setAllOrders(await orderModel.getOrders())
        navigation.navigate('List', { reload: false});
    }

    useEffect(() => {
        reloadOrders();
    }, []);

    const listOfOrders = allOrders
        .filter(order => order.status === "Ny")
        .map((order, index) => {
            return <TouchableOpacity  
                title={order.name}
                key={index}
                onPress={() => {
                    navigation.navigate('Details', {
                        order: order
                    });
                }}
                style={Base.buttonContainer}>
                <Text style={Typography.buttonText}>{order.name}</Text>
            </TouchableOpacity >
        });

        return (
            <SafeAreaView style={Base.container}>
                <View >
                    <Text style={[Typography.header2, Typography.Topspace]}>Ordrar redo att plockas</Text>
                    {listOfOrders}
                </View>
            </SafeAreaView>
        );
}

