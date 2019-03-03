import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import WOW from "wowjs";
class ServicesMethods extends React.Component {

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
                <div className="row teamMain">
                    <div className="col-md-4">
                    <Text body="Methods & Services" className="servicesHead"/>
                    </div>
                    <div className="col-md-8">
                    <Text body="Yura is a digital studio that transforms big ideas into great products and ventures. We help big companies like small startups, and provide the expertise startups need to launch and scale their business. We also create ventures on our own." className="servicesText"/>
                    <Button link="contact" text="Want to join our team?" className="teamMainButton"/>
                    </div>
                </div>

                <Image file="yura---sm-1920px-gettyimages-554391989-copy.png" className="servicesMethodsMainImage"/>
                <div className="services">
                    <div className="row">
                        <div className="col-md-4">
                            <Text body="01" className="serviceHeadNumber"/>
                            <Text body="Clarity" className="serviceHeadText"/>
                            <Text body="We have the people needed to take the product from beginning to end. Combining heavy technical experience with a fierce focus on product design, we are capable of bringing any idea to life, no matter the complexity" className="serviceDescription"/>
                        </div>
                        <div className="col-md-4">
                            <Text body="02" className="serviceHeadNumber"/>
                            <Text body="Speed" className="serviceHeadText"/>
                            <Text body="We have the people needed to take a product from beginning to end. Combining heavy technical experience with a fierce focus on product design, we are capable to bring any idea to life, no matter the complexity." className="serviceDescription"/>
                        </div>
                        <div className="col-md-4">
                            <Text body="03" className="serviceHeadNumber"/>
                            <Text body="Creativity" className="serviceHeadText"/>
                            <Text body="We have the people needed to take a product from beginning to end. Combining heavy technical experience with a fierce focus on product design, we are capable to bring any idea to life, no matter the complexity." className="serviceDescription"/>
                        </div>
                    </div>
                </div>

                <div className="processMain">
                    <Image file="yura-mobile-375-path.png" className="processGraphic"/>
                    <div className="processContent">
                        <Text body="Our Process" className="processMainHead"/>
                        <Text body="We have a unique process in 5 clearly defined phases taking a product from beginning to end." className="processMainText"/>
                    </div>
                    <Image file="yura---desktop-1920px-gettyimages-554391989.png" className="processMainImage"/>
                </div>

                <div className="processDetails">
                    <div className="row">
                        <div className="col-md-4">
                            <Text body="Our Process" className="processDetailsHead"/>
                        </div>
                        <div className="col-md-8">
                            <Text body="We have a unique process in 5 clearly defined phases taking a product from beginning to end. Combining heavy technical experience with a fierce focus on product design, we are capable to bring any idea to life, no matter the complexity." className="processDetailsText"/>
                        </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-9">
                            <div className="processItem">
                                <Image file="yura---sm-1920px-investigate.svg" className="processItemIcon"/>
                                <div className="processData">
                                    <Text body="Phase 0" className="processPhase"/>
                                    <Text body="Investigate & Understand" className="processTitle"/>
                                    <Text body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus eros, nec laoreet sapien posuere vel." className="processDescription"/>
                                </div>
                            </div>
                           <div className="processItem">
                                <Image file="yura---sm-1920px-ideate.svg" className="processItemIcon"/>
                                <div className="processData">
                                    <Text body="Phase 1" className="processPhase"/>
                                    <Text body="Strategize & Ideate" className="processTitle"/>
                                    <Text body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus eros, nec laoreet sapien posuere vel." className="processDescription"/>
                                </div>
                           </div>
                           <div className="processItem">
                            <Image file="yura---sm-1920px-design.svg" className="processItemIcon"/>
                                <div className="processData">
                                    <Text body="Phase 2" className="processPhase"/>
                                    <Text body="Design & Write" className="processTitle"/>
                                    <Text body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus eros, nec laoreet sapien posuere vel." className="processDescription"/>
                                </div>
                           </div>
                            <div className="processItem">
                                <Image file="yura---sm-1920px-execute.svg" className="processItemIcon"/>
                                <div className="processData">
                                    <Text body="Phase 3" className="processPhase"/>
                                    <Text body="Execute & Implement" className="processTitle"/>
                                    <Text body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus eros, nec laoreet sapien posuere vel." className="processDescription"/>
                                </div>
                            </div>
                            <div className="processItem">
                                    <Image file="yura---sm-1920px-improve.svg" className="processItemIcon"/>
                                    <div className="processData">
                                        <Text body="Phase 4" className="processPhase"/>
                                        <Text body="Track & Improve" className="processTitle"/>
                                        <Text body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus eros, nec laoreet sapien posuere vel." className="processDescription"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Image file="yura---sm-1920px-gettyimages-554391989-copy-2.png" className="notesImage"/>

                <div className="ambition">
                    <div className="row">
                        <div className="col-md-4">
                        <Text body="What is your ambition?" className="ambitionTitle"/>
                        </div>
                        <div className="col-md-8">
                        <Text body="Yura is a digital studio that transforms big ideas into great products and ventures." className="ambitionHead"/>
                        <Text body="We create new products and services from the ground up, or improve existing products. As a team we contribute with everything from concept work, product design, prototyping and branding to all types of development including advanced machine learning and working with blockchain.?" className="ambitionText"/>
                        <Text body="How great would it be if we could get your project flying?" className="ambitionText"/><Button link="contact" text="Contact us now" className="ambitionButton"/>
                        </div>
                    </div>
                </div>

                <Footer/>
                
            </div>
        )
    }
}

export default ServicesMethods;