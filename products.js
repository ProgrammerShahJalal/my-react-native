import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, ActivityIndicator, FlatList, SafeAreaView, Image } from 'react-native'

const Products = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://young-garden-14257.herokuapp.com/cars");
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
        const { name, price, img, description } = item;
        return (
            <View style={{ flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 12, margin: 4, padding: 15 }}>
                <Image
                    style={{ width: "100%", height: 200 }}
                    source={{ uri: img }}
                    resizeMode='contain'
                />
                <View style={{ marginTop: 16 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
                    <Text style={{ marginTop: 4 }}>
                        {`${description}`}
                    </Text>
                    <Text style={{ marginTop: 4 }}>
                        {`Price: $${price}`}
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            style={{ backgroundColor: 'coral', borderRadius: 20, margin: 5 }}
                            onPress={() => { navigation.navigate("Details") }}
                        >
                            <Text style={{ paddingHorizontal: 15, paddingVertical: 6, color: 'white' }}>Details</Text>
                        </TouchableOpacity>
                    </View>
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
                numColumns={1}
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
