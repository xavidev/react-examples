import React from 'react';
import ReactDOM from 'react-dom';

class RefsComponents extends React.Component {
    constructor(){
        super();
        this.state = {a: ''}
    }
    update(){
        this.setState({
            //refering to a ref of React component
            a: this.a.refs.input.value,
            b: this.refs.b.value
        })
    }
    render(){
        return (
            <div>
                <Input
                    //Setting a equal to a React component
                    ref={component => this.a = component}
                    update={this.update.bind(this)}
                />{this.state.a}
                <hr/>
                <input
                    ref="b" 
                    type="text"
                    onChange={this.update.bind(this)}/>
                    {this.state.b}
            </div>
        )
    }
}

class Input extends React.Component {
    render(){
        return (
            <div>
            <input 
                ref="input" 
                type="text" 
                onChange={this.props.update}/>
            </div>
        )
    }
}

export default RefsComponents;