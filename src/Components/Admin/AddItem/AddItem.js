import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

const AddItem = () => {
   const [productName, setProductName] = useState('');
   const [price, setPrice] = useState();
   const [brandName, setBrandName] = useState('');

   const [imgUrl , setImgUrl] = useState(null);

   console.log(price,productName,brandName);

   const onSubmit = () => {
        const itemData = {
            name: productName,
            price: price,
            brandName: brandName,
            imgUrl: imgUrl
        }
        const url = 'https://damp-stream-98501.herokuapp.com/admin/addItems'
        console.log('dgdfgdfg',itemData );

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(itemData)
        })
        .then(res => console.log('response', res))
   }
  
   const handleImgUpload = event => {
    // console.log(event.target.files[0]);
    const imgData = new FormData();
    imgData.set('key','12f14ca3c3cffac2258fb723b18a8285');
    imgData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imgData)
   .then(function (response) {
     setImgUrl(response.data.data.display_url);
   })
   .catch(function (error) {
     console.log('errr',error);
   });
}

    return (
        <div>
 <Form className="mt-5 row"  >
   <div className="col-md-6">
   <Form.Group controlId="formBasicEmail">
    {/* <Form.Label>Email address</Form.Label> */}
    <Form.Control type="text" placeholder="Product Name" onBlur={(event) => setProductName(event.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicNumber">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control type="number" placeholder="Price" onBlur={(event) => setPrice(event.target.value)}/>
  </Form.Group>
   </div>

   <div className="col-md-6">
   <Form.Group controlId="formBasicEmail">
    {/* <Form.Label>Email address</Form.Label> */}
    <Form.Control type="text" placeholder="Brand Name" onBlur={(event) => setBrandName(event.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group>
     <FontAwesomeIcon icon={faUpload} /> <Form.File id="exampleFormControlFile1" label="Add Photo"  onChange={handleImgUpload}/>
  </Form.Group>   

   </div>

  <Button variant="primary" type="button" onClick={()=> onSubmit()}>
    Submit
  </Button>
</Form>
        </div>
    );
};

export default AddItem;







// import axios from 'axios';
// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';

// const AddItem = () => {
//    const [imgUrl , setImgUrl] = useState(null);

//    const onSubmit = (data) => {
//         const itemData = {
            
//         }
//    }

//    const handleImgUpload = event => {
//     // console.log(event.target.files[0]);
//     const imgData = new FormData();
//     imgData.set('key','12f14ca3c3cffac2258fb723b18a8285');
//     imgData.append('image', event.target.files[0]);

//     axios.post('https://api.imgbb.com/1/upload', imgData)
//    .then(function (response) {
//      setImgUrl(response.data.data.display_url);
//    })
//    .catch(function (error) {
//      console.log('errr',error);
//    });
// }

//     return (
//         <div>
//  <Form className="mt-5 row" onSubmit={onSubmit} >
//    <div className="col-md-6">
//    <Form.Group controlId="formBasicEmail">
//     {/* <Form.Label>Email address</Form.Label> */}
//     <Form.Control type="text" placeholder="Product Name" />
//     <Form.Text className="text-muted">
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     {/* <Form.Label>Password</Form.Label> */}
//     <Form.Control type="text" placeholder="Price" />
//   </Form.Group>
//    </div>

//    <div className="col-md-6">
//    <Form.Group controlId="formBasicEmail">
//     {/* <Form.Label>Email address</Form.Label> */}
//     <Form.Control type="text" placeholder="Brand Name" />
//     <Form.Text className="text-muted">
//     </Form.Text>
//   </Form.Group>

//   <Form.Group>
//     <Form.File id="exampleFormControlFile1" label="Add Photo"  onChange={handleImgUpload}/>
//   </Form.Group>   

//    </div>

//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
//         </div>
//     );
// };

// export default AddItem;