import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Items.css'

const Items = (props) => {
    const { _id, brandName, imgUrl, name, price } = props.item;
    const history = useHistory();

    const handleOrder = () => {
        history.push(`/checkOut/${_id}`);
    }

    return (
        <div className="col-md-3 teamContainer" >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= { imgUrl } />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Brand: {brandName}</p>
                        <p>Price: {price}</p>
                    </Card.Text>
                    <Button onClick={handleOrder} variant="primary">Order</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Items;