import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import WOW from "wowjs";
import Members from '../../Config/team';
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            members: Members
        }
        console.log(this.state)

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
                    <Text body="About & Team" className="teamHead"/>
                    </div>
                    <div className="col-md-8">
                    <Text body="We are a team of experts within fields as diverse as strategy, design and development, as well as storytelling and photography. We are constantly on the lookout for tech savvy creative minds." className="teamText"/>
                    <Button link="contact" text="Want to join our team?" className="teamMainButton"/>
                    </div>
                </div>
                <div className="teamMembers">
                    <Image file="yura-mobile-375-path.png" className="teamGraphic"/>
                    <div className="row">
                        {
                            this.state.members
                            .map(member=>(
                                <div className="col-md-3 col-6 member wow fadeInUp" data-wow-delay="0.1s">
                                    <Image file={"team/" + member.image} className="memberImage"/>
                                    <Text body={member.name} className="memberName"/>
                                    <Text body={member.designation} className="memberProfile"/>
                                    {member.linkedin && <a href={member.linkedin} target="blank"><Text body="Linkedin" className="memberSocial"/></a>}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="joinUsSection">
                    <Image file="yura---casedetail-1920-y-gradient.png" className="joinUsGraphic"/>
                    <div className="row">
                        <div className="col-md-4">
                        <Text body="Join Us" className="joinUsHead"/>
                        </div>
                        <div className="col-md-8">
                        <Text body="Great freedom and independence are important ingredients of Yura Agency. You can work anywhere you want, anytime you want. In fact, let’s all gather in Canggu, Bali and do a two month project." className="joinUsText"/>
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