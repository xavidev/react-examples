import React from 'react';
import PropTypes from 'prop-types';


/*
//Stateless function componenet
const App = () => <h1>Rendered using stateless function component</h1>
*/

//Class component

class App extends React.Component {
  render(){
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div>
        <h1>Rendered using class component</h1>
        <br/>
        <b>We can chain elements with return()</b>
        <br/>
        <b>We can use props also with braces: {txt}</b>
        <br/>  
        <b>This is a default Props: {cat}</b>
      </div>
    )
    }
}

// We can use this object to define props
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}

App.defaultProps = {
  cat: 5
}

export default App
