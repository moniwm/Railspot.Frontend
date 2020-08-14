import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [firstName, setFirstName] = useState([""]);
  const [lastName, setLastName] = useState([""]);
  const [id, setId] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);

  const updateFN = e => {
    setFirstName(e.target.value);
  }

  const updateLN = e => {
    setLastName(e.target.value);
  }

  const updateId = e => {
    setId(e.target.value);
  }

  const updateEmail = e => {
    setEmail(e.target.value);
  }

  const updatePassword = e => {
    setPassword(e.target.value);
  }

  function SignUpUser() {
    if (!(firstName == "" || lastName == "" || id == "" || email == "" || password == "")) {
      //Aqui va la peticion del ususario
      return "/BuyTickets";
    }
    return "/";
  }

  return (
    <Grid container component='main'>
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img src={require('./images/railspot.png')} alt='' width='45%'/>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="id"
                        label="ID"
                        name="id"
                        autoComplete="id"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    </Grid>
                </Grid>
                
                <Link to="/BuyTickets">
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                  >
                    Sign Up
                  </Button>
                </Link>
                
                </form>
            </div>
    </Container>

    </Grid>
  );
}