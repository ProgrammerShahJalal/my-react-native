import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert, Modal, Pressable } from 'react-native';


const About = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [secondModalVisible, setSecondModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
            {/* about car app */}
            <Pressable
                style={[styles.button, styles.buttonOpen], { width: 130, height: 130, backgroundColor: 'darkblue', justifyContent: 'center', alignItems: 'center', borderRadius: 20, margin: 5 }}
                onPress={() => setModalVisible(true)}
            >
                <Text style={{ color: 'white', paddingHorizontal: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>ABOUT CAR APP</Text>
            </Pressable>
            {/* about developer */}
            <Pressable
                style={[styles.button, styles.buttonOpen], { width: 130, height: 130, backgroundColor: 'coral', justifyContent: 'center', alignItems: 'center', borderRadius: 20, margin: 5 }}
                onPress={() => setSecondModalVisible(true)}
            >
                <Text style={{ color: 'white', paddingHorizontal: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>ABOUT DEVELOPER</Text>
            </Pressable>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Car Play and Android Auto apps transmit the home screen of any Android or IOS smartphone to the car built-in display. Car software collects live data about road signs, speed limits and traffic cameras ahead. Some car apps send real-time notifications about road accidents and traffic jams en route.
                            </Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                {/* second modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={secondModalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setSecondModalVisible(!secondModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>This is Shah Jalal, studying at Jahangirnagar University in Bangladesh, department of statistics. He is an expert in HTML, CSS, React, JavaScript, Bootstrap, Tailwind, Node JS, Express JS, MongoDB, Material UI, React Bootstrap, React Router, React Hook Form, Firebase Authentication, WordPress. He is also good at Photoshop and Illustrator.He is a focusing person. He love to code, learn and complete my milestone.</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setSecondModalVisible(!secondModalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
