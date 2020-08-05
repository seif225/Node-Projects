const request = require('request');
const yargs = require('yargs');
const geocode=require('./utils/geocode.js');

let coordinates;


const url = 'http://api.weatherstack.com/current?access_key=022fb6f3530ce4f18b04e7e1e93cd08d';
const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const accessTokenUrl = 'access_token=pk.eyJ1Ijoic2VpZjIyNSIsImEiOiJjazdzdnV2MTUwbDdjM2dzZml4NXJvZWQ5In0.FFAsNv07SeG8i0FFk3AxjA'



const getAddressTemp=(address)=> {
    
 let mapUrlFull = mapUrl + encodeURIComponent(address)+'.json?'+accessTokenUrl + '&limit=1';

geocode.getCords(mapUrlFull);

}


yargs.command({
    command : 'temp' ,
    describe : 'getting temp',
    builder : {
        address :{
            describe : 'place to get temp',
            demandOption : true,
            type : 'string'

        }
    },
    handler :(argv)=>getAddressTemp(argv.address)
})

yargs.parse();

