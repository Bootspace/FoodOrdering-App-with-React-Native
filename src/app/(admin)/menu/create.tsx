import { View, Text, StyleSheet, TextInput, Image, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import Button from '@/components/Button';
import { text } from 'stream/consumers';
import Colors from '@/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

const createProductScreen = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState('');
    const [image, setImage] = useState<string | null>(null);

    const id = useLocalSearchParams();
    const isUpdating = !!id;

    const resetFields = () => {
        setName('');
        setPrice('');
    };

    const validateInput = () => {
        setErrors('');
        if(!name) {
            setErrors('Name is required');
            return false;
        }

        if(!price) {
            setErrors('Price is required');
            return false;
        }

        if(isNaN(parseFloat(price))) {
            setErrors('Price is not a number');
            return false;
        }

        return true;
    };

    const onSubmit = () => {
        isUpdating ? onUpdate() : onCreate()
    };

    const onCreate = () => {
        if(!validateInput()) {
            return;
        }
        console.log('Creating Product: ', name);
        resetFields();
    }

    const onUpdate = () => {
        if(!validateInput()) {
            return;
        }

        console.log('Is updating...')
        resetFields();
    };

    const onDelete = () => {
        console.warn('Delete!!!!');
    }

    const confirmDelete = () => {
        Alert.alert('Confirm', 'Are you sure you want to delete this product', [
            { text: 'Cancel'},
            {
                text: 'Delete',
                style: 'destructive',
                onPress: onDelete,
            }
        ]);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
        if(!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

  return (
    <View style={styles.container}>
        <Stack.Screen 
            options={{ 
              title: 'Menu', 
            headerRight: () => (
            <Link href="/(admin)/menu/create" asChild>
            <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="pencil"
                      size={25}
                      color={Colors.light.tint}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }} />

        <Stack.Screen options={{ title: isUpdating ? 'Update Product' :'Create Product' }} />

      <Image 
        source={{uri: image || defaultPizzaImage}} 
        style={styles.image}
      />

      <Text onPress={pickImage} style={styles.textButton}>Select image</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput 
        value={name}
        onChangeText={setName}
        placeholder='name' 
        style={styles.input}
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput 
        value={price}
        onChangeText={setPrice}
        placeholder='9.99' 
        style={styles.input}
        keyboardType='numeric'
      />

      <Text style={{color:'red'}}>{errors}</Text>
      <Button onPress={onSubmit} text={isUpdating? 'Update':'Create'}/>

      {isUpdating && <Text onPress={confirmDelete} style={styles.textButton}>Delete</Text>}
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
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20
    },
    label:{
        color: 'gray',
        fontSize: 16
    },
    image: {
        width: '50%',
        aspectRatio: 1,
        alignSelf: 'center',
    },
    textButton: {
        color: Colors.light.tint,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginVertical: 10
    }
});



export default createProductScreen;