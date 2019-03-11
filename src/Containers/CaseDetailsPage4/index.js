import React from 'react';
import Text from '../../Components/Text';
import Footer from '../../Components/Footer';
import {Link } from "react-router-dom";
import WOW from "wowjs";
class CaseDetails4 extends React.Component {

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
            <div className="case4">
                <img src={"../img/cases/4/GARMEN_A.jpg"} className="caseMainImage" alt=""/>
                <div className="row legendData">
                    <div className="col-md-1 col-4">
                        <Text body="Client:" className="caseLegend"/>
                        <Text body="Project:" className="caseLegend"/>
                        <Text body="Visit:" className="caseLegend"/>
                    </div>
                    <div className="col-md-4 col-8">
                        <Text body="Garmen" className="caseLegendValue"/>
                        <Text body="Brand Strategy & Designs" className="caseLegendValue"/>
                        <a href="//www.garmen.io" target="blank"><Text body="Garmen.io" className="caseLegendValue"/></a> 
                    </div>
                    <div className="col-md-7 col-12">
                        <div className="caseLegendTextWrap">
                        <Text body="A group of co-founders gathered around our meeting table to createa business plan, business model canvas, pitchdecks and explore brand potential and ways to innovate in menswear." className="caseLegendText"/>
                        <Text body="Our approach was using short and bursty designathon sessions to bring out ideas and clarity, a brand foundation and a tangible strategic roadmap and actionplan. " className="caseLegendText"/>
                        </div>
                    </div>
                </div>

                <img src="../img/cases/4/GARMEN_A1.jpg" className="caseFullImage" alt=""/>

                <div className="caseDetailImages">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Text body="The result" className="caseDetailImageHead"/>
                            <Text body="Our preliminary branding exploration functions as the groundwork, opening up funding potential." className="csaseDetailImageText"/>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src="../img/cases/4/GARMEN_B.jpg" className="mobileImageFrame" alt=""/>
                        </div>
                    </div>
                </div>

                <img src="../img/cases/4/GARMEN_C.jpg" className="caseFullImage" alt=""/>

                <div className="controls">
                    <img src="../img/yura---casedetail-1920-path-copy@2x.png" className="caseDetailsLeftArrow" alt=""/>
                    <Link to="3"><Text body="Previous Case" className="control"/></Link>
                    <Text body="Overview" className="control"/>
                    <Link to="1"><Text body="Next Case" className="control"/></Link>
                    <img src="../img/yura---casedetail-1920-path-copy@2x.png" className="caseDetailsRightArrow" alt=""/>
                </div>

                <Footer/>
        </div>  
        )
    }
}

export default CaseDetails4;