import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image
} from '@react-pdf/renderer';
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
  },

  page: {
    backgroundColor: 'white',
    padding: 30
  },

  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 100)' // Añade una sombra al texto
  },

  section: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#000'
  },

  sectionFirmas: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey'
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
  column: {
    width: '15%',
    padding: 5,
    borderRightWidth: 1,
    borderColor: '#000'
  },

  firstColumn: {
    flex: 0.5,
    textAlign: 'center',
    padding: 5,
    borderRightWidth: 1
  },
  lastColumn: {
    width: '15.5%',
    padding: 5,
    borderRightWidth: 1
  }
});

const PDF: React.FC = () => {
  return (
    <Document>
      <Page style={styles.page}>
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

        <Text style={styles.title}>FACTURA DE VENTA</Text>

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
            <Text style={[styles.cell, { flex: 1, textAlign: 'center' }]}>
              1
            </Text>
            <Text style={[styles.cell, { flex: 2, textAlign: 'center' }]}>
              C181
            </Text>
            <Text style={[{ flex: 4, textAlign: 'center' }]}>
              TUMOR MALIGNO DEL APENDICE
            </Text>
          </View>
        </View>

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
              EQUIPO PARA BOMBA INFUSION ESTANDAR EN UNIDAD(ES) - (.)
              [FRESENIUS]
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
              REDDY'S LABORATORIES LIMITED]
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
              Valor total a pagar: NUEVE MILLONES NOVECIENTOS SETENTA Y CUATRO
              MIL DOSCIENTOS NOVENTA Y SIETE PESOS M/CTE
            </Text>
            <Text style={[{ flex: 2, textAlign: 'right' }]}>$9.974.297</Text>
          </View>
        </View>

        <View style={{ fontSize: 8, marginTop: 10, marginBottom: 10 }}>
          <View style={styles.labelContainer}>
            <Text style={styles.labels}>Observaciones: </Text>
            <Text style={styles.txts}>
              APLICACION 29/4/2024 OM 8/4/2024 AUT 264035063-263844249
              VALIDACION 244643034112-243483759616
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
            render={({ pageNumber, totalPages }) =>
              `${pageNumber}/${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default PDF;
