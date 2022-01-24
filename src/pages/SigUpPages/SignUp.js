import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
const theme = createTheme();

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const history = useHistory();
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add validations if there is no value
    if (formData.firstName === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your first name",
      });
    } else if (formData.lastName === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your last name",
      });
    } else if (formData.email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your email",
      });
    } else if (formData.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your password",
      });
    } else if (formData.confirmPassword === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your confirm password",
      });
    } else if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password does not match",
      });
    }
    // show message pasword  and confirm password match match
    // else if (formData.password === formData.confirmPassword) {
    //   Swal.fire({
    //     icon: "success",
    //     title: "Great",
    //     text: "Password and Confirm Password match",
    //   });
    // }
    else {
      // alert(JSON.stringify(formData));
      // store data in local storage in array formData
      let userData = [];
      if (localStorage.getItem("userData")) {
        userData = JSON.parse(localStorage.getItem("userData"));
      }

      // check if email already exists
      let emailExists = false;
      // eslint-disable-next-line array-callback-return
      userData.map((user) => {
        if (user.email === formData.email) {
          emailExists = true;
        }
      });
      if (emailExists) {
        Swal.fire({
          title: "Email already exists",
          text: "Please enter a different email",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        userData.push({
          id: Math.floor(Math.random() * 100),
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          //add role
          // role: "User",
          role: "Admin",
          // randon token 10 digit
          token: Math.floor(Math.random() * 10000000000),
        });

        localStorage.setItem("userData", JSON.stringify(userData));
        // alert('User created successfully');
        Swal.fire({
          icon: "success",
          title: "Thank you",
          text: "User created successfully",
        });
        history.push("/login");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={formData.firstName}
                  onChange={handleChange}
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={formData.password}
                  onChange={handleChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid> */}
            </Grid>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
              <br />
              <br />
              <br />
              <br />
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
