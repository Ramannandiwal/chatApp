// Model.js
const mongoose = require("mongoose");
const schema = mongoose.Schema({
    query: String
});
const model = mongoose.model("model", schema);
module.exports = { model };
