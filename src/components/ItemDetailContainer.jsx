//import * as React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function ItemDetailContainer() {

    const [itemObject, setItemObject] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then(res => res.json())
            .then(res => setItemObject(res))
    }, []);

    return (
        <div key={itemObject.objectID} className="card">
            {itemObject.objectID}
        </div>
      );
}

export default ItemDetailContainer;