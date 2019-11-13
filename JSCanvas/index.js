const jsonfile = require('jsonfile')
const file = './data.txt'
let content

const demo = async () => await jsonfile.readFile(file)

content = async () => await demo()

content().then(data => console.log(data))
