// PDF.tsx
import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';
import Header from './header';
import Footer from './Footer';
import ModuloPaciente from './modulo_Paciente';
import ModuloDiagnostico from './modulo_Diagnostico';
import ModuloDTInfoFactura from './modulo_DTInfoFactura';
import ModuloEntidadPagadora from './modulo_EntidadPagadora';
import ModuloDTFacturaVenta from './modulo_DTFacturaVenta';
import ModuloDTPagoFactura from './modulo_DTPagoFactura';

// Define tus estilos aquí
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  }
  // ... otros estilos que necesites
});

const PDF: React.FC<{ pageCount: number }> = ({ pageCount }) => {
  return (
    <Document>
      {Array.from({ length: pageCount }, (_, index) => (
        <Page key={index} style={styles.page}>
          <Header />
          <Text style={styles.title}>FACTURA DE VENTA</Text>
          {/* Asegúrate de pasar las props necesarias a tus módulos */}
          <ModuloPaciente />
          <ModuloDiagnostico />
          <ModuloDTInfoFactura />
          <ModuloEntidadPagadora />
          <ModuloDTFacturaVenta />
          <ModuloDTPagoFactura />
          <Footer />
        </Page>
      ))}
    </Document>
  );
};

export default PDF;
