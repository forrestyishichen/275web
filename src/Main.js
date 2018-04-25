import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { List , Message } from 'semantic-ui-react';
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';
import Loginpage from './Loginpage';
import Signuppage from './Signuppage';

// class Test extends Component {

//     render() {

//     return (

//       <div className='Sarea'>
//         <div className='_title'>
//           Test
//         </div>
//          <div className="reminder" >
//           <Message
//             size='mini'
//             >
//              <List as='ol'>
//                 <List.Item as='li'>Enter the address of your solar install.</List.Item>
//                 <List.Item as='li'>Center your installation location and click next.</List.Item>
//               </List>
//             </Message>
//         </div>
//       </div>
//       )
//     }
//   }

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path='/login' component={Loginpage}/>
      <Route path='/signup' component={Signuppage}/>
    </Switch>
  </main>
)

export default Main;
