import React from 'react';
import {Link } from "react-router-dom";
import Text from '../Text';
import Image from '../Image';
class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return(
            <div className="section footer">
                <div className="row">
                    <div className="col-md-3 col-6">
                    <Image file="yura-mobile-375-logo-white.svg" className="footerLogo"/>
                    </div>
                    <div className="col-md-3 col-6 footerTextWrap">
                    <Text body="Yura Agency" className="footerText"/>
                    <Text body="+31 20 244 0000" className="footerText"/>
                    </div>
                    <div className="col-md-3 col-6 smallMargin footerLinks">
                    <Link to="home"><Text body="Home" className="footerText"/></Link>
                    <Link to="about"><Text body="About" className="footerText"/></Link>
                    <Link to="cases"><Text body="Case" className="footerText"/></Link>
                    <Link to="team"><Text body="Roles" className="footerText"/></Link>
                    <Link to="//www.linkedin.com/company/28986347/"><Text body="News" className="footerText"/></Link>
                    <Link to="services&Methods"><Text body="Services" className="footerText"/></Link>
                    <Link to="services&Methods"><Text body="Methods" className="footerText"/></Link>
                    <Link to="contact"><Text body="Contact" className="footerText"/></Link>
                    </div>
                    <div className="col-md-3 col-6 smallMargin footerLinks">
                    <Link to=""><Text body="Twitter" className="footerText"/></Link>
                    <Link to=""><Text body="Linkedin" className="footerText"/></Link>
                    <Link to=""><Text body="Facebook" className="footerText"/></Link>
                    <Link to=""><Text body="Instagram" className="footerText"/></Link>
                    <Link to=""><Text body="Medium" className="footerText"/></Link>
                    <Link to=""><Text body="Github" className="footerText"/></Link>
                    </div>
                </div>
                <div className="footerCopyrightText">
                    <Text body="Copyright © Yura Agency 2019. All rights reserved. For information on our site, see the Terms Of Use" className="copyrightText"/>
                    <Text body="We're also using cookies, so we can be better. Here's our privacy policy too." className="copyrightText"/>
                </div>
            </div>
        )
    }
}

export default Footer;