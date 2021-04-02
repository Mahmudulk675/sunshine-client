import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './manage.css'

const Manage = () => {
    const [items, setItem] = useState([]);

    useEffect(() => {
        getItems()
    }, []);

    const getItems = () =>{
        fetch('https://damp-stream-98501.herokuapp.com/items')
        .then(response => response.json())
        .then(data => setItem(data))
    }

    const handleDelete = (id)=>{
        fetch(`https://damp-stream-98501.herokuapp.com/admin/deleteItem/${id}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            console.warn(result)
            getItems()
        })
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => 
                         <tr key={item.price}>
                            <td>{item.name}</td>
                            <td>{item.brandName}</td>
                            <td>{item.price}</td>
                            <td> 
                                <div className="icon">
                                <FontAwesomeIcon icon={faTrashAlt}  onClick={()=>handleDelete(item._id)} />
                                </div>
                                <div className="icon">                 
                                <FontAwesomeIcon  icon={faEdit} />
                                </div>
  
                            </td>
                        </tr>
                            )
                    }
                   
                   
                </tbody>
            </Table>
        </div>
    );
};

export default Manage;