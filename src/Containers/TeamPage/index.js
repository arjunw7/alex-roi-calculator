import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import {Link } from "react-router-dom";
import WOW from "wowjs";

class Team extends React.Component {

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
                    <Text body="Team" className="teamHead"/>
                    </div>
                    <div className="col-md-8">
                    <Text body="Our team consists of experts within fields as diverse as design, animation and development, as well as Artificial Intelligence, machine learning and advanced algorithms. We are constantly on the lookout for talent within any of the fields." className="teamText"/>
                    <Button link="contact" text="Want to join our team?" className="teamMainButton"/>
                    </div>
                </div>
                <div className="teamMembers">
                    <Image file="yura-mobile-375-path.png" className="teamGraphic"/>
                    <div className="row">
                        <div className="col-md-3 col-6 member wow fadeInUp" data-wow-delay="0.1s">
                            <Image file="yura---team-1920px-team-1.png" className="memberImage"/>
                            <Text body="Dave Paulisse" className="memberName"/>
                            <Text body="Full Stack Developer" className="memberProfile"/>
                            <Link to=""><Text body="Linkedin" className="memberSocial"/></Link>
                        </div>
                        <div className="col-md-3 col-6 member wow fadeInUp" data-wow-delay="0.2s">
                            <Image file="yura---team-1920px-team-3.png" className="memberImage"/>
                            <Text body="Dennis Roelofsen" className="memberName"/>
                            <Text body="Co-founder & Strategy Director" className="memberProfile"/>
                            <Link to=""><Text body="Linkedin" className="memberSocial"/></Link>
                        </div>
                        <div className="col-md-3 col-6 member wow fadeInUp" data-wow-delay="0.3s">
                            <Image file="yura---team-1920px-team-4.png" className="memberImage"/>
                            <Text body="August Skare" className="memberName"/>
                            <Text body="Developer" className="memberProfile"/>
                            <Link to=""><Text body="Linkedin" className="memberSocial"/></Link>
                        </div>
                        <div className="col-md-3 col-6 member wow fadeInUp" data-wow-delay="0.4s">
                            <Image file="yura---team-1920px-team-1.png" className="memberImage"/>
                            <Text body="Dave Paulisse" className="memberName"/>
                            <Text body="Full Stack Developer" className="memberProfile"/>
                            <Link to=""><Text body="Linkedin" className="memberSocial"/></Link>
                        </div>
                        <div className="col-md-3 col-6 member wow fadeInUp" data-wow-delay="0.1s">
                            <Image file="yura---team-1920px-team-3.png" className="memberImage"/>
                            <Text body="Dennis Roelofsen" className="memberName"/>
                            <Text body="Co-founder & Strategy Director" className="memberProfile"/>
                            <Link to=""><Text body="Linkedin" className="memberSocial"/></Link>
                        </div>
                        <div className="col-md-3 col-6 member wow fadeInUp" data-wow-delay="0.2s">
                            <Image file="yura---team-1920px-team-4.png" className="memberImage"/>
                            <Text body="August Skare" className="memberName"/>
                            <Text body="Developer" className="memberProfile"/>
                            <Link to=""><Text body="Linkedin" className="memberSocial"/></Link>
                        </div>
                        <div className="col-md-3 col-6 member wow fadeInUp" data-wow-delay="0.3s">
                            <Image file="yura---team-1920px-team-1.png" className="memberImage"/>
                            <Text body="Dave Paulisse" className="memberName"/>
                            <Text body="Full Stack Developer" className="memberProfile"/>
                            <Link to=""><Text body="Linkedin" className="memberSocial"/></Link>
                        </div>
                        <div className="col-md-3 col-6 member wow fadeInUp" data-wow-delay="0.4s">
                            <Image file="yura---team-1920px-team-3.png" className="memberImage"/>
                            <Text body="Dennis Roelofsen" className="memberName"/>
                            <Text body="Co-founder & Strategy Director" className="memberProfile"/>
                            <Link to=""><Text body="Linkedin" className="memberSocial"/></Link>
                        </div>
                    </div>
                </div>
                <div className="joinUsSection">
                    <Image file="yura---casedetail-1920-y-gradient.png" className="joinUsGraphic"/>
                    <div className="row">
                        <div className="col-md-4">
                        <Text body="Join Us" className="joinUsHead"/>
                        </div>
                        <div className="col-md-8">
                        <Text body="Great parties are an important ingredient of Yura Agency. Twice a year, at summer and christmas, we gather everyone in the company for a trip. We also do parties, open houses and yearly conferences." className="joinUsText"/>
                        <a href="mailto:info@yura.agency" rel="noopener noreferrer"><button className="joinUsButton">An Interesting Day</button></a>
                        </div>
                    </div>
                </div>
                <Footer/>
                
            </div>
        )
    }
}

export default Team;