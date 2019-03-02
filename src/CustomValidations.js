import React from 'react';

class CustomValidations extends React.Component {
    render(){
        return <Title text="12345678"/>
    }
}

//stateless component
const Title = (props) => <h1>Ttiel: {props.text}</h1>

Title.propTypes = {
    text(props, propName, component){
        if(!(propName in props)){
            return new Error(`missing ${propName}`)
        }
        if(props[propName].lenght < 6){
            return new Error(`${propName} was too short`)
        }
    }
}

export default CustomValidations;