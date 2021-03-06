import React, { useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Task from './components/Task';
import products from './Products';

const ToDoList = ({ navigation }) => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        let fool = "What's Up, why are you lazy?";
        if (task === null) {
            alert("Don't add empty task");
            setTask("Don't be lazy, Go hunt your dream!")
        }
        else {
            setTaskItems([...taskItems, task]);
            setTask(null);
        }

    }

    const completeTask = (index) => {
        alert('Your Task Completed Successfully!');
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Today's Tasks</Text>
                    <ScrollView>
                        <View style={styles.items}>
                            {
                                taskItems.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                            <Task text={item} />
                                        </TouchableOpacity>

                                    )
                                })
                            }
                            {/* <Task text="task-1" />
          <Task text="task-2" /> */}
                        </View>
                    </ScrollView>

                </View>
                {/* write a task */}
                <KeyboardAvoidingView
                    behavior={Platform.OS === "android" ? "padding" : "height"}
                    style={styles.writeTaskWrapper}
                >
                    <TextInput style={styles.input} placeholder='Write a task' value={task} onChangeText={text => setTask(text)} />
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>

        </>
    )
}

export default ToDoList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        width: '100%',
        height: "80%",
        paddingTop: 20,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    }
})
