import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Incident from '../Incident/Home';
import Camera from '../Camera';
import Vms from '../Vms';
import Parking from '../Parking';
import Beacons from '../Beacons';
import ATCC from '../ATCC';
import Login from '../Login';

  
/**
 * React router configuration
 */
export default () => (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cctv" component={Camera} />
      <Route path="/ims" component={Incident} />
      <Route path="/vms" component={Vms} />
      <Route path="/parking" component={Parking} />
      <Route path="/beacons" component={Beacons} />
      <Route path="/atcc" component={ATCC} />
    </Switch>
);
