
import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import WOW from "wowjs";
import Slider from "react-slick";
class Clients extends React.Component {

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
        const logoSettings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                  }
                }
              ]
          };

        return(
            <div className="section clientsSection">
                <Text body="We work with startups, STO's and ICO's," className="clientsHead"/>
                <Text body="blockchain and tech driven companies:" className="clientsHead"/>
                <div className="logos">
                    <Slider {...logoSettings}>
                    <div>
                    <Image file="clients/1.png" className="clientLogo"/>
                    </div>
                    <div>
                    <Image file="clients/2.png" className="clientLogo"/>
                    </div>
                    <div>
                    <Image file="clients/3.png" className="clientLogo"/>
                    </div>
                    <div>
                    <Image file="clients/4.png" className="clientLogo"/>
                    </div>
                    <div>
                    <Image file="clients/5.png" className="clientLogo"/>
                    </div>
                    <div>
                    <Image file="clients/6.png" className="clientLogo"/>
                    </div>
                    <div>
                    <Image file="clients/7.png" className="clientLogo"/>
                    </div>
                    
                </Slider>
            </div>
        </div>
        )
    }
}

export default Clients;
