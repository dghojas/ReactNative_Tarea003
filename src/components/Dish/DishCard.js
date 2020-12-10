import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { baseUri } from '../../rawData';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bdc3c7',
        marginBottom: 10,
    },
    imageContainer: {
        height: 100,
    },
    image: {
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    information: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    AddCarrito: {
        padding: 10,
        backgroundColor: '#8d45ac'
    },
    AddCarritoText: {
        color: '#fff',
        textAlign: 'center'
    }
});

const DishCard = ({ idProduct, title, readyInMinutes, servings, image, onPress }) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: `${baseUri}${image}` }}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.information}>
                <Text>{`Listo en ${readyInMinutes} min`}</Text>
                <Text>{`Para ${servings} personas`}</Text>
            </View>
        </View>
        <View>
            <TouchableOpacity
                onPress={() =>
                    onPress({
                        id: idProduct,
                        title: title,
                        readyInMinutes: readyInMinutes,
                        servings: servings,
                        image: image,
                        baseUri: baseUri,
                    })
                }
                style={styles.AddCarrito}
            >
                <Text style={styles.AddCarritoText}>Agregar al carro</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default DishCard;