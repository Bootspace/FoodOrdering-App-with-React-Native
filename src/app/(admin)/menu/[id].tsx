import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import products from '@assets/data/products';
import { defaultPizzaImage } from '@/components/ProductListItem';

const ProductDetailScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() === id);

  if(!product) {
    return <Text>Product not found</Text>
  }



  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image 
        source={{ uri: product.image || defaultPizzaImage }} 
        style={styles.image}
      />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default ProductDetailScreen