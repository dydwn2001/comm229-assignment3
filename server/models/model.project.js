import mongoose from "mongoose";
const projectsSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  lastname: String,
  email: String,
  completion: Date,
  description:String,
   owner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    created: {
      type: Date,
      default: Date.now,
    },
})
const Projects = mongoose.model('Projects', projectsSchema);
export default Projects;