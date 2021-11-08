import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from 'react-native';
import * as Speech from 'expo-speech';
import Frases from './frases.json'
export default function App() {
  const[frase,setFrase]= useState("")
    
    function falarFraseAleatoria(){
      const variavel =Math.floor(Math.random() * Frases.length);
      const novaFrase = Frases[variavel]
      setFrase(novaFrase)
      Speech.speak(frase.frases);
  };
    function pararFraseAleatoria(){
      Speech.stop()
    }

  return (
    <View style={styles.container}>
      <Text>Albert Einstein</Text>
      <Button title="escutar frase" onPress={falarFraseAleatoria} />
      <Button title="parar frase" onPress={pararFraseAleatoria} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});