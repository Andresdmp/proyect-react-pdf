import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  columnHeaders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    flexShrink: 1 // Permite que el contenido de las celdas se expanda para ocupar todo el espacio disponible
  },
  cell: {
    borderRightWidth: 1,
    borderColor: 'black',
    paddingRight: 5 // Añade espacio entre el texto y el borde derecho
  },

  tableContainer: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: 'black',
    fontSize: 9
  }
});

const moduloDTPagoFactura: React.FC = () => {
  return (
    <View>
      <View style={styles.tableContainer}>
        <View style={styles.columnHeaders}>
          <Text
            style={[styles.cell, { fontSize: 7, flex: 8, textAlign: 'left' }]}
          >
            Subtotal : NUEVE MILLONES NOVECIENTOS SETENTA Y CUATRO MIL
            DOSCIENTOS NOVENTA Y SIETE PESOS M/CTE
          </Text>
          <Text style={[{ flex: 2, textAlign: 'right' }]}>$9.974.297</Text>
        </View>

        <View style={styles.columnHeaders}>
          <Text
            style={[styles.cell, { fontSize: 7, flex: 8, textAlign: 'left' }]}
          >
            Valor asumido por el usuario: CERO PESOS M/CTE
          </Text>
          <Text style={[{ flex: 2, textAlign: 'right' }]}>$0</Text>
        </View>

        <View style={styles.columnHeaders}>
          <Text
            style={[styles.cell, { fontSize: 7, flex: 8, textAlign: 'left' }]}
          >
            Valor IVA: CERO PESOS M/CTE
          </Text>
          <Text style={[{ flex: 2, textAlign: 'right' }]}></Text>
        </View>
        <View style={styles.columnHeaders}>
          <Text
            style={[styles.cell, { fontSize: 7, flex: 8, textAlign: 'left' }]}
          >
            Valor total a pagar: NUEVE MILLONES NOVECIENTOS SETENTA Y CUATRO MIL
            DOSCIENTOS NOVENTA Y SIETE PESOS M/CTE
          </Text>
          <Text style={[{ flex: 2, textAlign: 'right' }]}>$9.974.297</Text>
        </View>
      </View>
    </View>
  );
};

export default moduloDTPagoFactura;
