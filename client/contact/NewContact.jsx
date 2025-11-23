import auth from "../lib/auth-helper";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { create } from "./api-contact";

export default function NewContact() {
  const jwt = auth.isAuthenticated();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactNumber: "",
    message: "",
    error: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickSubmit = () => {
    const contact = {
      firstname: values.firstname || undefined,
      lastname: values.lastname || undefined,
      email: values.email || undefined,
      contactNumber: values.contactNumber || undefined,
      message: values.message || undefined,
      
    };

    create({ t: jwt.token }, contact).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setOpen(true);
      }
    });
  };
  return (
    <div>
      <Card
        sx={{
          maxWidth: 400,
          margin: "0 auto",
          mt: 3,
          p: 2,
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontSize: 18 }}>
            Plesae Leave your contact
          </Typography>

          <TextField
            id="firstname"
            label="Firstname"
            sx={{ width: "100%", mb: 2 }}
            value={values.firstname}
            onChange={handleChange("firstname")}
            margin="normal"
          />
          <TextField
            id="lastname"
            label="Lastname"
            sx={{ width: "100%", mb: 2 }}
            value={values.lastname}
            onChange={handleChange("lastname")}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            sx={{ width: "100%", mb: 2 }}
            value={values.email}
            onChange={handleChange("email")}
            type="email"
            margin="normal"
          />
      
          <TextField
            id="contactNumber"
            label="Contact number"
            sx={{ width: "100%", mb: 2 }}
            value={values.contactNumber}
            onChange={handleChange("contactNumber")}
            type="contact"
            margin="normal"
          />
          <TextField
            id="message"
            label="Message"
            sx={{ width: "100%", mb: 2 }}
            value={values.message}
            onChange={handleChange("message")}
            margin="normal"
            multiline  
            rows={4}        
          />

          {values.error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {values.error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={clickSubmit}
            sx={{ margin: "0 auto", mb: 2 }}
          >
            Submit
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you. Contect successfully went throgh.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button
              color="primary"
              autoFocus
              variant="contained"
              onClick={handleClose}
            >
              going back.
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
