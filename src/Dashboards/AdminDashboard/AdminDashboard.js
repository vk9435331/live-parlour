import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useHistory } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import Swal from "sweetalert2";
const AdminDashboard = () => {
  const classes = useStyles();
  const history = useHistory();
  // ADD LOCAL STORAGE DATA
  const users = JSON.parse(localStorage.getItem("userData"));

  const removehandler = () => {
    // show a confirmation alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        localStorage.removeItem("userData");
        localStorage.removeItem("currentUser");
        Swal.fire("All Data Erased!", "Your file has been deleted.", "success");
        history.push("/");
      }
    });
  };

  const handleRemovebyId = (id) => {
    // show a confirmation alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        // const newUsers = users.filter((user) => user.id !== id);
        // localStorage.setItem("userData", JSON.stringify(newUsers));
        users.splice(id, 1);
        // update the local storage
        localStorage.setItem("userData", JSON.stringify(users));
        // reload the page
        Swal.fire("Deleted!", "Your User has been deleted.", "success");
        history.push("/adminDashboard");
      }
    });
  };

  return (
    <div>
      <div className={classes.btnGroup}>
        <div className={classes.userCard}>
          <div className={classes.userText}>User Lists {users.length} </div>
        </div>
        <div className={classes.userCard}>
          <div className={classes.icon}>
            Remove All
            <IconButton onClick={removehandler}>
              <DeleteOutline color="secondary" fontSize="large" />
            </IconButton>
            Users
          </div>
        </div>
        <div className={classes.userCard}>
          <div className={classes.icon}>
            Add
            <IconButton
              onClick={() => {
                history.push("/createusers");
              }}
            >
              <AddBoxIcon color="secondary" fontSize="large" />
            </IconButton>
            Users
          </div>
        </div>
      </div>

      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {users.map((elem, key) => (
          <Grid
            item
            xs={8}
            sm={7}
            md={4}
            key={key}
            className={classes.container}
          >
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.paraText}
                >
                  Full Name : {elem.firstName} {elem.lastName}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.paraText}
                >
                  Email : {elem.email}
                </Typography>
                <Typography
                  variant="caption"
                  color="primary"
                  component="h6"
                  className={classes.text}
                >
                  Role : {elem.role}
                </Typography>
                <Typography
                  variant="caption"
                  color="primary"
                  component="h6"
                  className={classes.text}
                >
                  {/* show password but ***** format */}
                  Password : {elem.password.replace(/./g, "*")}
                  {/* Password : {elem.password.replace} */}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  onClick={() => {
                    // alert(elem.id);
                    // history.push(`/updateUsers/${elem.id}`);
                    history.push({
                      pathname: `/updateUsers`,
                      state: elem,
                    });
                  }}
                >
                  Update
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  onClick={handleRemovebyId}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
// style
const useStyles = makeStyles({
  card: {
    //responsive card
    width: "92%",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    padding: "10px",
    margin: "10px",
    //change each card background color of each children

    //hover effect
    "&:hover": {
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.55)",
      transform: "scale(1.1)",
      transition: "0.5s",
      "&:nth-child(1)": {
        backgroundColor: "gold",
        color: "#fff",
      },
    },
  },
  cardContent: {
    //responsive card content with colorfull text
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paraText: {
    //responsive text
    fontSize: "1.2rem",
    fontWeight: "bold",
    //each card text color shoulde be different
    "&:nth-child(1)": {
      color: "mediumpurple",
    },
    "&:nth-child(2)": {
      color: "blue",
    },
  },
  text: {
    //responsive text
    fontSize: "1rem",
    fontWeight: "bold",
    //each card text color shoulde be different
    "&:nth-child(1)": {
      color: "darkmagenta",
    },
    "&:nth-child(2)": {
      color: "red",
    },
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "10px",
  },
  userCard: {
    //responsive card
    width: "20%",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    padding: "10px",
    margin: "10px",

    //hover effect
    "&:hover": {
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.55)",
      transform: "scale(1.1)",
      transition: "0.5s",
    },
  },
  userText: {
    //responsive text
    // fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    color: "blue",
    // add typings animation
    animation: "typings 1s infinite",
  },
  icon: {
    //center
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    color: "blue",
  },
});
export default AdminDashboard;
