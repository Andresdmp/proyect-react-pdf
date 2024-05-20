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

const moduloEntidadPagadora: React.FC = () => {
  return (
    <View>
      <View style={styles.tableContainer}>
        <Text style={{ fontSize: 14, textAlign: 'center' }}>
          ENTIDAD PAGADORA
        </Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Entidad:</Text>
            <Text style={styles.txts}>E.P.S. SANITAS S A S</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>NIT:</Text>
            <Text style={styles.txts}>800251440-6</Text>
          </View>
        </View>

        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Contrato:</Text>
            <Text style={styles.txts}>IBOGCU2225 - SANITAS</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Numero de Poliza:</Text>
            <Text style={styles.txts}>560-88-9940000000060</Text>
          </View>
        </View>

        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Numeros de Contrato:</Text>
            <Text style={styles.txts}>NUEVO</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Cobertura:</Text>
            <Text style={styles.txts}>PLAN DE BENEFICIOS EN SALUD</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.labels}>Modalidades de Pago:</Text>
          <Text style={styles.txts}>POR SERVICIO</Text>
        </View>

        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Numeros de Autorización:</Text>
            <Text style={styles.txts}>123456789,0987654321</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Periodo de Pago:</Text>
            <Text style={styles.txts}>30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default moduloEntidadPagadora;
