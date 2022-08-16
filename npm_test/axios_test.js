const axios = require('axios');



const url = 'https://dog.ceo/api/breeds/';

axios.get(url+'list/all')
     .then(res => {
        console.log(res);
     })
     .catch(error => {
       console.log(error);
     })
     .then(() =>{
        console.log("Funcion ejecutada");
     });

