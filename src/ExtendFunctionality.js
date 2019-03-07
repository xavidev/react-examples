import React from 'react';

class ExtendFunctionality extends React.Component {
    render() {
        return (
            <Buttons>
                <button value="A">A</button>
                <button value="B">B</button>
                <button value="C">C</button>    
            </Buttons>
        )
    }
}

class Buttons extends React.Component {
    constructor(){
        super();
        this.state = {selected: 'None'}
    }
    selectItem(selected){
        this.setState({selected})
    }
    render(){
        //We have to use cloneElement. props.children returns a 
        // descriptor of the component not the component itself. 
        let fn = child => 
            React.cloneElement(child, {
                onClick: this.selectItem.bind(this, child.props.value)
            })
        
        let items = React.Children.map(this.props.children, fn);
        return (
            <div>
                <h2>You have selected: {this.state.selected}</h2>
                {items}
            </div>
        )
    }
}

export default ExtendFunctionality;