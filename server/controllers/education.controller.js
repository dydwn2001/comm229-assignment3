import Education from "../models/model.education.js";
// import extend from "lodash/extend.js";
import errorHandler from "./error.handler.js";

const create = async (req, res) => {
  const education = new Education(req.body);
  try {
    education.owner = req.profile;
    await education.save();
    return res.status(200).json({
      message: "Successfully added education!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const list = async (req, res) => {
  try {
    let educations = await Education.find();
    res.json(educations);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const educationByID = async (req, res, next, id) => {
  try {
    let education = await Education.findById(id);
    if (!education)
      return res.status(400).json({
        error: "User not found",
      });
    req.profile = education;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve user",
    });
  }
};
const read = (req, res) => {
  
  return res.json(req.profile);
};
const update = async (req, res) => {
  try {
    let education = req.body;
    let id = req.params.educationId;
    education = await Education.findByIdAndUpdate(id,education);
    
    res.json(education);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const remove = async (req, res) => {
  try {
    let id = req.params.educationId;
    let deletedEducation = await Education.findByIdAndDelete(id);

    res.json(deletedEducation);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
export default { create, educationByID, read, list, remove, update };