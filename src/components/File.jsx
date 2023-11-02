import React, { useState } from 'react';
import axios from 'axios';
import '../css/file.css';
import logo from '../images/sbil.png';
import sbil from '../images/sbil.png';
import { Link, useNavigate } from 'react-router-dom';

function File(props) {
  const [selectedFile, setSelectedFile] = useState('');
  const [formData, setFormData] = useState({
    selectedFile: null,
    message: '',
  });
  const [receivedImage, setReceivedImage] = useState(null);
  const [preview_file, setPreview_file] = useState(null);

  const navigate = useNavigate(); // Initialize the navigation object
  
  const handleChangeOption = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      selectedFile: e.target.files[0]
    });
    // setSelectedFile(e.target.files[0]);
    setPreview_file(e.target.files[0]);
  };

  const handleUpload = async () => {
    const data = new FormData();
    data.append('image', formData.selectedFile);
    data.append('message', formData.message);

    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", data);
      console.log(response.data.message);
      console.log("Your status is "+response.status);
      setReceivedImage(response.data.processed_image);

      navigate('/data', { state: { receivedImage: response.data.processed_image, p_file: URL.createObjectURL(preview_file) } }); // Use navigate to pass data
    } catch (error) {
      console.error(error);
      setReceivedImage(error)
    }
  };
  console.log(formData.message)
  return (
    <>
      <div className='body'>
        <img className='logo' src={sbil} alt="Logo" />
        <div className='option'>
          <h2 className='select-type'>Select file type: </h2>
          <select name="select" id="select" className='select' onChange={handleChangeOption}>
          <option value="">Select an option</option>
            <option id="aadhar" value="aadhar_card">Aadhar Card</option>
            <option id='pan' value="pan_card">Pan Card</option>
            <option id='dl' value="driving_licence">Driving Licence</option>
            <option id='voter' value="voter_card">Voter ID</option>
            <option id='passport' value="passport">Passport</option>
          </select>
        </div>
        <div>
          <input className='upload-input' type="file" onChange={handleFileChange} />
          <Link to='/data'>
            <button className='upload-btn' onClick={handleUpload}>Upload</button>
            {/* <button className='upload-btn'>Submit</button> */}
          </Link>
        </div>
      </div>
      {/* <div>{receivedImage}</div> */}
    </>
  );
}

export default File;
