//import * as React from 'react';
import { useState, useEffect } from 'react'

function Item({ item }) {

    const [itemObject, setItemObject] = useState([])

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
                <a href={itemObject.objectID} className="btn btn-primary">Ver más</a>
            </div>
        </div>
      );
}

export default Item;