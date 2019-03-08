
import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Button from '../../Components/Button';
import WOW from "wowjs";
class HomeChatSection extends React.Component {

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
            <div className="section chatSection">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <Text body="Ready to go and build long lasting impact?" className="chatSectionText"/>
                        <Text body="Put our team of strategists, creatives and developers to work for you! 🔫" className="chatSectionSubtext"/>
                        <Button link="contact" text="Lets Talk!" className="chatSectionButton"/>
                    </div>
                    {/* <div className="col-md-6">
                        <Image file="yura---desktop-1920px-3dblocks@2x.png" className="girlImage wow slideInLeft" />
                    </div> */}
                    <div className="col-md-6 col-12 chatRight">
                        <div className="chatSectionImage">
                            <Image file="Lady-in-oval_1.png" className="chatLadyImage wow fadeInUp" />
                            <Image file="Lady-in-oval_2.png" className="chatOvalImage wow fadeInLeft" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeChatSection;
