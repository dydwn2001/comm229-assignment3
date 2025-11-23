import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import auth from "../lib/auth-helper";
import { Link, useNavigate, useLocation } from "react-router-dom";


const isActive = (location, path) =>
  location.pathname === path ? "#ff4081" : "#ffffff";

const isPartActive = (location, path) => {
  if (location.pathname.includes(path)) return { color: "#bef67a" };
  else return { color: "#ffffff" };
};

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>

        <Link to="/">
          <IconButton aria-label="Home" sx={{ color: isActive(location, "/") }}>
            <HomeIcon />
          </IconButton>
        </Link>

        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button sx={{ color: isActive(location, "/about/") }}>
            About
          </Button>
        </Link>

        <Link to="/service">
          <Button sx={{ color: isActive(location, "/service") }}>Service</Button>
        </Link>

        <Link to="/education">
          <Button sx={{ color: isActive(location, "/education") }}>Education</Button>
        </Link>
        <Link to="/project">
          <Button sx={{ color: isActive(location, "/project") }}>Project</Button>
        </Link>
        <Link to="/contact">
          <Button sx={{ color: isActive(location, "/contact") }}>Contact</Button>
        </Link>
        

        {!auth.isAuthenticated() && (
          <>
            <Link to="/signup">
              <Button sx={{ color: isActive(location, "/signup") }}>
                Sign up
              </Button>
            </Link>
            <Link to="/signin">
              <Button sx={{ color: isActive(location, "/signin") }}>
                Sign In
              </Button>
            </Link>
          </>
        )}
        {auth.isAuthenticated() && (
          <>
            
            <Button
              sx={{ color: "#ffffff" }}
              onClick={() => {
                auth.clearJWT(() => navigate("/"));
              }}
            >
              Sign out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
