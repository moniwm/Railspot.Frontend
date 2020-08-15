import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./LogIn.css";
import Nav from "./Nav";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
//import DateFnsUtils from '@date-io/date-fns';


import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


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
    backgroundColor: "#DFE5EA",
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

  const [stations, setStation] = useState([]);

  const [startLocation, setStartLocation] = useState("");
  const [destiny, setDestiny] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [time, setTime] = useState("");
  const [discount, setDiscount] = useState("");
  const [price, setPrice] = useState("");
  const [selectedStation, setSelectedStation] = useState([""]);

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

  const handleStartLocation = (event) => {
    setStartLocation(event.target.value);
  };

  const handleDestiny = (event) => {
    setDestiny(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTime = (event) => {
    setTime(event.target.value);
  }

  function notRepeat() {
    if (startLocation === destiny) {
      return false;
    } else {
      return true;
    }
  }

  const postTicket = e =>{
    e.preventDefault();
    if (!(startLocation == "" || destiny == "" || quantity == "" || time == "" || selectedDate == "" )) {
      fetch(`http://localhost:8080/RailSpot.BackEnd/api/tickets/buy-ticket?user=1&origin=${startLocation}&destiny=${destiny}&date=${selectedDate}&hour=${time}&amount=${quantity}&From=1&Authorization=password`, {method: 'POST', mode:'no-cors'})
      .then(function(response){
          console.log(response);
      });
    }
  }


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Nav />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.routes}>
        <div className={classes.paper}>
        <Typography component="h1" variant="h5">
              Available stations
            </Typography>

            <Grid container spacing={2} className={classes.options}>

            {stations.map((item) => (
                      <Grid item xs={12} sm={6}>

                        <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.formControl}>
        {item.name}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
                        </Grid>
                        
                    ))}
             
              
            </Grid>
            
        </div>
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
                    value={startLocation}
                    onChange={handleStartLocation}
                  >
      
                    {stations.map((item) => (
                      <MenuItem value={item.name}>{item.name}</MenuItem>
                    ))}
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
                    value={destiny}
                    onChange={handleDestiny}
                  >
        
                    {stations.map((item) => (
                      <MenuItem value={item.name}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date you want to travel"
                format="MM-dd-yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
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
                    value = {time}
                    onChange={handleTime}
                  >
                    <MenuItem value={'7:00'}>7:00</MenuItem>
                    <MenuItem value={'8:00'}>8:00</MenuItem>
                    <MenuItem value={'9:00'}>9:00</MenuItem>
                    <MenuItem value={'10:00'}>10:00</MenuItem>
                    <MenuItem value={'12:00'}>12:00</MenuItem>
                    <MenuItem value={'14:00'}>14:00</MenuItem>
                    <MenuItem value={'16:00'}>16:00</MenuItem>
                    <MenuItem value={'17:00'}>17:00</MenuItem>
                    <MenuItem value={'18:00'}>18:00</MenuItem>
                    <MenuItem value={'19:00'}>19:00</MenuItem>

                    
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Quantity
                  </InputLabel>
                  <Input
            className={classes.input}
            value={quantity}
            margin="dense"
            onChange={handleQuantity}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
                </FormControl>

              
              </Grid>

            </Grid>

            
          </div>

          <Grid className={classes.paper}>
            <Button variant="outlined" color="primary" onClick={postTicket}>
              Buy tickets
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
