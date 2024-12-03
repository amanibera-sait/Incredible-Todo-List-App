import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function ToDoList({ tasks }) {
  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <Pressable
          key={index}
          style={({ pressed }) => [
            styles.task,
            pressed ? styles.taskPressed : null,
          ]}
          onPress={() => console.log(`Task: ${task}`)}
        >
          <Text style={styles.taskText}>{task}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingBottom: 20,
  },
  task: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#ffwf",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  taskPressed: {
    backgroundColor: "#f0f0f0",
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ToDoList;
