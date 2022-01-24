import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./pages/HeaderPages/Header";
import SalloonContent from "./pages/MainContents/SalloonContent";
import Pricing from "./pages/PricingPages/Pricing";
import Error from "./pages/ErrorPages/Error";
import About from "./pages/AboutPages/About";
import Login from "./pages/LoginPages/Login";
import SignUp from "./pages/SigUpPages/SignUp";
import AdminDashboard from "./Dashboards/AdminDashboard/AdminDashboard";
import UserDashboard from "./Dashboards/UserDashboard/UserDashboard";
import AdminProtect from "./Navigations/AdminProtect";
import UserProtect from "./Navigations/UserProtect";
import CreateNewUsers from "./Dashboards/AdminDashboard/CreateNewUsers";
import UpdateUsers from "./Dashboards/AdminDashboard/UpdateUsers";
const App = () => {
  return (
    <div>
      {/* add react router */}

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={SalloonContent} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/createusers" component={CreateNewUsers} />
          <Route exact path="/updateUsers" component={UpdateUsers} />
          <AdminProtect
            exact
            path="/adminDashboard"
            component={AdminDashboard}
          />
          <UserProtect exact path="/userDashboard" component={UserDashboard} />
          {/* <Route exact path='/about' component={About} />
          <Route exact path='/products' component={Products} /> */}
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
