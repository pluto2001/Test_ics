import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#134B8A" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <IconButton
          size="large"
          aria-label="show 4 new notifications"
          color="inherit"
        >
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton edge="end" color="inherit">
          <Avatar alt="User Name" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
