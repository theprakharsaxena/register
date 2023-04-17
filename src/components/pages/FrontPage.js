import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Button, Grid, Stack } from "@mui/material";
import StoreA from "../stores/StoreA";
import StoreB from "../stores/StoreB";
import StoreC from "../stores/StoreC";
import AddStaffForm from "../forms/AddStaffForm";
import StoreD from "../stores/StoreD";

const drawerWidth = 150;

export default function FrontPage() {
  const [active, setActive] = React.useState("store-a");
  // const [activebtn, setActiveBtn] = React.useState("#1602FF");
  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          color: "black",
          bgcolor: "white",
        }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ fontSize: "12px" }}
          >
            <Typography variant="h6" noWrap component="div">
              Manage Staff
            </Typography>
            <AddStaffForm/>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#0F0E20",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{ color: "#AB8484" }}>
          {[
            "Party",
            "All Entries & Bill",
            "Stock",
            "Item",
            "Reports",
            "Manage Staff",
            "Setting",
            "Paid Plan",
            "Help & Support",
          ].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Stack spacing={2} direction="row">
          <Button
            onClick={() => setActive("store-a")}
            variant="contained"
            sx={{ borderRadius: " 50px", color: "#FFFFFF", bgcolor: "#1602FF" }}
          >
            Store A
          </Button>
          <Button
            onClick={() => setActive("store-b")}
            variant="outlined"
            sx={{
              borderRadius: " 50px",
              color: "#AB8484",
              borderColor: "#AB8484",
            }}
          >
            STORE B
          </Button>
          <Button
            onClick={() => setActive("store-c")}
            variant="outlined"
            sx={{
              borderRadius: " 50px",
              color: "#AB8484",
              borderColor: "#AB8484",
            }}
          >
            STORE C
          </Button>
          <Button
            onClick={() => setActive("store-d")}
            variant="outlined"
            sx={{
              borderRadius: " 50px",
              color: "#AB8484",
              borderColor: "#AB8484",
            }}
          >
            STORE D
          </Button>
        </Stack>
        <Box sx={{ flexGrow: 1, bgcolor: "background.default", py: 3 }}>
          {active === "store-a" && <StoreA />}
          {active === "store-b" && <StoreB />}
          {active === "store-c" && <StoreC />}
          {active === "store-d" && <StoreD />}
        </Box>
      </Box>
    </Box>
  );
}
