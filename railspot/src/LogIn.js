import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './LogIn.css';
import {Link} from 'react-router-dom';
import User from './User' ;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'white',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();

  const [id, setId] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [hasAccess, setHasAccess] = useState(false);

  const updateId = e => {
    setId(e.target.value);
  }

  const updatePassword = e => {
    setPassword(e.target.value);
  }

  function ChangeAccess() {
    setHasAccess(true);
  }

  function LogInUser() {
    if (hasAccess) {
      if (!(id == "" || password == "")) {
        //setHasAccess(false);
        fetch(`http://localhost:8080/RailSpot.BackEnd/api/users/${id}`, {
          method: 'GET', mode: 'no-cors'
        })
        .then(function (data) {
          console.log('Request success: ', data);
          console.log('NOO HUBO UN ERROR')
        })
        .catch(function (error) {
          console.log('Request failure: ', error);
          console.log('HUBO UN ERROR')
        });

        const loggedUser = new User(id, password);

        return "/EditRoute";
      }
      else {
        //setHasAccess(false);
        return "/";
      }   
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className='image-column' />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <img src={require('./images/RailspotLogo.png')} alt='' width='45%'/>
        
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="id"
              label="ID"
              name="id"
              autoComplete="id"
              autoFocus
              value={id}
              onChange={updateId}
            />
            <TextField
              variant="outlined"
              margin="normal"
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
            
            <Link to={LogInUser}>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={ChangeAccess}
                  >
                  Sign In
                </Button>
            </Link>    
            <Grid container>
              <Grid item>
                <Link to="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}