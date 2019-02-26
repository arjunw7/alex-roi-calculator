import React from 'react';
import WOW from "wowjs";
class NotFound extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
        window.scrollTo(0,0);
    }

    render() { 
        return(
            <div>
                404 - Not Found
            </div>
        )
    }
}

export default NotFound;