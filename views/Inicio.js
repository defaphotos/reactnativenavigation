import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

const Inicio = ({navigation}) => {
    const informacion = {clienteId: 20, totalPagar: 500};
    

    const visitarNosotros =()=>{
      navigation.navigate('Nosotros',informacion)
    }
    return (
      <View style={styles.contenedor}>
        <Text>Inicio</Text>
        <Button onPress={()=>visitarNosotros()} title="Ir a Nosotros" />
        
      </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Inicio;