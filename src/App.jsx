import React, {Component} from 'react';
import {Button} from 'mdbreact';
class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(Button.methods);
    return (
    <div>Hello darkness my oasdfld friend
    <Button color="secondary">Secondary</Button>
    </div>);
  }
}
export default App;