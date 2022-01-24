import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";
const theme = createTheme();

export default function UpdateUsers({ location }) {
  // console.log(location.state);
  const [formData, setFormData] = React.useState({
    firstName: location.state.firstName,
    lastName: location.state.lastName,
    email: location.state.email,
    password: location.state.password,
    confirmPassword: location.state.confirmPassword,
    role: location.state.role,
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
    } else if (formData.role === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Select your role",
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
    } else {
      // alert(JSON.stringify(formData));
      // store data in local storage in array formData
      let userData = [];
      if (localStorage.getItem("userData")) {
        userData = JSON.parse(localStorage.getItem("userData"));
      }
      // update user data

      // while updating user need to ask for confirmation
      Swal.fire({
        title: "Are you sure?",
        text: "You want to update this user",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then((result) => {
        if (result.value) {
          Swal.fire("Updated!", "Your user has been updated.", "success");
          // eslint-disable-next-line array-callback-return
          userData.map((user) => {
            if (user.id === location.state.id) {
              user.firstName = formData.firstName;
              user.lastName = formData.lastName;
              user.email = formData.email;
              user.password = formData.password;
              user.role = formData.role;
            }
          });
          localStorage.setItem("userData", JSON.stringify(userData));
          history.push("adminDashboard");
        }
      });
    }
  };

  // eslint-disable-next-line array-callback-return

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
            New One
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
                <FormControl fullWidth>
                  <InputLabel>Role</InputLabel>
                  <Select
                    value={formData.role}
                    onChange={handleChange}
                    name="role"
                    fullWidth
                    label="Role"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                    <MenuItem value={"User"}>User</MenuItem>
                  </Select>
                </FormControl>
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
              Update Now
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
