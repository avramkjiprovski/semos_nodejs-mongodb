const writers = [
    {
        id: 1,
        name: "Douglas Adams"
    },
    {
        id: 2,
        name: "H.P. Lovecraft"
    },
    {
        id: 3,
        name: "Mary Shelley"
    }
]


const getAllWriters = async () => {
    return writers
}


module.exports = {
    getAllWriters,
}