import React, {Component} from 'react';
import { Button } from '../node_modules/mdbreact';
import NavbarFeatures from './NavbarFeatures.jsx';
class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
    <div>
      <NavbarFeatures></NavbarFeatures>
      <Button color='success'>Hello darkness my old friend</Button>
    </div>);
  }
}
export default App;