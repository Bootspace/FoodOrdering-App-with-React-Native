import { View, Text, Pressable, StyleSheet } from 'react-native'
import { forwardRef} from 'react'
import Colors from '@/constants/Colors';

type Buttonprops = {
    text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, Buttonprops>(
    ({ text, ...pressableProps }, ref) => {
  return (
    <Pressable ref={ref} {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tint,
        padding: 15,
        alignItems: 'center',
        borderRadius: 100,
        marginVertical: 10,

    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
})

export default Button