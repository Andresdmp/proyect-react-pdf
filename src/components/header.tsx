import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
// import logo from '../images/TOC-WEB-logo-slide1.png';
import logoUnidadOncologica from '../images/descarga.png';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // Para alinear los elementos horizontalmente
    alignItems: 'center',
    fontSize: 12
  },

  container: {
    flexDirection: 'row', // Para alinear los elementos horizontalmente
    alignItems: 'center'
  },
  labels: {
    flexDirection: 'row',
    fontWeight: 'bold',
    marginRight: 10
  },

  labelContainer: {
    flexDirection: 'row', // Para alinear los elementos horizontalmente
    alignItems: 'center', // Para centrar verticalmente los elementos en el View
    marginRight: 20 // Espacio a la derecha de cada par de label y texto
  },

  txts: {
    fontWeight: 'bold',
    color: 'darkgray',
    marginRight: 10
  },

  logounidOncologica: {
    width: '150px',
    height: '100px',
    marginRight: 20
  }
});

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logounidOncologica} src={logoUnidadOncologica} />
      <View>
        <View style={styles.labelContainer}>
          <Text>Usuario: </Text>
          <Text style={styles.txts}> Andres Moreno</Text>
        </View>

        <View style={styles.labelContainer}>
          <Text>Creacion: </Text>
          <Text style={styles.txts}> 2024-05-09</Text>
        </View>
      </View>

      <View>
        <View style={styles.labelContainer}>
          <Text>Software Gtech </Text>
          <Text style={styles.txts}> - version 1.50.0.0</Text>
        </View>

        <View style={styles.labelContainer}>
          <Text>www.toc.com.co </Text>
          <Text style={styles.txts}>- ® Firma</Text>
        </View>
      </View>
    </View>
  );
};
export default Header;
