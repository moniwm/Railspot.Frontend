import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./LogIn.css";
import Nav from "./Nav";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  routes: {
    backgroundColor: "#D8E0EE",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  options: {
    margin: theme.spacing(1, 0, 2),
  },

  price: {
    backgroundColor: "#CEEBE6",
    margin: theme.spacing(3, 6, 2, 6),
    height: "5%",
    alignItems: "center",
  },
}));

export default function BuyTickets() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-08-15T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const[stations, setStation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const httpResult = await axios({
        method: "GET",
        url:
          "http://localhost:8080/RailSpot.BackEnd/api/tickets/get-stations?From=1&Authorization=password",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setStation(httpResult.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.routes}>
        <ul>
      {stations.map(item => (
        <li>
          {item.name}
        </li>
      ))}
    </ul>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Buy Tickets
            </Typography>

            <Grid container spacing={2} className={classes.options}>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    From
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    To
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Time
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date you want to travel"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>

          <Grid className={classes.paper}>
            <Button variant="outlined" color="primary">
              Buy tickets
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
