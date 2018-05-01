import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Roster from './Roster';
import Schedule from './Schedule';
import Loginpage from './containers/Loginpage';
import Signuppage from './containers/Signuppage';
import NewNote from "./containers/NewNote";
import AddSurvey from "./containers/AddSurvey";
import ListAll from "./containers/ListAll";
import NotFound from './containers/NotFound';
import AppliedRoute from './components/AppliedRoute';



export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path='/' exact component={Home} props={childProps} />
    <Route path='/roster' component={Roster} />
    <Route path='/schedule' component={Schedule} />
    <AppliedRoute path='/login' exact component={Loginpage} props={childProps} />
    <AppliedRoute path='/signup' exact component={Signuppage} props={childProps}/>
    <AppliedRoute path="/notes/new" exact component={NewNote} props={childProps} />
    <AppliedRoute path="/survey/new" exact component={AddSurvey} props={childProps} />
    <AppliedRoute path="/listall" exact component={ListAll} props={childProps} />
    <Route component={NotFound} />
  </Switch>;