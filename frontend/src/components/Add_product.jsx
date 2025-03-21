import React, { useState } from 'react'
import axios from 'axios'


const AddProduct = () => {
    const [noOfImages, setNoOfImages] = useState(new Array(1).fill(1));
    const [productDetails,setProductDetails] = useState({
        name:"",
        email:"",
        password:""
    });
    const [productImages,setProductImages] = useState([]);

    async function handleSubmit(){
        try {
            const {name, email, password} = productDetails;
            if (!name || !email || !password || productImages.length == 0) {
                alert("Please add all fields");
                return;
            }
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            productImages.forEach((image, index) => {
                formData.append(`image${index + 1}`, image);
            });
            await axios.post("http://localhost:8080/product/addproduct", formData);
        } catch (error) {
            console.log(error);
            alert("something wenrt wrong");
            
        }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name={"title"} placeholder='enter title ....' onChange={(event)=>{
                setProductDetails({...productDetails,[event.target.name]:event.target.value});
            }}/>
            <input type="text" name={"description"} placeholder='Enter product description...' onChange={(event)=>{
                setProductDetails({...productDetails,[event.target.name]:event.target.value});
            }} />
            <input type="number" name={"price"} placeholder='Enter product price...' onChange={(event)=>{
                setProductDetails({...productDetails,[event.target.name]:event.target.value});
            }} />
            <select name="" id="" onChange={(event) => {
                console.log(event.target);
                setNoOfImages(new Array(parseInt(event.target.value)).fill(1));
            }}>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
            </select>
            <label htmlFor="">Add Images</label>
            {
                [...Array(noOfImages)].map((_, i) => (
                    <input key={i} type="file" accept='image/*' onChange={(event)=>{
                        setProductImages([...productImages,event.target.files[0]]);
                    }} />
                ))
            }
        </form>
    </div>
  )
}

export default AddProduct