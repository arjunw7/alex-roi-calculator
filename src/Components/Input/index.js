import React from 'react';
class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return(
                    <input type={this.props.type} placeholder={this.props.placeholder} className={this.props.className}/>

        )
    }
}

export default Input;