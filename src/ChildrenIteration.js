import React from 'react';

class ChildrenIteration extends React.Component {
    render(){
        return (
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        )
    } 
}

class Parent extends React.Component {
    render() {
        //This will cause an error if there is only one props.
        let items =  this.props.children.map(child => child);
        let items2 = React.Children
            .map(this.props.children, child => child);
        //Short way if we won't manipulate props.
        let items3 = React.Children.toArray(this.props.children);
        console.log(items3);
        return null
    }
}

export default ChildrenIteration;