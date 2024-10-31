import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";

const Customstate = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("John");
  const [person, setPerson] = useState({
    name: "abcd",
    age: 30,
    status: "Developer",
  });

  const Handlepress = () => {
    setCounter(counter + 1);
  };

  const Handlepress1 = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const Handlepress2 = () => {
    setPerson({
      name: input,
      age: 42,
      status: "Engineer",
    });
  };

  const [input, setInput] = useState("");

  return (
    <View style={{ marginVertical: 14 }}>
      <Text style={{ marginVertical: 14, textAlign: "center" }}>
        My name is: {person.name} Age: {person.age} Job: {person.status}
      </Text>
      <Text style={{ marginVertical: 14, textAlign: "center" }}>
        Counter: {counter}
      </Text>

      <TextInput
        value={input}
        onChangeText={setInput}
        style={{
          borderWidth: 2,
          padding: 6,
          borderBlockColor: "blue",
          width: "80%",
        }}
        placeholder="Text"
      ></TextInput>

      <View style={{ margin: 20 }}>
        <Button title="Increase" onPress={Handlepress}></Button>
        <Button title="Increase" onPress={Handlepress1}></Button>
        <Button title="Set new person" onPress={Handlepress2}></Button>
        <Text style={{ marginVertical: 14, textAlign: "center" }}>
          You clicked {counter} times
        </Text>
      </View>
    </View>
  );
};

export default Customstate;
