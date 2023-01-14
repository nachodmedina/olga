import * as React from "react";
import Box from "@mui/material/Box";
import PersistentDrawerLeft from "./Appbar";

function Header({pageName}) {
  return (
    <Box>
      <PersistentDrawerLeft pageName={pageName}/>
    </Box>
  );
}

export default Header
