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
        <div key={itemObject.objectID} className="container">


            <div className="row mt-5">
                <div className="col">
                    <h3>{itemObject.title}</h3>
                    <p>{itemObject.culture}</p>
                    <p>{itemObject.objectDate}</p>

                    <div className="sa">
                        <div class="row">
                            <div class="col-4">
                                <div class="list-group" id="list-tab" role="tablist">
                                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Overview</a>
                                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Repository</a>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                        <div class="list-group">
                                            <a class="list-group-item list-group-item-action"><strong>Title:</strong> {itemObject.title}</a>
                                            <a class="list-group-item list-group-item-action"><strong>Date:</strong> {itemObject.objectDate}</a>
                                            <a class="list-group-item list-group-item-action"><strong>Geographic:</strong> {itemObject.country}</a>
                                            <a class="list-group-item list-group-item-action"><strong>Culture:</strong> {itemObject.culture}</a>
                                            <a class="list-group-item list-group-item-action"><strong>Medium:</strong> {itemObject.medium}</a>
                                            <a class="list-group-item list-group-item-action"><strong>Dimensions:</strong> {itemObject.dimensions}</a>
                                            <a class="list-group-item list-group-item-action"><strong>Classification:</strong> {itemObject.classification}</a>
                                            <a class="list-group-item list-group-item-action"><strong>Credit Line:</strong> {itemObject.creditLine}</a>
                                            <a class="list-group-item list-group-item-action"><strong>Object Number:</strong> {itemObject.accessionNumber}</a>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                    <div class="list-group">
                                            <a class="list-group-item list-group-item-action">{itemObject.repository}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <img src={itemObject.primaryImage} className="img-fluid rounded-start" alt={itemObject.title} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;