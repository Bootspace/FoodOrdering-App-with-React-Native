import { View, FlatList } from 'react-native'
import { useCart } from '@/providers/CartProvider'
import CartListItem from '@/components/CartListItem';

const CartScreen = () => {
    const {items} = useCart();
  return (
    <View>
     <FlatList
        data={items}
        renderItem={({ item})=> <CartListItem cartItem={item}/>}
     />
    </View>
  )
}

export default CartScreen