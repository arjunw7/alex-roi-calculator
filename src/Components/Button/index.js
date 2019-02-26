import React from 'react';
import {Link } from "react-router-dom";
class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return(
                <Link to={this.props.link}>
                    <button className={this.props.className}>{this.props.text} &nbsp;<i className="fa fa-angle-right" aria-hidden="true"></i></button>
                </Link>

        )
    }
}

export default Button;