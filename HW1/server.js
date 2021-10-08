const http = require('http')
const path = require('path')
const {fileWriter, fileReader, fileUpdater} = require('./functions')

const filePath = path.join(__dirname, 'myPreference.txt')

const server = http.createServer((req, res)=>{})

server.listen(8080, () => {
    console.log("Server's up boss!")
    fileWriter(filePath, "Unless it's black tea, it has to be coffee!")
        .then(()=>{
            console.log("No panic, only success!")
        })
        .catch((error)=>{
            console.log(error)
        })
    fileReader(filePath)
        .then((data)=>{
            console.log("fileReader: ", data)
        })
        .catch(err => {
            console.log(err)
        })
    fileUpdater(filePath, "Is it")
        .then(data => {
            console.log("fileUpdater: ", data)
        })
        .catch(err=>{
            console.log(err)
        })
})