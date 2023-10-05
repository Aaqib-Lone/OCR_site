import React, { useState } from 'react'
import axios from 'axios'
import '../css/file.css'
import sbil from '../images/sbil.png'
import { Link } from 'react-router-dom';
function File() {
const [selectedFile, setSelectedFile] = useState(null);
const [selectedOption, setSelectedOption] = useState(null);

const handleOption= async(e)=>{
  setSelectedOption(e.target.value);
  // console.log(e.target.value)
  try {
    await axios.post("http://localhost:8080/option")
    
  } catch (error) {
    console.log(error)
    
  }


}

const handleFileChange = (e) => {
  setSelectedFile(e.target.files[0]);
};

const handleUpload = async () => {
  const data=new FormData();
  data.append('selectedFile',selectedFile);

  // You can implement the file upload logic here
  try {
    await axios.post("http://localhost:8080/upload",data)
    .then((response)=>{
      console.log(response.data.message);
      setSelectedFile(null)
    })
  } catch (error) {
    console.error(error);
  }
  // selectedFile contains the selected file
  if (selectedFile) {
    // Perform the file upload using an API or other methods
    console.log('Selected file:', selectedFile);
  } else {
    alert('Please select a file first.');
  }
};

return (
  <>
  <div className='body'>
    <img className='logo' src={sbil}/>
    <div className='option'>
      <h2 className='select-type'>Select file type:   </h2>
      <select  name="select" id="select" className='select' onChange={handleOption}>
          <option id="aadhar"  value="aadhar_card">Aadhar Card</option>
          <option id='pan' value="pan_card">Pan Card</option>
          <option id='dl' value="driving_licence">Driving Licence</option>
          <option id='voter' value="voter_card">Voter ID</option>
          <option id='passport' value="passport">Passport</option>
        </select>
    </div>
    <div>
    <input className='upload-input' type="file" onChange={handleFileChange} />
    <Link to='/data'><button className='upload-btn' onClick={handleUpload}>Upload</button></Link>
    </div>
  </div>
  </>
);

  
}

export default File