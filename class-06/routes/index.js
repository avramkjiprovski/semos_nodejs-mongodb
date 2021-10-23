const router = require("express").Router();
const {deleteGreatWork, getAllGreatWorks, addNewGreatWork, editGreatWork} = require("../handlers/greatWorks")

const PREFIX = process.env.PREFIX

router
    .route(`${PREFIX}/greatWorks`)
    .get(getAllGreatWorks)
    .post(addNewGreatWork)

router
    .route(`${PREFIX}/greatworks/:id`)
    .put(editGreatWork)
    .delete(deleteGreatWork)

router.use("*", (req, res) => {
  return res.status(404).json("Not found!");
});

module.exports = router;
