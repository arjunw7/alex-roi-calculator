
import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Button from '../../Components/Button';
import WOW from "wowjs";
class HomeTechSection extends React.Component {

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
            <div className="section techSection">
                <div className="techContent">
                        <Text body="Helena Token" className="techTitle"/>
                        <Text body="How an energy company does an STO" className="techMain"/>
                        <Text body="To create the storytelling, UX design and graphics for website, pitchdecks and whitepaper." className="techText"/>
                        <a href="3"><img src="https://png.pngtree.com/svg/20170822/ios_arrow_round_back_1238310.png" className="techArrow" alt=""/></a>
                </div>    
                <Image file="Gradient_MyBit_home.png" className="techImage"/>
                <div style={{"textAlign":"center"}}>
                <Button link="cases" text="More Cases" className="moreCasesButton"/>
                </div>
            </div>
        )
    }
}

export default HomeTechSection;
