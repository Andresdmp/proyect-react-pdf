import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
// import { useFetch } from '../useFetch';

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

const ModuloPaciente: React.FC = () => {
  // const { pacienteData } = useFetch('http://localhost:3000/api/v2/pokemon');

  // if (!pacienteData) {
  //   return <Text>Loading...</Text>;
  // }

  return (
    <View>
      <View style={styles.tableContainer}>
        <Text style={{ fontSize: 14, textAlign: 'center' }}>PACIENTE</Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.container}>
          <Text style={styles.labels}>Nombre:</Text>
          <Text style={{ fontSize: 14 }}>BLANCA NIEVES FLOREZ</Text>
        </View>

        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Género:</Text>
            <Text style={styles.txts}>FEMENINO</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Fecha de Nacimiento:</Text>
            <Text style={styles.txts}>viernes, 22 de octubre de 1948</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Numero:</Text>
            <Text style={styles.txts}>1234567890</Text>
          </View>
        </View>

        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Identificacion - Propiedad:</Text>
            <Text style={styles.txts}>PROPIA</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Tipo:</Text>
            <Text style={styles.txts}>CEDULA DE CIUDADANIA</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Edad:</Text>
            <Text style={styles.txts}>75 Año(s) 6 Mes(es) 8 Dia(s)</Text>
          </View>
        </View>

        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Estado Civil:</Text>
            <Text style={styles.txts}>CASADO(A)</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Telefono(s):</Text>
            <Text style={styles.txts}>1234567890:0987654321</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.labels}>Ocupacion:</Text>
          <Text style={styles.txts}>NO APLICA</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.labels}>Correo(s) Electronico(s):</Text>
          <Text style={styles.txts}>NO TIENE</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.labels}>Direccion de residencia:</Text>
          <Text style={styles.txts}>VEREDA CHIYURCO - PITALITO</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.labels}>Entidad Aseguradora:</Text>
          <Text style={styles.txts}>E.P.S. SANITAS S A S</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.labels}>Entidad Pagadora:</Text>
          <Text style={styles.txts}>IBOGCU2225 - SANITAS</Text>
        </View>

        <View style={styles.verticalContainer}>
          <View style={styles.container}>
            <Text style={styles.labels}>Plan:</Text>
            <Text style={styles.txts}>SUBSIDIADO</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Tipo de Afiliado:</Text>
            <Text style={styles.txts}>BENEFICIARIO</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.labels}>Tipo de Usuario:</Text>
            <Text style={styles.txts}>SUBSIDIADO</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ModuloPaciente;
