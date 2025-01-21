import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getItems, getItemsCategory } from '../firebase/db';

import ItemListContainer from './ItemListContainer'

function Body() {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { name } = useParams();

  //let nameParameter = ( typeof name === "undefined") ? 'inca' : name ;

  let nameParameter = name;

  useEffect(() => {

    try{
      setLoading(true);  
    
      if(nameParameter){
        getItemsCategory(nameParameter)
        .then(res => setItems(res))
      }
      else{
        getItems()
        .then(res => setItems(res))
      }

    }catch (err) {
      setError(err.message); // Capturar errores
    } finally {
      setLoading(false); // Fin de la carga
    }
    /*
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${nameParameter}&dateBegin=1400`
        );

        const response = await getItems();

        if (!response.ok) {
          throw new Error("Error al obtener los objectIDs");
        }

        const data = await response.json();
        setItems(data.objectIDs);

        if (!data.objectIDs || data.objectIDs.length === 0) {
          throw new Error("No se encontro ningun elemento.");
        }

      } catch (err) {
        setError(err.message); // Capturar errores
      } finally {
        setLoading(false); // Fin de la carga
      }
    };
    */

    //fetchData();
  }, [nameParameter]);

  // Mostrar un mensaje de carga mientras se obtienen los datos
  
  if (loading) {
    return <div className='d-flex justify-content-center mt-5'>
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
              <span role="status"> Loading ...</span>
            </button>
          </div>;
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