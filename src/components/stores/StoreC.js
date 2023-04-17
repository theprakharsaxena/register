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

export default function StoreC() {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/api/v1/staff");
    setData(response.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

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
            {data.filter((data) => data.selectStore === "Store C").map(
              ({ _id, staffName, mobileNumber, selectStore, selectRole }) => (
                <TableRow
                  key={_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {staffName}
                  </TableCell>
                  <TableCell align="right">{mobileNumber}</TableCell>
                  <TableCell align="left">{selectRole}</TableCell>
                  <TableCell align="right">
                    <Typography>
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
                        Change Role
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
                        Rename Staff
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
                      >
                        Delete Staff
                      </Button>
                    </Typography>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
