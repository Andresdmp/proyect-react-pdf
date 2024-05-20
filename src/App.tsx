import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDF from './components/PDF';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px', color: '#007bff' }}>
        Ejemplo React PDF
      </h1>

      <p style={{ marginBottom: '20px' }}>
        <strong>Autor:</strong> Andrés Daniel Moreno Prieto
      </p>
      <div>
        <PDFDownloadLink
          document={<PDF pageCount={10} />}
          fileName="myFirstPdf.pdf"
        >
          {({ loading }) =>
            loading ? (
              <button style={{ width: '100%', height: '60px' }}>
                Loading Document ...
              </button>
            ) : (
              <button
                className="btn btn-primary"
                style={{
                  marginRight: '10px',
                  padding: '10px',
                  borderRadius: '5px'
                }}
              >
                ¡Descargar ahora!
              </button>
            )
          }
        </PDFDownloadLink>

        <PDFViewer
          style={{ marginTop: '30px', width: '100%', height: '600px' }}
        >
          <PDF pageCount={10} />
        </PDFViewer>
      </div>
    </div>
  );
};

export default App;
