const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=022fb6f3530ce4f18b04e7e1e93cd08d';
const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const accessTokenUrl = 'access_token=pk.eyJ1Ijoic2VpZjIyNSIsImEiOiJjazdzdnV2MTUwbDdjM2dzZml4NXJvZWQ5In0.FFAsNv07SeG8i0FFk3AxjA'

const getCords = (mapUrlFull)=>{request({
    url:mapUrlFull,
    json: true
},(error , response ,body)=>{
   if(error){
       console.log('something went wrong while trying to connect to the maps API');
   }
   else if (body.code){
       console.log(body.code)
   }
   
   else {
     
    let coordinates;
     
  if(body.features.length>0) coordinates=body.features[0].center;
   let weatherUrlQuery = '&query='
   if(coordinates){
      // console.log(coordinates)

   weatherUrlQuery =url+ weatherUrlQuery + coordinates[0]+','+coordinates[1];
   getTempreture(weatherUrlQuery , (error , data)=>{

    console.log(data)

   });


}
else {
    console.log('couldnt find location');
}
  
   }
})}

const getTempreture=(weatherQueryUrl , callback)=>{

    request({
    url:weatherQueryUrl,
    json:true
}, (error , response ,  weatherBody)=>{
   if(error)  {
     console.log('something happened wrong while weather');
     callback(error,undefined)
 }
 else if (weatherBody.code){
         console.log(error,undefined )

 }
   else {
      
       callback(undefined,weatherBody.current.temperature)
   }

})

}

module.exports= {
     getCords,
     getTempreture
}