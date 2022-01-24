import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

const theme = createTheme();

export default function SignInSide() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    //if curent user is not  available show login page
    // check current user role
    if (currentUser) {
      if (currentUser.role === "Admin") {
        history.push("/adminDashboard");
      } else {
        history.push("/userDashboard");
      }
    }
  }, [history]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // add validations
    if (loginData.email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your email",
      });
    } else if (loginData.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your password",
      });
    } else {
      // compare data with local storage and redirect to dashboard
      let userData = JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        // check if email and password matches
        if (
          userData.find(
            (user) =>
              user.email === loginData.email &&
              user.password === loginData.password
          )
        ) {
          // save current user in local storage
          localStorage.setItem(
            "currentUser",
            JSON.stringify(
              userData.find(
                (user) =>
                  user.email === loginData.email &&
                  user.password === loginData.password
              )
            )
          );
          //check user role and redirect to dashboard
          if (
            userData.find((user) => user.email === loginData.email).role ===
            "Admin"
          ) {
            Swal.fire({
              icon: "success",
              title: "Welcome",
              text: "You are logged in as Admin",
            });

            history.push("/adminDashboard");
          } else {
            Swal.fire({
              icon: "success",
              title: "Welcome",
              text: "You are logged in as User",
            });
            history.push("/UserDashboard");
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email or Password does not match",
          });
        }
      } else {
        Swal.fire({
          icon: "info",
          title: "Hey Listen...",
          text: "You are not registered yet",
        });
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={loginData.email}
                onChange={onChange}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={loginData.password}
                onChange={onChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
