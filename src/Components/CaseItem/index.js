import React from 'react';
import Image from '../Image';
import Text from '../Text';
import {Link} from 'react-router-dom';
import WOW from "wowjs";

class CaseItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    
    render() { 
        return(
            <div className="col-md-6 caseItem wow slideInUp">
                <Image file={this.props.file} className="caseImage"/>
                <Text body={this.props.title} className="caseTitle"/>
                <Text body={this.props.text} className="caseText"/>
                <Link to={this.props.pageName}><Text body="View Case" className="caseLink"/></Link>
            </div>
        )
    }
}

export default CaseItem;