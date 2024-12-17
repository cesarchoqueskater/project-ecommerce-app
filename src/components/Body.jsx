import { useState, useEffect } from 'react'

import ItemListContainer from './ItemListContainer'

function Body() {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://collectionapi.metmuseum.org/public/collection/v1/search?q=moche&dateBegin=1700"
        );

        if (!response.ok) {
          throw new Error("Error al obtener los objectIDs");
        }

        const data = await response.json();
        setItems(data.objectIDs);

        if (!data.objectIDs || data.objectIDs.length === 0) {
          throw new Error("No se encontraron objectIDs");
        }

      } catch (err) {
        setError(err.message); // Capturar errores
      } finally {
        setLoading(false); // Fin de la carga
      }
    };

    fetchData();
  }, []);

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Mostrar un mensaje de error si ocurre algún problema
  if (error) {
    return <div className="alert alert-danger m-4" role="alert">{error}</div>;
  }
  return (
    <div className="container-fluid mt-4">

      <ItemListContainer items={items} />
    </div>

  );
}
export default Body;