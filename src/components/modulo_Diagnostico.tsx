import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row', // Para alinear los elementos horizontalmente
    alignItems: 'center', // Para centrar verticalmente los elementos en el View
    marginRight: 20 // Espacio a la derecha de cada par de label y texto
  },
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

const moduloDiagnostico: React.FC = () => {
  return (
    <View>
      <View style={styles.tableContainer}>
        <Text style={{ fontSize: 14, textAlign: 'center' }}>DIAGNÓSTICO</Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.columnHeaders}>
          <Text style={[styles.cell, { flex: 1, textAlign: 'center' }]}>
            No.
          </Text>
          <Text style={[styles.cell, { flex: 2, textAlign: 'center' }]}>
            Código
          </Text>
          <Text style={[{ flex: 4, textAlign: 'center' }]}>Nombre</Text>
        </View>

        <View style={styles.columnHeaders}>
          <Text style={[styles.cell, { flex: 1, textAlign: 'center' }]}>1</Text>
          <Text style={[styles.cell, { flex: 2, textAlign: 'center' }]}>
            C181
          </Text>
          <Text style={[{ flex: 4, textAlign: 'center' }]}>
            TUMOR MALIGNO DEL APENDICE
          </Text>
        </View>
      </View>
    </View>
  );
};

export default moduloDiagnostico;
