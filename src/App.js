import './App.css';
import { predict } from './api.js'
import React, { useState } from 'react';

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
      <div className="header-text">
        <h1>BirdChirp</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="audio/*" onChange={handleFileInputChange} />
          <button type="submit">Submit</button>
        </form>
        {apiResponse && <h1 style={{ color: 'white' }}>{apiResponse?.prediction}</h1>}
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