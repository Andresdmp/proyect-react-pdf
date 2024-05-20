import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  labels: {
    flexDirection: 'row',
    fontWeight: 'bold',
    marginRight: 10
  },

  txts: {
    fontWeight: 'bold',
    color: 'darkgray',
    marginRight: 10
  },
  sectionFirmas: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 1,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey'
  },

  labelContainer: {
    flexDirection: 'row', // Para alinear los elementos horizontalmente
    alignItems: 'center', // Para centrar verticalmente los elementos en el View
    marginRight: 20 // Espacio a la derecha de cada par de label y texto
  }
});

const Footer: React.FC = () => {
  return (
    <View>
      <View style={{ fontSize: 8, marginTop: 10, marginBottom: 10 }}>
        <View style={styles.labelContainer}>
          <Text style={styles.labels}>Observaciones: </Text>
          <Text style={styles.txts}>
            APLICACION 29/4/2024 OM 8/4/2024 AUT 264035063-263844249 VALIDACION
            244643034112-243483759616
          </Text>
        </View>
      </View>

      <View style={styles.sectionFirmas}>
        <View style={{ fontSize: 8, marginTop: 20 }}>
          <Text style={styles.labels}>
            ---------------------------------------------
          </Text>
          <Text style={styles.labels}>Elaborado por: </Text>
        </View>

        <View style={{ fontSize: 8, marginTop: 20 }}>
          <Text style={styles.labels}>
            ---------------------------------------------
          </Text>
          <Text style={styles.labels}>Nombre: </Text>
          <Text style={styles.labels}>Identificacion: </Text>
          <Text style={styles.labels}>Fecha: </Text>
        </View>
      </View>

      <View style={styles.pageNumber}>
        <Text
          render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
        />
      </View>
    </View>
  );
};

export default Footer;
