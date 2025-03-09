import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Button from '@/components/Button';
import { Link, router,Stack } from 'expo-router';
import Colors from '@/constants/Colors';

const signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        console.log(email, password)
    }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'SignUp'}} />
      <Text style={styles.label}>Email</Text>
      <TextInput
      value={email}
      onChangeText={setEmail}
      placeholder='email'
      style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
      value={password}
      onChangeText={setPassword}
      placeholder='password'
      style={styles.input}
      />

      <Button onPress={onSubmit} text='Signup' />

     <Link 
        href="/signin"          style={styles.textButton}
          >Sign In
     </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20
    },
    label: {
        color: 'gray',
        fontSize: 16
    },
    textButton: {
        color: Colors.light.tint,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginVertical: 10
    }
})

export default signup