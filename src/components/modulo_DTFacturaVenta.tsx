import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  tableContainer: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: 'black',
    fontSize: 9
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
  }
});

const moduloDTFactura: React.FC = () => {
  return (
    <View>
      <View style={styles.tableContainer}>
        <View style={styles.columnHeaders}>
          <Text style={[styles.cell, { flex: 0.6, textAlign: 'center' }]}>
            No
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            Código 1
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            Código 2
          </Text>
          <Text style={[styles.cell, { flex: 4, textAlign: 'center' }]}>
            Descripcion
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            Cantidad
          </Text>
          <Text style={[styles.cell, { flex: 2, textAlign: 'center' }]}>
            Valor Unitario
          </Text>
          <Text style={[styles.cell, { flex: 1.6, textAlign: 'center' }]}>
            Tipo Pago Compartido
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            Valor Compartido
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            Valor Total
          </Text>
        </View>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.columnHeaders}>
          <Text style={[styles.cell, { flex: 0.6, textAlign: 'center' }]}>
            1
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            992511
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            992511
          </Text>
          <Text style={[styles.cell, { flex: 4, textAlign: 'center' }]}>
            MONOTERAPIA ANTINEOPLASICA DE ALTA TOXICIDAD - (PBS)
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            1
          </Text>
          <Text style={[styles.cell, { flex: 2, textAlign: 'center' }]}>
            $267.458
          </Text>
          <Text style={[styles.cell, { flex: 1.6, textAlign: 'center' }]}>
            COPAGO
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            $0
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            $267.458
          </Text>
        </View>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.columnHeaders}>
          <Text style={[styles.cell, { flex: 0.6, textAlign: 'center' }]}>
            2
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            992511
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            02IN018034
          </Text>
          <Text style={[styles.cell, { flex: 4, textAlign: 'center' }]}>
            EQUIPO PARA BOMBA INFUSION ESTANDAR EN UNIDAD(ES) - (.) [FRESENIUS]
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            1
          </Text>
          <Text style={[styles.cell, { flex: 2, textAlign: 'center' }]}>
            $35.319
          </Text>
          <Text style={[styles.cell, { flex: 1.6, textAlign: 'center' }]}>
            COPAGO
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            $0
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            $35.319
          </Text>
        </View>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.columnHeaders}>
          <Text style={[styles.cell, { flex: 0.6, textAlign: 'center' }]}>
            3
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            19932754-04
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            CLORURO DE SODIO
          </Text>
          <Text style={[styles.cell, { flex: 4, textAlign: 'center' }]}>
            SSN 0.9% X 100 ML (CLORURO DE SODIO) X 0.9 GRAMO(S) EN SOLUCION
            INYECTABLE - (.) [FRESENIUS]
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            2
          </Text>
          <Text style={[styles.cell, { flex: 2, textAlign: 'center' }]}>
            $1.616
          </Text>
          <Text style={[styles.cell, { flex: 1.6, textAlign: 'center' }]}>
            COPAGO
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            $0
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            $3.232
          </Text>
        </View>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.columnHeaders}>
          <Text style={[styles.cell, { flex: 0.6, textAlign: 'center' }]}>
            4
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            20169679-01
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            PERSIVIA®
          </Text>
          <Text style={[styles.cell, { flex: 4, textAlign: 'center' }]}>
            BEVACIZUMAB X 100 MILIGRAMO(S) EN SOLUCION INYECTABLE - (.) [DR.R
            REDDY S LABORATORIES LIMITED]
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            8
          </Text>
          <Text style={[styles.cell, { flex: 2, textAlign: 'center' }]}>
            $1.208.536
          </Text>
          <Text style={[styles.cell, { flex: 1.6, textAlign: 'center' }]}>
            COPAGO
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            $0
          </Text>
          <Text style={[styles.cell, { flex: 1.5, textAlign: 'center' }]}>
            $9.668.288
          </Text>
        </View>
      </View>
    </View>
  );
};

export default moduloDTFactura;
