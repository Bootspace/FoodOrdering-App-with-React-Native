import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Order } from '@/types'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import { useSegments } from 'expo-router'
import { Link } from 'expo-router'

dayjs.extend(relativeTime)

export type OrderListProps = {
    order: Order;
};

const OrderListItem = ({order}: OrderListProps)=>
     {

    const timeAgo = (timeStamp: string) => {
        return dayjs(timeStamp).fromNow();
    };

    const segments = useSegments();


  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
        <Pressable style={styles.mainContainer}>
            <View>
                <Text style={styles.title}>{order.id}</Text>
                <Text style={styles.time}>{timeAgo(order.created_at)}</Text>
            </View>

            <Text style={styles.status}>{order.status}</Text>
        </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    title:{
        fontWeight:'bold',
        marginVertical: 5,
    },

    status: {
        fontWeight:'500',
    },
    time: {
        color: 'gray'
    }
})

export default OrderListItem;