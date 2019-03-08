import React from 'react';
import Text from '../../Components/Text';
import Footer from '../../Components/Footer';

import WOW from "wowjs";

//import sections
import Testimonials from '../../Sections/Testimonials';
import Clients from '../../Sections/Clients'
import HomeMainSections from '../../Sections/HomeMainSections';  
import WhatWeDo from '../../Sections/WhatWeDo';
import HomeGirlSection from '../../Sections/HomeGirlSection';
import HomeLearnMoreSection from '../../Sections/HomeLearnMoreSection';
import HomeChatSection from '../../Sections/HomeChatSection';
import HomeTechSection from '../../Sections/HomeTechSection';


class Home extends React.Component {

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
                <Text body="Yura is a creative digital agency dedicated to building brands in innovation and technology. We are here for the innovators, the technologists and the game changers." className="homeText"/>
                <Text body="- Hi there 👋🏼" className="homeSubtext"/>
                <HomeMainSections/>
                <HomeGirlSection/>
                <HomeLearnMoreSection/>
                <HomeTechSection/>
                <WhatWeDo/>
                <Clients/>
                <Testimonials/>
                <HomeChatSection/>
                <Footer/>
            </div>
        )
    }
}

export default Home;