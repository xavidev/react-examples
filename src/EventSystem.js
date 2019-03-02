import React from 'react';

class EventSystem extends React.Component {
    constructor(){
        super();
        this.state = {currentEvent: '---'}
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({currentEvent: e.type})
    }
    render(){
        return (
            <div>
                <textarea 
                    cols="30" 
                    rows="10"
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onKeyPress={this.update} />
            </div>
        )
    }
}

export default EventSystem;