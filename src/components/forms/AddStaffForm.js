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

const selectStore = [
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

const selectRole = [
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

export default function AddStaffForm() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({
    staffName: "",
    countryCode: "+91",
    mobileNumber: "",
    selectStore: "",
    selectRole: "",
  });
  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post("http://localhost:5000/api/v1/staff/add", {
      staffName: data.staffName,
      countryCode: data.countryCode,
      mobileNumber: data.mobileNumber,
      selectStore: data.selectStore,
      selectRole: data.selectRole,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Some Error Occured!"));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{ borderRadius: " 5px", bgcolor: "#1602FF" }}
        onClick={handleClickOpen}
      >
        Add Staff
      </Button>
      <Dialog onClose={handleClose} open={open} maxWidth="sm">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ pl: 3, pt: 1, pr: 1 }}
        >
          <Typography>Add Staff</Typography>
          <Button variant="text" onClick={handleClose} sx={{ color: "black" }}>
            <CloseIcon />
          </Button>
        </Grid>
        <Box sx={{ bgcolor: "#F5F5F5", p: 2.5 }}>
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography sx={{ color: "black" }}>Staff Name*</Typography>
                <TextField
                  required
                  fullWidth
                  placeholder="Enter here"
                  name="staffName"
                  variant="outlined"
                  onChange={(e) => handleChange(e)}
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
                    value={data.countryCode}
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography sx={{ color: "black" }}>
                    Mobile Number*
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    placeholder="Enter here"
                    name="mobileNumber"
                    variant="outlined"
                    onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                >
                  {selectStore.map((option) => (
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
                  onChange={(e) => handleChange(e)}
                >
                  {selectRole.map((option) => (
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
                    type="reset"
                    fullWidth
                    variant="outlined"
                    size="large"
                    sx={{ color: "#1602FF" }}
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
                    sx={{ bgcolor: "#1602FF" }}
                    onClick={handleClose}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Dialog>
    </div>
  );
}
