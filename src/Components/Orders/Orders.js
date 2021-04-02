
import React, { useContext, useEffect, useState } from 'react';
import {  Table, Button } from 'react-bootstrap';
import { CustomerContext } from '../../App';
import './Orders.css'

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser,setLoggedInUser]= useContext(CustomerContext)

    useEffect(() => {
        fetch('https://damp-stream-98501.herokuapp.com/orders?email='+loggedInUser.customerEmail)
        .then((response) => response.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div className="container">

            <div className="row customerInfo container">
                <div className="col-md-8 ">
                <h3>Hey <span className="textColor">{loggedInUser.customerName}!</span> You have <span  className="textColor">{orders.length}</span> Order for Shipment</h3>
                </div>

                <div className="col-md-4">
                    <img src={loggedInUser.customerPhotoURL} alt=""/>
                </div>
            </div>
            
            

<Table striped bordered hover size="md" className="mt-5">
  <thead>
    <tr>
      
      <th>Product</th>
      <th>Name</th>
      <th>Price</th>
      <th>Order Time</th>
      <th>Cancel Order</th>
    </tr>
  </thead>
  <tbody>

        {
            orders.map(order =>
            <tr  key={order.price} >
                <td>
                  {/* <Col xs={6} md={4}>
                   <Image className="Image" src={order.imgUrl} thumbnail />
                 </Col> */}
                <img  className="Image" src={order.imgUrl} alt="" thumbnail/>
                </td>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.orderTime}</td>
                <td>
                <Button variant="warning">Cancel</Button>
                </td>
              </tr>
                
             )
        }
{/* 

    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</Table>



            {/* <h2>You have {orders.length}</h2>
            {
                orders.map((order) => <li>
                    {order.customerName} 
                     {order.name} 
                     {order.price}
                     {order.orderTime}
                    </li>)
            } */}
        </div>
    );
};

export default Orders;