
import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Button from '../../Components/Button'
import WOW from "wowjs";
class HomeLearnMoreSection extends React.Component {

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
            <div className="section learnMoreBackground">
                <Image file="yura---casedetail-1920-y-gradient.png" className="gardientLogoLearnMore"/>
                <div className="learnMoreTextWrapper">
                <Text body="Our driving principles are: We underpromise and overdeliver. We are equal partners with all our clients and we work in sprints; hyperfocussed and fast." className="learnMoreText"/>
                </div>
                <Button link="" text="Learn how" className="learnMoreButton"/>
            </div>
        )
    }
}

export default HomeLearnMoreSection;
