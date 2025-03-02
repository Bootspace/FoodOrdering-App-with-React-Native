import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: 'Details: ' + id }} />

      <Text style={{ fontSize: 30 }}>Product detail for id: {id}</Text>
    </View>
  )
}

export default ProductDetailScreen