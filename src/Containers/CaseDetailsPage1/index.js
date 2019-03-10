import React from 'react';
import Text from '../../Components/Text';
import Footer from '../../Components/Footer';
import {Link } from "react-router-dom";
import WOW from "wowjs";
class CaseDetails1 extends React.Component {

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
                    <img src={"../img/cases/1/Mybit_A.jpg"} className="caseMainImage" alt=""/>
                    <div className="row legendData">
                        <div className="col-md-3 col-4">
                            <Text body="MYBIT" className="caseBrandName"/>
                            <Text body="Brand Identity" className="caseBrandType"/>
                        </div>
                        <div className="col-md-9 col-12">
                            <div className="caseLegendTextWrap">
                            <Text body="MyBit asked us to define a newbranding strategy, develop their newbrand identity and design a newwebsite doing justice to their mission. During a 2,5 day designathon session in Switzerland we kicked off and gained enough ammunition to move forward. Also the pay-off “Own your future” was born." className="caseLegendText"/>
                            </div>
                        </div>
                    </div>

                    <img src="../img/cases/1/Mybit_A1.png" className="caseFullImage" alt=""/>

                    <div className="caseDetailImages">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <Text body="Custom icons" className="caseDetailImageHead"/>
                                <Text body="Part of the new identity system is a unique set of custom designed icons and animations. Carefully merged into the new homepage andother branded expressions." className="csaseDetailImageText"/>
                            </div>
                            <div className="col-md-6 col-12">
                                <img src="../img/cases/1/Mybit_B.jpg" className="mobileImageFrame" alt=""/>
                            </div>
                        </div>
                    </div>
                    <img src="../img/cases/1/Mybit_C.jpg" className="caseFullImage" alt=""/>
                    <img src="../img/cases/1/Mybit_C1.png" className="caseFullImage" alt=""/>
                    <div className="caseDetailImages">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <img src="../img/cases/1/Mybit_d.jpg" className="mobileImageFrame" alt=""/>
                            </div>
                            <div className="col-md-6 col-12">
                                <Text body="The Brandbook" className="caseDetailImageHead"/>
                                <div className="csaseDetailImageText" >
                                    After the development of the new identity and the webdesign we delivered a brandbook. With that and the brand strategy in hand our partners were able tocreate a kick-ass video. View it <a href="https://www.youtube.com/watch?v=SGFGfpKn1dg" target="blank">here</a>. 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="controls">
                        <img src="../img/yura---casedetail-1920-path-copy@2x.png" className="caseDetailsLeftArrow" alt=""/>
                        <Link to="4"><Text body="Previous Case" className="control"/></Link>
                       <Text body="Overview" className="control"/>
                       <Link to="2"><Text body="Next Case" className="control"/></Link>
                       <img src="../img/yura---casedetail-1920-path-copy@2x.png" className="caseDetailsRightArrow" alt=""/>
                    </div>

                    <Footer/>
            </div>  
        )
    }
}

export default CaseDetails1;