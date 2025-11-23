import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
 firstname: String,
 lastname: String,
 email:String,
 contactNumber: String,
 message: String,

  created: {
    type: Date,
    default: Date.now,
  },
})

const Contacts = mongoose.model('Contacts', contactSchema);
export default Contacts; 