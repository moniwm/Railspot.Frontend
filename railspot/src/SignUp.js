import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import User from './User';


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
  const [hasAccess, setHasAccess] = useState(false);
/////
  const [myData, setMyData] = useState();
/////
  const updateFN = e => {
    e.preventDefault();
    setFirstName(e.target.value);
  }

  const updateLN = e => {
    e.preventDefault();
    setLastName(e.target.value);
  }

  const updateId = e => {
    e.preventDefault();
    setId(e.target.value);
  }

  const updateEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const updatePassword = e => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function ChangeAccess() {
    setHasAccess(true);
  }
  function SignUpUser() {
    if (hasAccess) {
      if (!(firstName == "" || lastName == "" || id == "" || email == "" || password == "")) {
        //setHasAccess(false);

        const fullName = firstName + lastName;

        fetch(`http://localhost:8080/RailSpot.BackEnd/api/sign-up?id=${id}&name=${firstName}&email=${email}&password=${password}&admin=true`, {  
          method: 'POST', mode: 'no-cors'
        })
        .then(function(response){
            console.log(response.statusText);
        })
        .then(function(json){
          console.log('Request succeded with Json: ');
        })
        .catch(function(error){
          console.log('Request failed');
        });

        const loggedUser = new User(id, password, firstName, email);

        return "/EditRoute";
      }
      else {
        //setHasAccess(false);
        return "/SignUp";
      }
    }
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
                        value={firstName}
                        onChange={updateFN}
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
                        value={lastName}
                        onChange={updateLN}
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
                        value={id}
                        onChange={updateId}
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
                        value={email}
                        onChange={updateEmail}
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
                        value={password}
                        onChange={updatePassword}
                    />
                    </Grid>
                </Grid>
                
                <Link to={SignUpUser} preventDefault>
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={ChangeAccess}
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