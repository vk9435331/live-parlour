import React from "react";
import { makeStyles } from "@mui/styles";

const UserDashboard = () => {
  const classes = useStyles();
  //add current user data
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div>
      <div className={classes.userCard}>
        <center className={classes.text}>user dashboard</center>
      </div>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes.cardBody}>
            <div className={classes.cardText}>
              Your Full Name: {currentUser.firstName} {currentUser.lastName}{" "}
            </div>
            <div className={classes.cardText}>
              Your Email : {currentUser.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  },
  card: {
    width: "35%",
    height: "35%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    padding: "10px",
    margin: "10px",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    fontSize: "20px",
    fontWeight: "bold",
    // color: "blue",
    //different color for  each text
    "&:nth-child(1)": {
      color: "green",
    },
    "&:nth-child(2)": {
      color: "royalblue",
    },
  },
  text: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "red",
  },
  userCard: {
    width: "100%",
    height: "100%",
    marginTop: "10px",
    // display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    // colorfull boxShadow
    boxShadow: "0px 0px 10px 0px rgba(960,30,40,90.75)",
    // padding: "10px",
    // margin: "10px",
  },
});
export default UserDashboard;
