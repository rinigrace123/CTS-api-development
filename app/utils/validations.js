const db = require("../models");
const Tutorial = db.tutorials;

exports.checkDuplicateTitle = (title) =>{
    Tutorial.find({'title':title})
}