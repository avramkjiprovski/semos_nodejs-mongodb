const mongoose = require("mongoose");

//se povrzuva so nekoja kolekcija i ni dava dostapni funkcii vo odnos na taa kolekcija
const GreatWork = mongoose.model("greatWorks", {
  title: String,
  createdBy: String,
  description: String,
  yearOfCreation: Date,
  isMissing: Boolean,
});
// prashanje do mentorot: Sto ako sakame da cuvame slika/video?

module.exports = GreatWork;
