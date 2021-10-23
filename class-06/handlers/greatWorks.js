// tuka kje pravime CRUD operacii
const GreatWork = require("../core/GreatWork");

// C
const addNewGreatWork = async (req, res, next) => {
  // dodavanje dokument vo bazata
  // mora da ima validacija na samata schema

  // validacijata mora da bide tuka za da ne se optovaruva bazata
  const { title, createdBy, description, isMissing, yearofCreation } = req.body;
  if (
    !title ||
    !createdBy ||
    !description ||
    !yearofCreation ||
    isMissing === undefined
  ) {
    return res.status(400).json("Bad request!");
  }

  try {
    const newGreatWork = await GreatWork.create({
      title,
      createdBy,
      description,
      yearofCreation,
      isMissing,

      // samo tittle e isto sto i title: title,
      // ova pogore e skratena verzija
    });

    return res.status(201).json(newGreatWork);
    // 201 e status za uspesno kreiranje
  } catch (error) {
    return res.status(500).json(error); // greska slucena pri insert vo baza
  }
};
// R
const getAllGreatWorks = async (req, res, next) => {
  try {
    const allGreatWorks = await GreatWork.find(); // ako nema parametri, sve naogja .find()
    return res.status(200).json(allGreatWorks);
  } catch (error) {
    // console.log(error)
    return res.status(500).json(error);
  }
};
// U
const editGreatWork = async (req, res, next) => {
  const id = req.params.id;
  const { title, createdBy, description, yearofCreation, isMissing } = req.body;

  if (
    !title ||
    !description ||
    !createdBy ||
    !yearofCreation ||
    isMissing === undefined
  ) {
    return res.status(400).json("Invalid update request!");
  }

  try {
    const updated = await GreatWork.findByIdAndUpdate(id, {
      title,
      createdBy,
      description,
      isMissing,
      yearofCreation,
    });
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json(err);
  }
};
// D
const deleteGreatWork = async (req, res, next) => {
    const id = req.params.id

    try {
        const deleted = await GreatWork.findByIdAndDelete(id)
        return res.status(200).json(deleted)
    } catch (error) {
        return res.status(500).json(error)
    }

};

module.exports = {
  getAllGreatWorks,
  addNewGreatWork,
  editGreatWork,
  deleteGreatWork,
};
