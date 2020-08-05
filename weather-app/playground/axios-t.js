

const axiosM = require('axios');
const axios = axiosM.create({
    baseURL: 'http://api.weatherstack.com',
    timeout: 4000,
   responseType: 'json'

  });
 

axios.get('/current?access_key=022fb6f3530ce4f18b04e7e1e93cd08d&query=31.21,30.01')
.then((response)=>{
    //response.data !!!! :D 
console.log(response.data.current.temperature);
})
.catch((error)=>{
  //  console.log(error);

})
.finally(()=>{
console.log('WEHOOOO')
})