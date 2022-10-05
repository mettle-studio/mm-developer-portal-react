import React, { FC } from "react";
import { Box, AppBar, Toolbar, ThemeProvider, Stack } from "@mui/material";
import { themes } from "@mott-macdonald/smi-react-ui-kit";

import Moata from "../../images/moata.svg";

import { Link } from "gatsby";

// exported so it can be tested separately
export const getBgColor = (isMd: boolean) => (isMd ? "primary.main" : "unset");

export const HEADER_HEIGHT = 50;

const Header: FC = () => {
  return (
    <ThemeProvider theme={themes.dark}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "background.default",
        }}
      >
        <Toolbar>
          <Link to="/">
            <Box
              sx={{
                height: HEADER_HEIGHT,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Moata
                height={17}
                width={(15 / 72) * 350}
                style={{ filter: "invert(100%)" }}
                alt="moata"
              />
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;