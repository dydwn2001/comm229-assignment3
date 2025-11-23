import Project from "../models/model.project.js";
// import extend from "lodash/extend.js";
import errorHandler from "./error.handler.js";

const create = async (req, res) => {
  const project = new Project(req.body);
  try {
    project.owner = req.profile;
    await project.save();
    return res.status(200).json({
      message: "Successfully added project!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const list = async (req, res) => {
  try {
    let project = await Project.find();
    res.json(project);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const projectByID = async (req, res, next, id) => {
  try {
    let project = await Project.findById(id);
    if (!project)
      return res.status(400).json({
        error: "User not found",
      });
    req.profile = project;
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
    let project = req.body;
    let id = req.params.projectId;
    project = await Project.findByIdAndUpdate(id,project);
    
    res.json(project);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const remove = async (req, res) => {
  try {
    let id = req.params.projectId;
    let deletedProject = await Project.findByIdAndDelete(id);

    res.json(deletedProject);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
export default { create, projectByID, read, list, remove, update };