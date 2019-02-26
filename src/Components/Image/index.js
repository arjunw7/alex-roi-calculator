import React from 'react';
class Image extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return(
                <img src={"img/" + this.props.file} className={this.props.className} alt="" data-wow-offset="-200"/>

        )
    }
}

export default Image;