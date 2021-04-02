import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import {CustomerContext} from '../../App'
import './CheckOut.css'

const CheckOut = () => {

   const [loggedInUser,setLoggedInUser] = useContext(CustomerContext)

    const {id} = useParams();
    console.log(id);
    const [singleProduct, setSingleProduct] =useState({})

    useEffect(() => {
        fetch(`https://damp-stream-98501.herokuapp.com/checkOut/${id}`)
        .then(response => response.json())
        .then(data => setSingleProduct(data))

    },[id])
    console.log(singleProduct);

    const handleOrders = () => {
      const ordersDetail = {
        ...loggedInUser,
        ...singleProduct,
        orderTime: new Date()
      }
      fetch('https://damp-stream-98501.herokuapp.com/checkOut/'+id,{
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ordersDetail)
      })
      .then(response => response.json())
      .then(data => console.log(data))
    }

    return (
        <div className="container">
          <h2>Check Out</h2>
            <Table  striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Description</th>
      <th>Brand</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{singleProduct.name} </td>
      <td>{singleProduct.brandName}</td>
      <td>{singleProduct.length || 1}</td>
      <td>${singleProduct.price}</td> <br/>    
    </tr>
    
  </tbody>
</Table>
<hr/>
<h5><span className="totalText">Total: ${singleProduct.price}</span></h5>

<Button onClick={handleOrders} variant="success">Check out</Button>
        </div>
    );
};

export default CheckOut;