import { useState, useEffect } from 'react'
import { useNavigate } from "react-router";

function Item({ item }) {

    const [itemObject, setItemObject] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${item}`)
            .then(res => res.json())
            .then(res => setItemObject(res))
    }, []);

    return (
        <div key={itemObject.objectID} className="card">
            <img src={itemObject.primaryImageSmall ? itemObject.primaryImageSmall : "./src/assets/img/Image-not-found.png"} className="card-img-top" alt={itemObject.title} />
            <div className="card-body">
                <h5 className="card-title">{itemObject.title}</h5>
                <p className="card-text">{itemObject.artistDisplayName}</p>
                <p className="card-text">Fecha {itemObject.objectBeginDate} - {itemObject.objectEndDate}</p>
                <button onClick = { () => navigate(`/culture/detail/${itemObject.objectID}`) } className="btn btn-primary">Ver más</button>
            </div>
        </div>
      );
}

export default Item;