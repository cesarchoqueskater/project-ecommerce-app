import { useState, useEffect } from 'react'
import { useNavigate } from "react-router";

function Item({ item }) {

    const [itemObject, setItemObject] = useState([])
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    /*
    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${item}`)
            .then(res => res.json())
            .then(res => setItemObject(res))
    }, []);
    */

    useEffect(() => {

        const fetchData = async () => {
          try {
            setLoading(true);
            
            const response = await fetch(
              `https://collectionapi.metmuseum.org/public/collection/v1/objects/${item}`
            );
    
            if (!response.ok) {
              throw new Error("Error al obtener los registros del elemento.");
            }
    
            const data = await response.json();
            setItemObject(data);
    
            if (!data || data.length === 0) {
              throw new Error("No se encontro ningun elemento.");
            }
    
          } catch (err) {
            setError(err.message); 
          } finally {
            setLoading(false); 
          }
        };
    
        fetchData();
      }, []);
    
    // Mostrar un mensaje de carga mientras se obtienen los datos
    if (loading) {
        return <div className='d-flex justify-content-center p-5'>
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>;
    }  

    return (
        
        <div key={itemObject.objectID} className="card">
            <img src={itemObject.primaryImageSmall ? itemObject.primaryImageSmall : "/src/assets/img/Image-not-found.png"} className="card-img-top" alt={itemObject.title} />
            <div className="card-body">
                <h5 className="card-title">{itemObject.title}</h5>
                <p className="card-text">{itemObject.artistDisplayName}</p>
                <p className="card-text">Date {itemObject.objectDate ? itemObject.objectDate : 'Not Found'}</p>
                <button onClick = { () => navigate(`/culture/detail/${itemObject.objectID}`) } className="btn btn-primary">See more</button>
            </div>
        </div>
      );
}

export default Item;