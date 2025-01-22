import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getItems, getItemsCategory } from '../firebase/db'

import ItemListContainer from './ItemListContainer'

function Body() {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { name } = useParams();


  let nameParameter = name;

  useEffect(() => {

      setLoading(true);  
      setError(null)
      
      const fetchData = async () => {
        try {
          let data
          if (nameParameter) {
            data = await getItemsCategory(nameParameter)
          } else {
            data = await getItems()
          }
          setItems(data)
        } catch (err) {
          setError(err.message) 
        } finally {
          setLoading(false) 
        }
      }
      fetchData()
  }, [nameParameter]);

  
  if (loading) {
    return <div className='d-flex justify-content-center mt-5'>
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
              <span role="status"> Loading ...</span>
            </button>
          </div>;
  }
  

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