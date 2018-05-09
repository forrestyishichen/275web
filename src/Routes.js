import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Roster from './Roster';
import Schedule from './Schedule';
import Loginpage from './containers/Loginpage';
import Signuppage from './containers/Signuppage';
import NewNote from "./containers/NewNote";
import ListAll from "./containers/ListAll";
import AllGsurvey from "./containers/AllGsurvey";
import Surveys from "./containers/Surveys";
import NotFound from './containers/NotFound';
import AppliedRoute from './components/AppliedRoute';



export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path='/' exact component={Home} props={childProps} />
    <AppliedRoute path='/roster' component={Roster} props={childProps} />
    <AppliedRoute path='/allGsurvey' component={AllGsurvey} props={childProps} />
    <AppliedRoute path='/schedule' component={Schedule} props={childProps} />
    <AppliedRoute path='/login' exact component={Loginpage} props={childProps} />
    <AppliedRoute path='/signup' exact component={Signuppage} props={childProps} />
    <AppliedRoute path='/surveys/new' exact component={NewNote} props={childProps} />
    <AppliedRoute path="/surveys/:id" exact component={Surveys} props={childProps} />
    <AppliedRoute path='/listall' exact component={ListAll} props={childProps} />
    <Route component={NotFound} />
  </Switch>;