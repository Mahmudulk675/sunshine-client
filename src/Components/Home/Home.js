import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Items from '../Items/Items';
import './Home.css'


const Home = () => {
 
    const [items, setItems] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://damp-stream-98501.herokuapp.com/items')
        .then(response => response.json())
        .then(data => {setItems(data)
            setSpinner(false);
        })
        
    },[])

    return (
        <div >


           {spinner ? 
              <div className="spinner">
                  <Spinner animation="border" variant="warning" /> 
              </div>

           :
              <div className="row cardContainer">
            {
              items.map(item =><Items item={item} key={item.price}></Items> )
            }
            </div>
           }

        </div>
    );
};

export default Home;