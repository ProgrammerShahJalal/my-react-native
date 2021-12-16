import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, ActivityIndicator, FlatList, SafeAreaView, Image } from 'react-native'

const Products = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            setLoading(false);
            setProducts(products);
        }
        fetchData();
    }, [])
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={'large'} color={'orange'} />
            </View>
        )
    }
    const renderProductItem = ({ item, index }) => {
        const { title, price, image, category } = item;
        return (
            <View style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 12, margin: 4, padding: 15 }}>
                <Image
                    style={{ width: "100%", height: 200 }}
                    source={{ uri: image }}
                    resizeMode='contain'
                />
                <View style={{ marginTop: 16 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                    <Text style={{ marginTop: 4 }}>
                        {`Category: ${category}`}
                    </Text>
                    <Text style={{ marginTop: 4 }}>
                        {`Price: $${price}`}
                    </Text>
                </View>
            </View>

        )
    }
    return (
        <SafeAreaView>
            <FlatList data={products}
                renderItem={renderProductItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ padding: 20 }}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

export default Products

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
