const Distro = require('../pkg/Distro')

const addNewDistro = async (req, res, next) => {
    const {packageManager, name, isUnstable, difficultyLevel} = req.body


    try {
        const newDistro = await Distro.create({
            packageManager,
            name,
            isUnstable,
            difficultyLevel
        })

        return res.status(201).json(newDistro)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

const getDistrosByPkgManager = async (req, res, next) => {
    const { pkgManager } = req.query

    try {
        if(!pkgManager){
            const allDistros = await Distro.find()
            return res.status(200).json(allDistros)
        }else{
            const allDistros = await Distro.find({
                packageManager: pkgManager,
            })
        return res.status(200).json(allDistros)
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


module.exports = {
    addNewDistro,
    getDistrosByPkgManager
}