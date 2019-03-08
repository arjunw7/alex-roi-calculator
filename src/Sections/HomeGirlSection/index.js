
import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import WOW from "wowjs";
class HomeGirlSection extends React.Component {

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
            <div className="section girlSection">
                <div className="row">
                    <div className="col-md-6">
                    <Image file="yura---desktop-1920px-media-girl-01.png" className="girlSectionImage"/>
                    </div>
                    <div className="col-md-6">
                    <div className="girlTextWrap">
                        <Text body="Driving business results through the combination of creativity, strategy and technology. Because every brand is a digital brand." className="girlText"/>
                    </div>
                    <Text body="- May we help you accelerate growth. ✊🏻" className="girlSubtext"/>
                    </div>
                </div>
                <Image file="yura-mobile-375-path.png" className="girlGraphic"/>
            </div>
        )
    }
}

export default HomeGirlSection;
