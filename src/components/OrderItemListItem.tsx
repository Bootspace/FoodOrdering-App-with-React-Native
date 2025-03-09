import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { OrderItem } from '@/types';
import { defaultPizzaImage } from './ProductListItem';
import Colors from '@/constants/Colors';

type OrderItemListItemProps = {
    item: OrderItem;
};

const OrderItemListItem = ({ item }: OrderItemListItemProps) => {

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: item.products.image || defaultPizzaImage}}
        style={styles.image}
        resizeMode='contain'
      />

      <View style={{ flex: 1 }}>
            <Text style={styles.title}>{item.products.name}</Text>

            <View style={styles.subtitleContainer}>
                <Text style={styles.title}>{item.products.price.toFixed(2)}</Text>
                <Text>{item.products.price}</Text>
            </View>
      </View>

      <View style={styles.quantitySelector}>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 5
    },
    subtitleContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    quantitySelector: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginVertical: 10,
    },
    image: {
        width: 75,
        aspectRatio: 1,
        alignSelf: 'center',
        marginRight: 10
    },
    quantity: {
        fontWeight: '500',
        fontSize: 18,
    },
    price: {
        color: Colors.light.tint,
        fontWeight: '500'
    }
})



export default OrderItemListItem