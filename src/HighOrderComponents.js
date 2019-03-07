import React from 'react';

//HOC = High Order Component: A component that receives another
//component.
const HOC = (InnerComponent) => class extends React.Component {
    //We can use HOC Component as a normal one.
    constructor(){
        super();
        this.state = {count: 0}
    }
    update(){
        this.setState({count: this.state.count + 1})
    }
    componentWillMount(){
        console.log('will mount');
    }
    //Rendering the component passed
    render(){
        return (
            //Have to pass props objet to InnerComponent.
            //We use spread operator to clone props object.
            <InnerComponent
            {...this.props}
            //Passing state as a new prop.
            {...this.state}
            update = {this.update.bind(this)}
            />
        )
    }
}

class HighOrderComponents extends React.Component {
    render(){
        return (
            <div>
                <Button>button</Button>
                <hr/>
                <LabelHOC>label</LabelHOC>
            </div>
        )
    }
}
//Wraping Button component in HOC Component
const Button = HOC((props) => 
    <button onClick={props.update}>
        {props.children} - {props.count}</button>)

class Label extends React.Component {
    componentWillMount(){
        console.log('label will mount');
    }
    render(){
        return (
            <label onMouseMove={this.props.update}>
                {this.props.children}</label>
        )
    }
}

const LabelHOC = HOC(Label);

export default HighOrderComponents