import React, { useEffect, useState } from 'react'
import '../css/data.css'
import logo from '../images/sbil.png'
import document from '../images/document.png'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
// import ChildComponent from './ChildComponent';

function Data() {
  const location = useLocation();
  const { receivedImage, p_file } = location.state || {};
  const [imageUrl, setImageUrl] = useState('');
  const [QRData, setQRData] = useState('');
  const endpoint="get_image"

  const dataFetch=()=>{
    axios.get(`http://localhost:5000/${endpoint}`)
    .then((response) => {
      setImageUrl(response.data);
      console.log(response.data)
      // console.log("Your satus is "+response.status)
    })
    .catch((error) => {
      console.error('Error fetching image URL:', error);
    });
  }
  const QrData=()=>{
    axios.get(`http://localhost:5000/qr_data`)
    .then((response) => {
      setQRData(response.data);
      console.log(response.data)
    })
    .catch((error) => {
      console.error('Error fetching image URL:', error);
    });
  }
  useEffect(() => {
    dataFetch()
    QrData()
    // Make an axios request to fetch the image data and update `imageUrl`
    // Use `receivedImage` prop to display the image
  }, [receivedImage]);
    // Fetch image URL from the API

    // console.log(p_file)
    return (
      <>
      {/* {imageUrl.Document_type === 'Aadhaar' && ( */}
        {/* <> */}
        <div className='data_div'>
          <img className='data_logo' src={logo} alt='image' />
        </div>
        <div className='info'>
          <h4 className='info_tag'>Document Type: {imageUrl.Document_type} </h4>
          {imageUrl.Document_type=='PAN CARD' && <h4 className='info_tag'>Document View: FRONT </h4>}
          {imageUrl.Document_type!='PAN CARD' && <h4 className='info_tag'>Document View: {imageUrl.view} </h4>}
            {imageUrl.Document_type=='Aadhaar' && <h4 className='info_tag'>Document Last 4 digits: {QRData.aadhaar_last_4_digit} </h4>}
            {imageUrl.Document_type=='Aadhaar' && <h4 className='info_tag'>Name: {QRData.name} </h4>}
            {imageUrl.Document_type=='DRIVING LICENSE' && <h4 className='info_tag'>State: {imageUrl.State} </h4>}
            {/* {imageUrl.Document_type=='PAN CARD' && <h4 className='info_tag'>Father's Name: {imageUrl.Father_Name} </h4>} */}
            {imageUrl.Document_type!='Aadhaar' &&<h4 className='info_tag'>Name: {imageUrl.name} </h4>}
            {imageUrl.Document_type=='Aadhaar' && <h4 className='info_tag'>Gender: {imageUrl.gender} </h4>}
            <h4 className='info_tag'>DOB: {imageUrl.dob} </h4>
            {/* <h4 className='info_tag'>Address: {imageUrl.house
} {imageUrl.street} {imageUrl.subdistrict} {imageUrl.state}</h4> */}
            <h4 className='info_tag'>Doc Number: {imageUrl.DocNo} </h4>
        </div>
        <div className='data'>
        <div className='data_left'>
            <h1>Before</h1>
            <img className='document_img' src={p_file} alt='image' onClick={dataFetch}/>
            <h3>Size of the image: 8mb</h3>
          </div>
          {imageUrl.Document_type=='Aadhaar' && <> <div className='data_right'>
            <h1>After</h1>
            <img className='document_img' src={`data:image/jpeg;base64,${receivedImage}`} alt='Received Image' />
            <h3>Size of the image: 4mb</h3>
          </div></>}
        </div>
        {/* </> */}
        {imageUrl.Document_type=='Aadhaar' && <div style={{padding:'20px', marginLeft:'20px'}}>
            <h2>QR Code Data</h2>
            <h4>{JSON.stringify(QRData)}</h4>
          </div>}
        )

{/* {imageUrl.Document_type === 'Pan_Card' && (
        <>
        <div className='data_div'>
          <img className='data_logo' src={logo} alt='image' />
        </div>
        <div className='info'>
          <h4 className='info_tag'>Document Type: {imageUrl.Document_type} </h4>
            <h4 className='info_tag'>Name: {imageUrl.name} </h4>
            <h4 className='info_tag'>Gender: {imageUrl.gender} </h4>
            <h4 className='info_tag'>DOB: {imageUrl.dob} </h4>
            <h4 className='info_tag'>Address: {imageUrl.address}</h4>
            <h4 className='info_tag'>Doc Number: {imageUrl.DocNo} </h4>
        </div>
        </>
        )} */}
</>
    );
}
export default Data