import './App.css';
import { predict } from './api.js'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [audioFile, setAudioFile] = useState(null);
  const [apiResponse, setApiResponse] = useState("");

  const handleFileInputChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (audioFile) {
      predict(audioFile)
        .then(response => {
          const apiResponse = JSON.parse(response)
          setApiResponse(apiResponse);
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#6D9A80' }}>
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">BirdChirp</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <a class="nav-link" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Upload audio</a>
              <a class="nav-link" href="#">About</a>
              <a class="nav-link" href="#"><i className="fas fa-user"></i></a>
            </div>
          </div>
        </div>
      </nav>
      <div class="container text-start my-5">
        <div class="row">
          <div class="col p-5">
            <h2>Discover A New<br></br>
              World Of Birds</h2>
            <p>birds are very attractive and colorful animals and <br></br>we love to see and hear their voices.Let’s
              identify <br></br>and have some fun with their voices</p>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="file-input" className="upload-audio-label">
                  Upload Audio
                  <input id="file-input" type="file" accept="audio/*" onChange={handleFileInputChange} />
                </label>
                <button type="submit" class="submit-btn">Submit</button>
              </form>
              {apiResponse && <h3 style={{ color: '#135630' }}><i><b>{apiResponse?.prediction}</b></i></h3>}
            </div>
          </div>
          <div class="col img-section">
          </div>
        </div>
      </div>
      <div class="my-footer">
      <div class="container">
        <div class="row">
          <div class="col ">
            <div class='bird'></div>
            <p style={{fontSize:'50px'}}>BirdChirp</p>
          </div>
          <div class="col" style={{paddingTop:'100px'}}>
            <p>Rajarata University Of Sri Lanka</p>
            <p>Mihinthale</p>
          </div>
          <div class="col" style={{marginTop:'100px'}}>
          <form onSubmit={handleSubmit}>
                <label htmlFor="file-input" className="upload-audio-label">
                  Upload Audio
                  <input id="file-input" type="file" accept="audio/*" onChange={handleFileInputChange} />
                </label>
                <button type="submit" class="submit-btn">Submit</button>
              </form>
              {apiResponse && <h3 style={{ color: '#135630' }}><i><b>{apiResponse?.prediction}</b></i></h3>}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
{/* <form>
          <label for="audioFile">Select an audio file:</label>
          <input type="file" id="audioFile" name="audioFile"/>
            <br><br>
              <input type="submit" value="Upload"/>
              </form> */}