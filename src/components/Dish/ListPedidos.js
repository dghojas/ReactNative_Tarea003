import React, { Component } from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';

import { baseUri } from '../../rawData';
import ItemPedidosCard from './ItemPedidosCard';

const styles = StyleSheet.create({
    flatListContainer: {
        padding: 0,
        width: '100%',
        display: 'flex',
        flexGrow: 0
    },
    horizontalScroll: { margin: 0 },
    titlePedidos: {
        color: 'white',
        fontSize: 24,
        marginVertical: 20,
    },
    ListEmpty: {
        padding: 15,
    },
    TextListEmpty: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
});

const ListPedidos = ({ addProductSelected }) => (
    <>
        <Text style={styles.titlePedidos}>Pedidos</Text>
        <FlatList
            style={styles.flatListContainer}
            data={addProductSelected}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({
                item: { id, title, readyInMinutes, servings, image, sourceUrl },
            }) => (
                    <ItemPedidosCard
                        idProduct={id}
                        title={title}
                        readyInMinutes={readyInMinutes}
                        servings={servings}
                        image={image}
                        sourceUrl={sourceUrl}
                        baseUri={baseUri}
                    />
                )}
            ListEmptyComponent={() => (
                <View style={styles.ListEmpty}>
                    <Text style={styles.TextListEmpty}>Lista vacía</Text>
                </View>
            )}
        />
    </>
);

export default ListPedidos;