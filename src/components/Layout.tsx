import React, { FC, PropsWithChildren } from "react";
import { StrictMode } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import { themes } from "@mott-macdonald/smi-react-ui-kit";

import Header from "./Header";

import { groupBy } from "lodash";
import { Link } from "gatsby";

const drawerWidth = 310;

interface LayoutProps extends PropsWithChildren {
  pages?: ({
    readonly category: string | null;
    readonly slug: string | null;
    readonly title: string | null;
  } | null)[];
}

const Layout: FC<LayoutProps> = ({ pages, children }) => {
  const groups = pages && groupBy(pages, (page) => page!.category!);

  return (
    <StrictMode>
      <ThemeProvider theme={themes.light}>
        <CssBaseline />
        <Header />
        <Container maxWidth="xl" sx={{ display: "flex" }}>
          {groups && (
            <Box
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
            >
              <List>
                {Object.entries(groups).flatMap(([category, pages]) => (
                  <>
                    <ListItem disableGutters key={category}>
                      <ListItemText primary={category.toUpperCase()} />
                    </ListItem>
                    {pages.map((page) => (
                      <ListItem
                        disableGutters
                        key={`/${page!.category!}/${page!.slug!}`}
                      >
                        <Link to={`/${page!.category!}/${page!.slug!}`}>
                          <ListItemButton>
                            <ListItemText primary={page!.title!} />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    ))}
                  </>
                ))}
              </List>
            </Box>
          )}
          <Box sx={{ flex: 1, p: 2 }}>{children}</Box>
        </Container>
      </ThemeProvider>
    </StrictMode>
  );
};

export default Layout;
