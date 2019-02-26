import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Footer from '../../Components/Footer';
import {Link } from "react-router-dom";
import WOW from "wowjs";

class CaseDetails extends React.Component {

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
                    <Image file="yura---casedetail-1920-gettyimages-554391989-copy.png" className="caseMainImage"/>
                    <div className="row legendData">
                        <div className="col-md-1 col-4">
                            <Text body="Client:" className="caseLegend"/>
                            <Text body="Project:" className="caseLegend"/>
                            <Text body="Visit:" className="caseLegend"/>
                        </div>
                        <div className="col-md-2 col-8">
                            <Text body="Block3" className="caseLegendValue"/>
                            <Text body="Rebranding" className="caseLegendValue"/>
                            <Text body="Block3.co" className="caseLegendValue"/>
                        </div>
                        <div className="col-md-8 col-12">
                            <Text body="We help big companies act like small startups, and provide the expertise startups need to launch and scale their business. We also create ventures on our own." className="caseLegendText"/>
                            <Text body="We create new products and services from the ground up, or improve existing products. As a team we contribute with everything from concept work, product design." className="caseLegendText"/>
                        </div>
                    </div>

                    <div className="mobileImages">
                        <div className="row">
                            <div className="col-md-4 col-6">
                                <Image file="yura---casedetail-1920-your-design-here.png" className="mobileImageInner"/>
                            </div>
                            <div className="col-md-4 col-6">
                                <Image file="yura---casedetail-1920-your-design-here.png" className="mobileImageInner"/>
                            </div>
                            <div className="col-md-4 col-6 hideThirdImage">
                                <Image file="yura---casedetail-1920-your-design-here.png" className="mobileImageInner"/>
                            </div>
                        </div>
                    </div>

                    <div className="caseDetailImages">
                        <div className="row">
                            <div className="col-md-6 col-6">
                                <Text body="New work is done" className="caseDetailImageHead"/>
                                <Text body="Big companies act like small startups, and provide the expertise startups need to launch and scale their business. We also create ventures on our own." className="csaseDetailImageText"/>
                            </div>
                            <div className="col-md-6 col-6">
                                <Image file="yura---casedetail-1920-gettyimages-554391989-copy-1.png" className="mobileImageFrame"/>
                            </div>
                            <div className="col-md-6 col-6">
                                <Image file="yura---casedetail-1920-gettyimages-554391989-copy-3.png" className="mobileImageFrame"/>
                            </div>
                            <div className="col-md-6 col-6">
                                <Text body="Identity is Everything" className="caseDetailImageHead"/>
                                <Text body="We create new products and services from the ground up, or improve existing products. As a team we contribute with everything from concept work, product design, prototyping and branding to all types of development including advanced machine learning and working with blockchain." className="csaseDetailImageText"/>
                            </div>
                        </div>
                        <Image file="yura---casedetail-1920-path.png" className="caseDetailsGraphic"/>
                    </div>

                    <div className="controls">
                        <Image file="yura---casedetail-1920-path-copy@2x.png" className="caseDetailsLeftArrow"/>
                        <Link to=""><Text body="Previous Case" className="control"/></Link>
                       <Text body="Overview" className="control"/>
                       <Link to=""><Text body="Next Case" className="control"/></Link>
                       <Image file="yura---casedetail-1920-path-copy@2x.png" className="caseDetailsRightArrow"/>
                    </div>

                    <Footer/>
            </div>  
        )
    }
}

export default CaseDetails;