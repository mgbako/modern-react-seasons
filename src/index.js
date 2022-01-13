import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {lat: null};
  }

  render(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude})
        console.log(position)
      },
      error => console.error(error)
    )
    return <div>Latitude: {this.state.lat}</div>
  }
}


ReactDom.render(<App />, document.querySelector('#root'));