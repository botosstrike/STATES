import React, { useState } from "react";
import { 
StyleSheet, 
View, 
Button, 
Text, 
SafeAreaView, 
FlatList, 
} from "react-native";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Murat" },
    {
      id: 2,
      name: "Yasemin",
    },
  ]);

  const handlePress = () => {
    setUsers((prev) => [
      ...prev, 
      { id: Math.floor(Math.random() * 1000), 
        name: Math.floor(Math.random() * 1000), 
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={users} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />

      <Button title="EKLE" onPress={handlePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: "#eee",
        padding: 30,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 40,
    },
});

export default App;