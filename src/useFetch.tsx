import { useState, useEffect } from 'react';

export function useFetch(url: string) {
  // Estado para almacenar los datos recibidos del backend
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar la llamada al backend para obtener los datos
        const response = await fetch(url);
        const jsonData = await response.json();
        // Almacenar los datos en el estado
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Llamar a la función fetchData al montar el componente
  }, [url]); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

  // Retornar un array vacío si los datos son null
  return data || [];
}
