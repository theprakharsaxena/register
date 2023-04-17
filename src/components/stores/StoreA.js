import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme, styled } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Axios from "axios";
import EditStaffForm from "../forms/EditStaffForm";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F0F0F0",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function StoreA() {
  const [data, setData] = React.useState([]);
  const [role, setRole] = React.useState("No Role")
  const businessIds = "kbktbFmdvENXoEriN0UD7VboJET2";

  React.useEffect(() => {
    getData();
  }, []);

  function getData() {
    Axios.post(
      "http://stock.staging.digitalregister.in:8080/api/v1/staff/get",
      {
        businessIds: [businessIds],
      }
    ).then((res) => setData(res.data.response));
  }

  function deleteStaff(staffId) {
    console.log(staffId);
    fetch(
      `http://stock.staging.digitalregister.in:8080/api/v1/staff/delete/${staffId}`,
      {
        method: "DELETE",
      }
    ).then((result) => {
      result.json().then((res) => {
        console.warn(res);
        getData();
      });
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="scustomized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Staff</StyledTableCell>
              <StyledTableCell align="right">Mobile Numer</StyledTableCell>
              <StyledTableCell align="left">Role</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ staffId, name, mobile }) => (
              <TableRow
                key={staffId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">{mobile}</TableCell>
                <TableCell align="left">{role}</TableCell>
                <TableCell align="right">
                  <Typography>
                    <Button>
                      <EditStaffForm role="Change Role" />
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        borderRadius: " 4px",
                        color: "#000000",
                        borderColor: "#000000",
                        mx: 0.5,
                      }}
                      size="small"
                    >
                      Remove Role
                    </Button>
                    <Button>
                      <EditStaffForm role="Rename Role" />
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        borderRadius: " 4px",
                        color: "#FF0202",
                        borderColor: "#FF0202",
                        mx: 0.5,
                      }}
                      size="small"
                      onClick={() => deleteStaff(staffId)}
                    >
                      Delete Staff
                    </Button>
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
