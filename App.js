import React, { Fragment,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components import
  //user components

import Landing from "./components/User/Landing/Landing";
import Dashboard from "./components/User/dashboard/Dashboard";
import Login from "./components/User/auth/Login";
import Register from "./components/User/auth/Register";
import Orders from "./components/User/Orders/Orders";

  //owner components
  import OwnerLogin from "./components/Owner/Auth/OwnerLogin";
import OwnerDashboard from "./components/Owner/Dashboard/Dashboard";
import OwnerOrders from "./components/Owner/Orders/Orders";
import OwnerReviews from "./components/Owner/Reviews/Reviews";

//admin components
import Adminlogin from "./components/Admin/Auth/Adminlogin";
import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
import Locations from "./components/Admin/Locations/Locations";
import Requests from "./components/Admin/Requests/Requests";
import ApproveLocations from "./components/ApproveLocations/ApproveLocations";
import Cities from "./components/Admin/Cities/Cities";

//redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from './actions/auth';
import setAuthToken from './actions/utils/setAuthToken';
import Profile from "./components/Owner/Profile/Profile";
import Req from "./components/User/Req/Req";

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(()=>{
    store.dispatch(loadUser());
},[]);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Landing />} />
          <Route exact path="/user/dashboard" element={<Dashboard/>}/>
          <Route exact path="/user/login" element={<Login/>}/>
          <Route exact path="/user/register" element={<Register/>}/>
          <Route exact path="/user/orders" element={<Orders/>}/>
          <Route exact path="/sendReq" element={<Req/>}/>

          <Route exact path="/owner/login" element={<OwnerLogin/>}/>
            <Route exact path="/owner/dashboard" element={<OwnerDashboard/>}/>
            <Route exact path="/owner/orders" element={<OwnerOrders/>}/>
            <Route exact path="/owner/reviews" element={<OwnerReviews/>}/>
            <Route exact path="/owner/profile" element={<Profile/>}/>

            <Route exact path="/admin/login" element={<Adminlogin/>}/>
            <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
            <Route exact path="/admin/locations" element={<Locations/>}/>
            <Route exact path="/admin/requests" element={<Requests/>}/>
            <Route exact path="/admin/cities" element={<Cities/>}/>
            <Route exact path="/admin/approveLocations" element={<ApproveLocations/>}/>
          </Routes>

          {/* admin routes */}
         
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
