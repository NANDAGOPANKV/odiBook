import React, { useState } from "react";
// metirial ui use
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
// icons
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// react-router-dom
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  // navigate
  const NavigateTo = useNavigate();
  // uderlline
  const [underLine, setUnderLine] = useState(1);
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232f3d" }} position="sticky">
        <Toolbar>
          <Typography
            onClick={() => {
              NavigateTo("/");
            }}
          >
            {/* Logo here */}
            <LibraryBooksIcon />
            {/* Logo here */}
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            value={underLine}
            indicatorColor="secondary"
            textColor="inherit"
            onChange={(e, val) => setUnderLine(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Books" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}
