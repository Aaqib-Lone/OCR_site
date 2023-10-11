import React, { useEffect, useState } from 'react'
import '../css/data.css'
import logo from '../images/sbil.png'
import document from '../images/document.png'
import axios from 'axios';

function Data() {
  const [imageUrl, setImageUrl] = useState('');
  const endpoint="get_image"

  const dataFetch=()=>{
    axios.get(`http://localhost:5000/${endpoint}`)
      .then((response) => {
        setImageUrl(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching image URL:', error);
      });
  }
    // Fetch image URL from the API

  return (
    <>
    <div className='data_div'>
    <img className='data_logo' src={logo} alt='image'/>
    </div>
    <div className='info'>
            <h4 className='info_tag'>Document Type: Aadhar Card </h4>
            <h4 className='info_tag'>Document Last 4 digits: {imageUrl.aadhaar_last_4_digit} </h4>
            <h4 className='info_tag'>Name: {imageUrl.name} </h4>
            <h4 className='info_tag'>Gender: {imageUrl.gender} </h4>
            <h4 className='info_tag'>DOB: {imageUrl.dob} </h4>
            <h4 className='info_tag'>Address: {imageUrl.house
} {imageUrl.street} {imageUrl.subdistrict} {imageUrl.state}</h4>
    </div>
    <div className='data'>
        <div className='data_left'>
            <h1>Before</h1>
            {/* <p> All the data before processing</p> */}
            <img className='document_img' onClick={dataFetch} src={imageUrl} alt='image'/>
            <h3>Size of the image: 8mb</h3>
        </div>
        <div className='data_right'>
            <h1>After</h1>
            {/* <p> All the data after processing</p> */}
            <img className='document_img' src={document} alt='image'/>
            <h3>Size of the image: 4mb</h3>
           
        </div>
    </div>
    </>
  )
}

export default Data