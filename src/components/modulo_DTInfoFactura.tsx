import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Para alinear los elementos horizontalmente
    alignItems: 'center'
  },
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
  tableContainer: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: 'black',
    fontSize: 9
  },
  verticalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const moduloDTFactura: React.FC = () => {
  return (
    <View>
      <View style={styles.tableContainer}>
        <Text style={{ fontSize: 14, textAlign: 'center' }}>
          INFORMACIÓN DE LA FACTURA
        </Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Número:</Text>
            <Text style={{ fontSize: 14 }}>A1 107150</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Fecha:</Text>
            <Text style={styles.txts}>2024-05-09</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.labels}>Sede:</Text>
          <Text style={styles.txts}>
            UNIDAD ONCOLOGICA SURCOLOMBIANA - NEIVA (HUILA) - SEDE 1
          </Text>
        </View>

        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Medio de Pago:</Text>
            <Text style={styles.txts}>TRANSFERENCIA DÉBITO</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>forma de Pago:</Text>
            <Text style={styles.txts}>CREDITO</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.labels}>Fecha de Vencimiento:</Text>
            <Text style={styles.txts}>2024-05-30</Text>
          </View>
        </View>

        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Fecha de Ingreso:</Text>
            <Text style={styles.txts}>2024-05-09</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Fecha de Egreso:</Text>
            <Text style={styles.txts}>2024-05-29</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.labels}>Fecha de Expedicion:</Text>
            <Text style={styles.txts}>2024-05-30 14:40</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default moduloDTFactura;
