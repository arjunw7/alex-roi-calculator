import React from 'react';
import Text from '../../Components/Text';
import Footer from '../../Components/Footer';
import {Link } from "react-router-dom";
import WOW from "wowjs";
class CaseDetails2 extends React.Component {

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
            <div className="case2">
                    <img src={"../img/cases/2/BLOCK3_A.jpg"} className="caseMainImage" alt=""/>
                    <div className="row legendData">
                        <div className="col-md-1 col-4">
                            <Text body="Client:" className="caseLegend"/>
                            <Text body="Project:" className="caseLegend"/>
                        </div>
                        <div className="col-md-2 col-8">
                            <Text body="Block3" className="caseLegendValue"/>
                            <Text body="Rebranding" className="caseLegendValue"/>
                        </div>
                        <div className="col-md-9 col-12">
                            <div className="caseLegendTextWrap">
                            <Text body="Block3 is building blockchain businesses. Block3 asked us to reshape their visual presence in an unpredictable way with unconventional colour ways." className="caseLegendText"/>
                            </div>
                        </div>
                    </div>

                    <img src="../img/cases/2/BLOCK3_A1.jpg" className="caseFullImage" alt=""/>

                    <div className="caseDetailImages">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <Text body="Deliverables" className="caseDetailImageHead"/>
                                <Text body="Logo redesign, custom icons, UX design and webdesign." className="csaseDetailImageText"/>
                            </div>
                            <div className="col-md-6 col-12">
                                <img src="../img/cases/2/BLOCK3_B.png" className="mobileImageFrame" alt=""/>
                            </div>
                        </div>
                    </div>
                    <img src="../img/cases/2/BLOCK3_C.jpg" className="caseFullImage" alt=""/>
                    <div className="caseDetailImages singleImage">
                        <div className="row">
                            <div className="col-md-4">
                                
                            </div>
                            <div className="col-md-4">
                                <img src="../img/cases/2/BLOCK3_D.png" className="mobileImageFrame" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="controls">
                        <img src="../img/yura---casedetail-1920-path-copy@2x.png" className="caseDetailsLeftArrow" alt=""/>
                        <Link to="1"><Text body="Previous Case" className="control"/></Link>
                       <Text body="Overview" className="control"/>
                       <Link to="3"><Text body="Next Case" className="control"/></Link>
                       <img src="../img/yura---casedetail-1920-path-copy@2x.png" className="caseDetailsRightArrow" alt=""/>
                    </div>

                    <Footer/>
            </div>  
        )
    }
}

export default CaseDetails2;