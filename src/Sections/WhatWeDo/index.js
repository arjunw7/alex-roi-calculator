import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import WOW from "wowjs";

class WhatWeDo extends React.Component {

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
            <div className="section whatWeDoSection">
                    <Image file="yura-mobile-375-y-white.png" className="whatWeDoGraphic"/>
                    <div className="row whatWeDoMain">
                        <div className="col-md-6 col-10">
                        <Text body="What we do" className="whatWeDoTitle"/>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                <Text body="Strategy" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-12">
                                    <ul className="smallList">
                                        <li><Text body="Branding Discovery" className="whatWeDoText"/></li>
                                        <li><Text body="The 6 Brand Questions" className="whatWeDoText"/></li>
                                        <li><Text body="CRADAC-method" className="whatWeDoText"/></li>
                                        <li><Text body="Business Model Canvas" className="whatWeDoText"/></li>
                                        <li><Text body="Designathon Sessions" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                                <div className="col-md-4 col-12">
                                <Text body="Branding" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-12">
                                    <ul className="smallList">
                                        <li><Text body="ICO/STO Branding" className="whatWeDoText"/></li>
                                        <li><Text body="Positioning" className="whatWeDoText"/></li>
                                        <li><Text body="Naming" className="whatWeDoText"/></li>
                                        <li><Text body="Copywriting" className="whatWeDoText"/></li>
                                        <li><Text body="Whitepapers" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                                <div className="col-md-4 col-12">
                                <Text body="Design" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-12">
                                    <ul className="smallList">
                                        <li><Text body="Graphic Design" className="whatWeDoText"/></li>
                                        <li><Text body="Photography & Video" className="whatWeDoText"/></li>
                                        <li><Text body="Identity Systems" className="whatWeDoText"/></li>
                                        <li><Text body="Art Direction" className="whatWeDoText"/></li>
                                        <li><Text body="Illustrations & Infographics" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                                <div className="col-md-4 col-12">
                                <Text body="Development" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-12">
                                    <ul className="smallList">
                                        <li><Text body="Custom Websites" className="whatWeDoText"/></li>
                                        <li><Text body="Online Platforms" className="whatWeDoText"/></li>
                                        <li><Text body="Drupal CMS" className="whatWeDoText"/></li>
                                        <li><Text body="Wordpress CMS" className="whatWeDoText"/></li>
                                        <li><Text body="Apps" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default WhatWeDo;