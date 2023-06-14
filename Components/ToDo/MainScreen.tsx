import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { TodoContext } from './TodoContext';
import { FontAwesome } from '@expo/vector-icons';



const MainScreen = () => {
  const [taskText, setTaskText] = useState('');
  const { todos, addTodo, removeTodo } = useContext(TodoContext);

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTodo(taskText);
      setTaskText('');
    }
  };

  const handleRemoveTask = (id: string) => {
    removeTodo(id);
  };

  
  const renderItem = ({ item }: { item: { id: string, text: string } }) => (
    <View style={styles.taskContainer}>
      <View style={{ flex: 1 }}>
        <Text>{item.text}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleRemoveTask(item.id)}
        style={styles.iconButton}
      >
        <FontAwesome name="trash-o" size={24} color="red" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleStartTimer(item.id)}
        style={styles.iconButton}
      >
        <FontAwesome name="clock-o" size={24} color="blue" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>
          Add a New Task, and monitor to get started with your day!!
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#FFEFD5',
      padding: 10,
      marginBottom: 20,
      borderRadius: 5,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    iconButton: {
      marginRight: 10, 
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFEFD5',
      width: windowWidth,
    height: windowHeight,
    },
    input: {
      marginBottom: 10,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 2,
      shadowColor: '#ccc',
      
    },
    list: {
      marginTop: 20,
      borderColor: '#ccc',
      shadowColor: '#ccc',
    },
    taskContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
  });
    
export default MainScreen;
function handleStartTimer(id: string): void {
    throw new Error('Function not implemented.');
}

