import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "1",
    nome: "Maestro",
  },
  {
    id: "2",
    nome: "Marcio",
  },
  {
    id: "3",
    nome: "Marcus",
  },
  {
    id: "4",
    nome: "Marcos",
  },
  {
    id: "5",
    nome: "Marcinho",
  },
  {
    id: "6",
    nome: "Miltinho",
  },
];

const Item = ({ nome, item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.nome, textColor]}>{item.nome}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [iDselecionado, setIDSelecionado] = useState(null);

  const renderItem = ({ item }) => {
    
    const backgroundColor = item.id === iDselecionado ? "#48233C" : "#36558F";
    const color = item.id === iDselecionado ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setIDSelecionado(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={iDselecionado}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#40376E",
  },
  item: {
    padding: 25,
    marginVertical: 10,
    marginHorizontal: 18,
    textAlign:"center",
    textTransform: "uppercase"
  },
  nome: {
    fontSize: 32,
  },
});

export default App;