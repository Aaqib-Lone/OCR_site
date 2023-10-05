import React from 'react'
import '../css/data.css'
import logo from '../images/sbil.png'
import document from '../images/document.png'

function Data() {
  return (
    <>
    <div className='data_div'>
    <img className='data_logo' src={logo} alt='image'/>
    </div>
    <div className='info'>
            <h4 className='info_tag'>Document Type: Aadhar Card </h4>
            <h4 className='info_tag'>Document No: 6789 5468 8765 </h4>
            <h4 className='info_tag'>Name: Aakanksha Atugade </h4>
            <h4 className='info_tag'>Gender: Female </h4>
            <h4 className='info_tag'>DOB: 02/09/2001 </h4>
            <h4 className='info_tag'>Address: Vashi, Navi Mumbai 400703</h4>
    </div>
    <div className='data'>
        <div className='data_left'>
            <h1>Before</h1>
            {/* <p> All the data before processing</p> */}
            <img className='document_img' src={document} alt='image'/>
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