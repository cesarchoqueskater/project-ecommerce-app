import { useState, useEffect } from 'react'
import { useNavigate } from "react-router";

function Item({ item }) {

  
  const [itemObject, setItemObject] = useState([])
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    try {
      setLoading(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
          <div key={item.objectID} className="card">
            <img src={item.primaryImageSmall ? item.primaryImageSmall : "/src/assets/img/Image-not-found.png"} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.artistDisplayName}</p>
              <p className="card-text">Date {item.objectDate ? item.objectDate : 'Not Found'}</p>
              <button onClick={() => navigate(`/culture/detail/${item.objectID}`)} className="btn btn-primary">See more</button>
            </div>
          </div>
          )
}

export default Item;