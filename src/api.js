export const predict = (audioFile) => {
    const formdata = new FormData();
    formdata.append("audio", audioFile);
   
     const requestOptions = {
       method: 'POST',
       body: formdata,
       redirect: 'follow'
     };
   
     return fetch("http://127.0.0.1:5000/predict", requestOptions)
       .then(response => response.text())
       .then(result => {
         console.log(result);
         return result;
       })
       .catch(error => console.log('error', error));
};
export default predict;