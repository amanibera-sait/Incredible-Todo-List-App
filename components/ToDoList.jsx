import { View, Text, StyleSheet, Pressable } from 'react-native'

const ToDoList = ({tasks}) => {
  return (
    <View>
      <Pressable>
          <View>
            {tasks.map((task, index) => (
              <Text key={index} style={styles.taskText}>{task}</Text>
            ))}
          </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    flex:1,
    flexDirection: "column",
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoList;