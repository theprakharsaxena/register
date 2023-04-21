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
import AddStaffForm from "../forms/AddStaffForm";
import Stores from "../stores/Stores";

const drawerWidth = 150;

const stores = [
  { id: 1, name: "Store A" },
  { id: 2, name: "Store B" },
  { id: 3, name: "Store C" },
  { id: 4, name: "Store D" },
];

const ColorButton = ({ label, isActive, onClick }) => {
  const buttonStyle = {
    backgroundColor: isActive ? '#1602FF' : '#FFFFFF',
    color: isActive ? '#FFFFFF' : '#AB8484',
    borderColor: isActive ? '#1602FF' : '#AB8484',
    borderRadius: '50px',
  };

  return (
    <Button style={buttonStyle} onClick={onClick} variant="outlined">
      {isActive ? label : label}
    </Button>
  );
};

export default function FrontPage() {
  const [selectedStore, setSelectedStore] = React.useState("Store A");
  // const [activebtn, setActiveBtn] = React.useState("#1602FF");
  const [activeButton, setActiveButton] = React.useState("Store A");

  const handleClick = (label) => {
    setActiveButton(label);
  };

  const handleSelectStore = (store) => {
    setSelectedStore(store);
  };

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
            <AddStaffForm />
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
          {/* <StoreSelector stores={stores} onSelectStore={handleSelectStore} /> */}
          {stores.map((store, id) => (
            <ColorButton
              key={id}
              isActive={store.name === activeButton}
              label={store.name}
              onClick={() => {
                handleSelectStore(store);
                handleClick(store.name);
              }}
            />
          ))}
        </Stack>
        <Box sx={{ flexGrow: 1, bgcolor: "background.default", py: 3 }}>
          <Stores store={selectedStore} />
        </Box>
      </Box>
    </Box>
  );
}
