const { tutorials } = require("../models");
const { body } = require('express-validator');

const checkDuplicateTitles = async (title) => {
    const existingTutorial = await tutorials.findOne({
        title: { $regex: new RegExp(title), $options: "i" }
    });
    if (existingTutorial) {
        throw new Error('Title already exists.');
    }
    return true;
};

exports.tutorialValidator = [
    body('title').trim().notEmpty().withMessage("Title is empty").bail().custom(checkDuplicateTitles),
    body('description').trim().notEmpty().withMessage("Decription is empty"),
    body('published').trim().notEmpty().withMessage("Published is empty")
]