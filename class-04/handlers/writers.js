const Writer = require('../core/Writer')

const getAllWriters = async (req, res, next) => {
    try {
        const allWriters = await Writer.getAllWriters()
        return res.status(200).json(allWriters)
    }catch(error){
        return res.status(500).json(error)
    }
}

module.exports = {
    getAllWriters,
};