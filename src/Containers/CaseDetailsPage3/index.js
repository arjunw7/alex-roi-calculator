import React from 'react';
import Text from '../../Components/Text';
import Footer from '../../Components/Footer';
import {Link } from "react-router-dom";
import WOW from "wowjs";
class CaseDetails3 extends React.Component {

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
            <div className="case3">
                <img src={"../img/cases/3/Helena_A.jpg"} className="caseMainImage" alt=""/>
                <div className="row legendData">
                    <div className="col-md-1 col-2">
                        <Text body="Client:" className="caseLegend"/>
                        <Text body="Project:" className="caseLegend"/>
                        <Text body="." className="caseLegend white"/>
                        <Text body="Visit:" className="caseLegend"/>
                    </div>
                    <div className="col-md-4 col-10">
                        <Text body="Helena Oil & Gas" className="caseLegendValue"/>
                        <Text body="Brand Strategy, Designs & Development" className="caseLegendValue"/>
                        <a href="//www.helenatoken.io" target="blank"><Text body="helenatoken.io" className="caseLegendValue"/></a> 
                    </div>
                    <div className="col-md-7 col-12">
                        <div className="caseLegendTextWrap">
                        <Text body="An existing and fully operational energy company doing an STO, now that’s exiting news to us. After a deepdive session we started writing the brand narrative and rewriting the pitchdeck. Then all other branded deliverables derived from there" className="caseLegendText"/>
                        <Text body="We worked in design sprints of one week each. We were able to de-liver the brand narrative, the pitchdeck, webdesign and fully func-tional website in the first week." className="caseLegendText"/>
                        </div>
                    </div>
                </div>

                <img src="../img/cases/3/Helena_A1.jpg" className="caseFullImage" alt=""/>

                <div className="caseDetailImages">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <Text body="The result" className="caseDetailImageHead"/>
                            <Text body="We love working fully focussed with the full team on one client at a time. The result is a very happy client and a stronger relationship. The STO is still running and on it’s way to raise 35million euros." className="csaseDetailImageText"/>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src="../img/cases/3/Helena_B.png" className="mobileImageFrame" alt=""/>
                        </div>
                    </div>
                </div>
                <img src="../img/cases/3/Helena_C.jpg" className="caseFullImage" alt=""/>
                <div className="caseDetailImages">
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-4 caseThreeSingleImage">
                            <img src="../img/cases/3/Helena_D.png" className="mobileImageFrame" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="controls">
                    <img src="../img/yura---casedetail-1920-path-copy@2x.png" className="caseDetailsLeftArrow" alt=""/>
                    <Link to="2"><Text body="Previous Case" className="control"/></Link>
                <Text body="Overview" className="control"/>
                <Link to="4"><Text body="Next Case" className="control"/></Link>
                <img src="../img/yura---casedetail-1920-path-copy@2x.png" className="caseDetailsRightArrow" alt=""/>
                </div>

                <Footer/>
        </div>  
        )
    }
}

export default CaseDetails3;