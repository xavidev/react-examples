import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycling extends React.Component {
    constructor(){
        super();
        this.state = {val:0}
        this.update = this.update.bind(this)
    }
    update(){
        this.setState({val: this.state.val + 1})
    }
    //Can not acces component yet
    componentWillMount(){
        console.log('componentWillMount');
        this.setState({m: 2})
    }
    render(){
        console.log('render');
        return <button onClick={this.update}>
            {this.state.val * this.state.m}
        </button>
    }
    //We have acces to component
    componentDidMount(){
        console.log('componentDidMount');
        console.log(ReactDOM.findDOMNode(this));
        this.inc = setInterval(this.update, 500);
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        //If we don't clean the interval trying to update the state
        //of an unmounted component thus cause error.
        clearInterval(this.inc);
    }
}

class Wrapper extends React.Component {
    mount(){
        ReactDOM.render(<LifeCycling/>, document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmount.ComponentAtNode(document.getElementById('a'))
    }
    render(){
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        )
    }
}

export default Wrapper;