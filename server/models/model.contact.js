import mongoose from "mongoose";

const contactsSchema = new mongoose.Schema({
 firstname: String,
 lastname: String,
 email:String,
 owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

const Contacts = mongoose.model('Contacts', contactsSchema);
export default Contacts; 