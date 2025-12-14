import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import ContactRoutes from '../routes/contact.routes.js'
import educationRoutes from '../routes/education.routes.js'
import projectRoutes from '../routes/projects.routes.js'
import userRoutes from '../routes/user.routes.js'
import authRoutes from '../routes/auth.routes.js'
import config from "../../config/config.js";
import mongoose from "mongoose";
import path from "path";
const CURRENT_WORKING_DIR = process.cwd();




const app = express();
const port = config.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',ContactRoutes)
app.use('/',educationRoutes)
app.use('/',projectRoutes)
app.use('/',userRoutes)
app.use('/',authRoutes)
app.use(express.static(path.join(CURRENT_WORKING_DIR, "dist/app")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.get(/.*/, (req, res) => { 
  res.sendFile(path.join(CURRENT_WORKING_DIR, "dist/app", "index.html"));  
});

// app.get('/', async(req, res) => {
//  try {
//     const users = await User.find({});
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// })



async function connect() {
  console.log('Starting DB connection...');
  try
  { await mongoose.connect(config.mongoUri);
  console.log("data base successfully connected");
  app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`)
});

  }
  catch(error){
    console.error("Error is ", error);

  }

  

}
connect();
