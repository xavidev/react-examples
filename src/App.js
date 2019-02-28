import React from 'react';
import PropTypes from 'prop-types';
import Nested from './NestedComponents';


/*
//Stateless function componenet
const App = () => <h1>Rendered using stateless function component</h1>
*/

//Class component

class App extends React.Component {
  //Each component have a state
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }
  //custom method on our component
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div>
        {/*We can render other React Components */}
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <Widget update={this.update.bind(this)}/>
        <h1>Rendered using class component</h1>
        <br/>
        <b>We can chain elements with return()</b>
        <br/>
        <b>We can use props also with braces: {txt}</b>
        <br/>  
        <b>This is a default Props: {cat}</b>
        <br/>
        <b>We can use the state properties: {this.state.txt}</b>
        <br/>
        <Nested/>
      </div>
    )
    }
}

const Widget = (props) => 
  <input type="text" onChange={props.update}/>

// We can use this object to define props
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}

App.defaultProps = {
  cat: 5
}

export default App
