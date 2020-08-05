 const fs = require('fs')


 const funcs = function (){
const data = JSON.parse(fs.readFileSync('json.json').toString())
data.name = 'seif'
data.age= ' 23'
data.planet = 'mars'

const dataJson = JSON.stringify(data);

fs.writeFileSync('json.json' , dataJson)
}

module.exports = funcs;


//console.log(data)