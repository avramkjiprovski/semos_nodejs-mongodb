const Phone = require("../model/Phone");


// create
const createNewPhone = async (req, res, next) => {
  const { brand, os, model, screenSize, yearOfRelease } = req.body;

  if (!brand || !os || !model || !screenSize || !yearOfRelease) {
    return res.status(400).json("Invalid request!");
  }

  try {
      
    const newPhone = await Phone.create({
        brand, 
        os, 
        model, 
        screenSize, 
        yearOfRelease
    })

    return res.status(200).json(newPhone)

  } catch (error) {
      return res.status(500).json('Server error!')
  }

};
// read
const getAllPhones = async (req, res, next) => {

    try {

        const allPhones = await Phone.find()
        return res.status(200).json(allPhones)
        
    } catch (error) {
        return res.status(500).json('Server error!')
    }

}


module.exports = {
    createNewPhone,
    getAllPhones
}