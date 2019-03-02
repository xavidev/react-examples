import React from 'react';
import ReactDOM from 'react-dom';

class LifeCyclingUpdate extends React.Component {
    constructor(){
        super();
        this.state = {increasing: false}
    }
    update(){
        ReactDOM.render(
            <LifeCyclingUpdate val={this.props.val+1}/>,
            document.getElementById('root')
        )
    }
    componentWillReceiveProps(nextProps){
        this.setState({increasing: nextProps.val > this.props.val})
    }
    // State will be updated but 'shouldComponentUpdate' 
    //prevents to re-render the component so state is not
    //reflected in the browser
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.val % 5 === 0;
    }
    render() {
        console.log(this.state.increasing);
        return(
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        )
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`prevProps: ${prevProps.val}`)
    }
}

LifeCyclingUpdate.defaultProps = {val: 0}

export default LifeCyclingUpdate;