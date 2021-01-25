import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

function Nav() {
  return (
    <AppBar style={{ alignItems: "center" }}>
      <Toolbar>
        <Typography variant="h5">Age Finder</Typography>
        <SearchIcon style={{ fontSize: "2rem" }} />
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
