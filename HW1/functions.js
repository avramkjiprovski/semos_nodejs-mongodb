const fs = require('fs/promises')
const path = require('path')

/**
 * This function will write new content to new or existing file according to file path
 * @param {string} filePath 
 * @param {string} dataToWrite 
 * @returns {void}
 */

const fileWriter = async (filePath, dataToWrite) => {
    // console.log(filePath, dataToWrite)
    try{
        await fs.writeFile(filePath, dataToWrite)
    }catch(error){
        console.log("DON'T PANIC: ", error)
    }
}

/**
 * This function will read the content of specified path
 * @param {string} filePath
 * @returns {string}
 */
const fileReader = async (filePath) => {
    try{
        const rawData = await fs.readFile(filePath)
        return rawData.toString()
    }catch(err){
        console.log('I may have made a grievous mistayke', err)
    }
}
/**
 * This is an extra unrequired function (in the homework)
 * It seemed more practical that we'd have to have a function that updates a file's contents.
 * @param {string} filePath
 * @param {string} dataToWrite
 * @returns {string || void}
 */
const fileUpdater = async (filePath, dataToWrite) => {
    try{
        let toReturn
        await fileReader(filePath)
            .then(data => {
                const updatedData = data+"\n"+dataToWrite
                fileWriter(filePath, updatedData)
                toReturn = updatedData
            })
            .catch(err=>{
                console.log(err)
            })

            return toReturn
        
    }catch(err){
        console.log("Updater failed the one job it had", err)
    }
}

module.exports = {
    fileWriter,
    fileReader,
    fileUpdater
}