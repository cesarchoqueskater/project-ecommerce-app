//import * as React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getItemsId } from '../firebase/db';

import ItemCount from './ItemCount';

function ItemDetailContainer() {

    const [itemObject, setItemObject] = useState([])
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {

        setLoading(true);

        getItemsId(id)
        .then(res => setItemObject(res[0]))

        getItemsId(id)
            .then(res => {
                setItemObject(res[0]); 
            })
            .catch(err => {
                console.error("Error: ", err);
            })
            .finally(() => {
                setLoading(false); 
            });
      
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                </button>
            </div>
        );
    }

    return (
        <div key={itemObject.objectID} className="container">
            <div className="row mt-5">
                <div className="col-sm-12 col-md-6">
                    <h3>{itemObject.title}</h3>
                    <p>{itemObject.culture}</p>
                    <p>{itemObject.objectDate}</p>
                    <div className="mb-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 mb-4">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Overview</a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Repository</a>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                        <div className="list-group">
                                            <a className="list-group-item list-group-item-action"><strong>Title:</strong> {itemObject.title}</a>
                                            <a className="list-group-item list-group-item-action"><strong>Date:</strong> {itemObject.objectDate}</a>
                                            <a className="list-group-item list-group-item-action"><strong>Geographic:</strong> {itemObject.country}</a>
                                            <a className="list-group-item list-group-item-action"><strong>Culture:</strong> {itemObject.culture}</a>
                                            <a className="list-group-item list-group-item-action"><strong>Medium:</strong> {itemObject.medium}</a>
                                            <a className="list-group-item list-group-item-action"><strong>Dimensions:</strong> {itemObject.dimensions}</a>
                                            <a className="list-group-item list-group-item-action"><strong>Classification:</strong> {itemObject.classification}</a>
                                            <a className="list-group-item list-group-item-action"><strong>Credit Line:</strong> {itemObject.creditLine}</a>
                                            <a className="list-group-item list-group-item-action"><strong>Object Number:</strong> {itemObject.accessionNumber}</a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                    <div className="list-group">
                                            <a className="list-group-item list-group-item-action">{itemObject.repository}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ItemCount itemObject={itemObject}/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img src={ itemObject.primaryImage ? itemObject.primaryImage : "/src/assets/img/Image-not-found.png"} className="img-fluid rounded-start" alt={itemObject.title} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;