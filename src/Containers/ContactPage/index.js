import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Footer from '../../Components/Footer';
import WOW from "wowjs";

class Contact extends React.Component {

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
                <div className="contactMain">
                    <div className="row">
                        <div className="col-md-4">
                            <Text body="let's chat" className="contactHead"/>
                            <Text body="with Dennis" className="contactHead"/>
                            <Image file="yura---contact-1920-team.png" className="dennisPhoto"/>
                            <Text body="Dennis Roelefson" className="dennisName"/>
                            <Text body="Co-founder & Strategy Director" className="dennisProfile"/>
                            <Text body="Linkedin" className="dennisSocial"/>
                            <Text body="Instagram" className="dennisSocial"/>
                        </div>
                        <div className="col-md-8">
                            <Text body="Fill this out so Dennis can learn about you and your needs." className="contactHeadRight"/>
                            <div className="form">
                                <Text body="Hi, my name is &nbsp;" className="formText inline"/>
                                <Input type="text" placeholder="Full name" className="formInput inline"/>
                                <Text body="&nbsp;. I work for&nbsp;" className="formText inline"/><br/>
                                <Input type="text" placeholder="Company name" className="formInput inline"/>
                                <Text body="&nbsp;and I am need of a partner" className="formText inline"/><br/>
                                <Text body="to assist me with&nbsp;" className="formText inline"/>
                                <Input type="text" placeholder="a nutshell" className="formInput inline"/><br/>
                                <Text body="You can reach me at&nbsp;" className="formText inline"/>
                                <Input type="text" placeholder="email address" className="formInput"/><br/>
                                <Text body="or&nbsp;" className="formText inline"/>
                                <Input type="text" placeholder="telephone number" className="formInput"/>
                                <Text body="to get the conversation started. Thanks!" className="formText"/>
                                <Button link="" text="Send Dennis a message" className="contactButton"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contactAddress">
                    <div className="address">
                        <Text body="visit us" className="visitUsText"/><br/>
                        <Text body="Wibautstraat 131D 1091 GL Amsterdam" className="addressText"/><br/>
                        <Text body="+31 20 244 0000" className="addressText"/>
                        <Text body="info@yura.agency" className="addressText"/>
                        <Text body="Get Directions" className="getDirections"/>
                        <img src="https://png.pngtree.com/svg/20170822/ios_arrow_round_back_1238310.png" className="addressArrow" alt=""/>
                    </div>
                    <Image file="yura---contact-1920-gettyimages-554391989.png" className="addressImage"/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Contact;