import Contact from "../models/model.contact.js";
// import extend from "lodash/extend.js";
import errorHandler from "./error.handler.js";

const create = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    
    await contact.save();
    return res.status(200).json({
      message: "Successfully added contact!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const list = async (req, res) => {
  try {
    let contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const contactByID = async (req, res, next, id) => {
  try {
    let contact = await Contact.findById(id);
    if (!contact)
      return res.status(400).json({
        error: "User not found",
      });
    req.profile = contact;
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
    let contact = req.body;
    let id = req.params.contactId;
    contact = await Contact.findByIdAndUpdate(id,contact);
    
    res.json(contact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
const remove = async (req, res) => {
  try {
    let id = req.params.contactId;
    let deletedContact = await Contact.findByIdAndDelete(id);

    res.json(deletedContact);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
export default { create, contactByID, read, list, remove, update };