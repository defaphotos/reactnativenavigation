import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Nosotros = ({navigation, route: {params}}) => {
  const {clienteId} = params;
    const volver = () => {
    navigation.navigate('Inicio');
    //navigation.goBack()
    //navigation.push('Inicio');
  };
  return (
    <View style={styles.contenedor}>
      <Text>{clienteId}</Text>
      <Button onPress={() => volver()} title="Volver a Inicio" />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Nosotros;
