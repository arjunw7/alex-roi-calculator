import React from 'react';
class Text extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return(
            <div className={this.props.className} data-wow-duration="0.5s" data-wow-delay="0.4s">
                {this.props.body}
            </div>
        )
    }
}

export default Text;