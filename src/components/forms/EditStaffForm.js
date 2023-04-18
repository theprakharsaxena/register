import * as React from "react";
import {
  Grid,
  Button,
  Box,
  TextField,
  Typography,
  MenuItem,
  Paper,
  Dialog,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Axios from "axios";

const selectStoreDropdown = [
  {
    value: "Store A",
    label: "Store A",
  },
  {
    value: "Store B",
    label: "Store B",
  },
  {
    value: "Store C",
    label: "Store C",
  },
  {
    value: "Store D",
    label: "Store D",
  },
];

const selectRoleDropdown = [
  {
    value: "Store Admin",
    label: "Store Admin",
  },
  {
    value: "Sales Operator",
    label: "Sales Operator",
  },
  {
    value: "Sales Purchase Operator",
    label: "Sales Purchase Operator",
  },
];

export default function EditStaffForm({
  currentRole,
  currentStaffId,
  currentName,
  currentCode,
  currentMobile,
}) {
  const [open, setOpen] = React.useState(false);
  // const [staff, setStaff] = React.useState([]);
  const [staffName, setStaffName] = React.useState(currentName);
  const [countryCode, setCountryCode] = React.useState(currentCode);
  const [mobileNumber, setMobileNumber] = React.useState(currentMobile);
  const [staffId, setStaffId] = React.useState(currentStaffId);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateandClose = () => {
    updateStaff();
    handleClose();
  };

  const updateStaff = () => {
    Axios.post(
      "http://stock.staging.digitalregister.in:8080/api/v1/staff/update",
      {
        businessId: "kbktbFmdvENXoEriN0UD7VboJET2",
        name: staffName,
        phone: `${countryCode}${mobileNumber}`,
        staffId: staffId,
      }
    )
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          textTransform: "none",
          borderRadius: " 4px",
          color: "#000000",
          borderColor: "#000000",
          mx: 0.5,
        }}
        size="small"
      >
        {currentRole}
      </Button>
      <Dialog onClose={handleClose} open={open} maxWidth="sm">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ pl: 3, pt: 1, pr: 1 }}
        >
          <Typography>Edit Staff</Typography>
          <Button variant="text" onClick={handleClose} sx={{ color: "black" }}>
            <CloseIcon />
          </Button>
        </Grid>
        <Box sx={{ bgcolor: "#F5F5F5", p: 2.5 }}>
          <form method="put"></form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography sx={{ color: "black" }}>Staff Name*</Typography>
              <TextField
                required
                fullWidth
                placeholder="Enter here"
                name="staffName"
                variant="outlined"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} container spacing={1}>
              <Grid item xs={3}>
                <Typography sx={{ color: "black", maxWidth: 10 }}>
                  Code
                </Typography>
                <TextField
                  required
                  placeholder="Select"
                  name="countryCode"
                  variant="outlined"
                  defaultValue="+91"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                />
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ color: "black" }}>Mobile Number*</Typography>
                <TextField
                  required
                  fullWidth
                  placeholder="Enter here"
                  name="mobileNumber"
                  variant="outlined"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ color: "black" }}>Select Store*</Typography>
              <TextField
                select
                required
                fullWidth
                placeholder="Select"
                name="selectStore"
                variant="outlined"
                // value={selectStore}
                // onChange={(e) => setSelectStore(e.target.value)}
              >
                {selectStoreDropdown.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ color: "black" }}>Select Role*</Typography>
              <TextField
                select
                required
                fullWidth
                placeholder="Select"
                name="selectRole"
                variant="outlined"
                // value={selectRole}
                // onChange={(e) => setSelectRole(e.target.value)}
              >
                {selectRoleDropdown.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Paper sx={{ minHeight: 205, my: 3, p: 1.5 }}>
            <Typography>
              <Typography sx={{ fontWeight: "bold" }}>
                Store Admin Permissions -
              </Typography>
              <Box
                sx={{ m: -2, p: -2, fontWeight: "lighter", fontSize: "15px" }}
              >
                <ul>
                  <li>View all entries & download reports</li>
                  <li>Add, edit, delete any type of entry</li>
                  <li>View total sale, purchase</li>
                  <li>
                    View all added items, add new item, edit item, delete item
                  </li>
                  <li>
                    Add new party, view all added parties and their entries
                  </li>
                  <li>Download & share all reports, bills</li>
                </ul>
              </Box>
            </Typography>
          </Paper>
          <Grid container spacing={2}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6} container spacing={2}>
              <Grid item xs={6}>
                <Button
                  type="button"
                  fullWidth
                  variant="outlined"
                  size="large"
                  sx={{ color: "#1602FF", borderColor: "#1602FF" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  text="Submit"
                  variant="contained"
                  size="large"
                  sx={{ color: "#FFFFFF", bgcolor: "#1602FF" }}
                  onClick={handleUpdateandClose}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </div>
  );
}
