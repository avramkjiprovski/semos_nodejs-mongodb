const router = require("express").Router();
/* eslint-disable */
const { addNewBook, getAllBooks } = require("./handlers");

router.route("/").get(getAllBooks).post(addNewBook);

router.use("*", (req, res) => {
  return res.status(200).json("Books Microservice hit!");
});

module.exports = router;
