import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
import Button from '../../Components/Button';
import Footer from '../../Components/Footer';
import {Link } from "react-router-dom";
import WOW from "wowjs";
import Slider from "react-slick";

function SampleNextArrow(props) {
const { className, onClick } = props;
return (
    <div
    className={className}
    onClick={onClick}
    >
    <Image file="yura---desktop-1920px-path-6@2x.png" className="testimonialArrowLeft"/>
    </div>
);
}

function SamplePrevArrow(props) {
const { className, onClick } = props;
return (
    <div
    className={className}
    onClick={onClick}
    >
    <Image file="yura---desktop-1920px-path-7@2x.png" className="testimonialArrowRight"/>
    </div>
);
}

  
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
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            nextArrow: <SamplePrevArrow />,
            prevArrow: <SampleNextArrow />,
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    nextArrow: <SamplePrevArrow />,
                    prevArrow: <SampleNextArrow />,
                  }
                }
              ]
          };
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                }
              ]
          };
        return(
            <div>
                <Text body="Yura is a creative digital agency dedicated to building brands in innovation and technology. We are here for the innovators, the technologists and the game changers." className="homeText"/>
                <Text body="- Hi there 👋🏼" className="homeSubtext"/>
                <div className="section mainSections">
                    <Image file="yura---casedetail-1920-y-gradient.png" className="gardientLogo"/>
                    <div className="row mainSectionsInner">
                        <div className="col-md-6 col-12">
                            <div className="row">
                                <div className="col-md-12 col-12  wow fadeInUp homePageSection">
                                <Link to="team">
                                    <Text body="About Yura" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-working.png" className="sectionImage"/>
                                </Link>
                                </div>
                                <div className="col-md-6 col-12 wow fadeInUp homePageSection">
                                <Link to="services&Methods">
                                    <Text body="Services" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-unknown.png" className="sectionImage"/>
                                </Link>
                                </div>
                                <div className="col-md-6 col-12 wow fadeInUp homePageSection">
                                <Link to="services&Methods">
                                    <Text body="Methods" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-photo-1497348231296-713b847f4ca4.png" className="sectionImage"/>
                                </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="row">
                                <div className="col-md-12 col-12 wow fadeInUp homePageSection">
                                <Link to="cases">
                                    <Text body="Cases Overview" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-cases.png" className="sectionImage"/>
                                </Link>
                                </div>
                            </div>  
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="row">
                                <div className="col-md-12 col-12 wow fadeInUp homePageSection">
                                <Link to="//www.linkedin.com/company/28986347/" target="blank">
                                    <Text body="News" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-news.png" className="sectionImage"/>
                                </Link>
                                </div>
                                <div className="col-md-12 col-12 wow fadeInUp homePageSection">
                                <Link to="team">
                                    <Text body="Team" className="sectionTitleText"/>
                                    <Image file="yura---desktop-1920px-yura-team-partly.png" className="sectionImage"/>
                                </Link>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="section girlSection">
                    <div className="row">
                        <div className="col-md-6">
                        <Image file="yura---desktop-1920px-media-girl-01.png" className="girlSectionImage"/>
                        </div>
                        <div className="col-md-6">
                        <div className="girlTextWrap">
                            <Text body="Driving business results" className="girlText"/>
                            <Text body="through the combination" className="girlText"/>
                            <Text body="of creativity, strategy and" className="girlText"/>
                            <Text body="technology. Because every" className="girlText"/>
                            <Text body="brand is a digital brand." className="girlText"/>
                        </div>
                        <Text body="- May we help you accelerate growth. ✊🏻" className="girlSubtext"/>
                        </div>
                    </div>
                    <Image file="yura-mobile-375-path.png" className="girlGraphic"/>
                </div>
                <div className="section learnMoreBackground">
                    <Image file="yura---casedetail-1920-y-gradient.png" className="gardientLogoLearnMore"/>
                    <div className="learnMoreTextWrapper">
                    <Text body="Our driving principles are: We underpromise and overdeliver. We are equal partners with all our clients and we work in sprints; hyperfocusses and fast." className="learnMoreText"/>
                    </div>
                    
                    <Button link="" text="Learn how" className="learnMoreButton"/>
                </div>
                <div className="section techSection">
                    <div className="techContent">
                            <Text body="MyBit" className="techTitle"/>
                            <Text body="Innovation technology lorem ipsum dolor" className="techMain"/>
                            <Text body="Lorem ipsum dolor sit amet, consecturer apidiscing elit donec tincidunt lacinialeo a dabipus" className="techText"/>
                        <img src="https://png.pngtree.com/svg/20170822/ios_arrow_round_back_1238310.png" className="techArrow" alt=""/>
                    </div>    
                    <Image file="yura---desktop-1920px-gettyimages-554391989.png" className="techImage"/>
                    <div style={{"textAlign":"center"}}>
                    <Button link="" text="More Cases" className="moreCasesButton"/>
                    </div>
                </div>
                <div className="section whatWeDoSection">
                    <Image file="yura-mobile-375-y-white.png" className="whatWeDoGraphic"/>
                    <div className="row whatWeDoMain">
                        <div className="col-md-6 col-10">
                        <Text body="What we do" className="whatWeDoTitle"/>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                <Text body="Branding" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-12">
                                    <ul className="smallList">
                                        <li><Text body="Lorem ipsum dolor sit amet" className="whatWeDoText"/></li>
                                        <li><Text body="Consectetur apidiscing elit" className="whatWeDoText"/></li>
                                        <li><Text body="Dolor sit amet lorem ipsum" className="whatWeDoText"/></li>
                                        <li><Text body="Donec tincident lacina" className="whatWeDoText"/></li>
                                        <li><Text body="Leo a dapibus" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                                <div className="col-md-4 col-12">
                                <Text body="Strategy" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-12">
                                    <ul className="smallList">
                                        <li><Text body="Lorem ipsum dolor sit amet" className="whatWeDoText"/></li>
                                        <li><Text body="Consectetur apidiscing elit" className="whatWeDoText"/></li>
                                        <li><Text body="Dolor sit amet lorem ipsum" className="whatWeDoText"/></li>
                                        <li><Text body="Donec tincident lacina" className="whatWeDoText"/></li>
                                        <li><Text body="Leo a dapibus" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                                <div className="col-md-4 col-12">
                                <Text body="Design" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-12">
                                    <ul className="smallList">
                                        <li><Text body="Lorem ipsum dolor sit amet" className="whatWeDoText"/></li>
                                        <li><Text body="Consectetur apidiscing elit" className="whatWeDoText"/></li>
                                        <li><Text body="Dolor sit amet lorem ipsum" className="whatWeDoText"/></li>
                                        <li><Text body="Donec tincident lacina" className="whatWeDoText"/></li>
                                        <li><Text body="Leo a dapibus" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                                <div className="col-md-4 col-12">
                                <Text body="Development" className="whatWeDoHead"/>
                                </div>
                                <div className="col-md-8 col-12">
                                    <ul className="smallList">
                                        <li><Text body="Lorem ipsum dolor sit amet" className="whatWeDoText"/></li>
                                        <li><Text body="Consectetur apidiscing elit" className="whatWeDoText"/></li>
                                        <li><Text body="Dolor sit amet lorem ipsum" className="whatWeDoText"/></li>
                                        <li><Text body="Donec tincident lacina" className="whatWeDoText"/></li>
                                        <li><Text body="Leo a dapibus" className="whatWeDoText"/></li>
                                    </ul>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section clientsSection">
                    <Text body="We works with startups, STO's and ICO's," className="clientsHead"/>
                    <Text body="blockchain and tech driven companies:" className="clientsHead"/>
                    <div className="logos">
                        <Slider {...logoSettings}>
                        <div>
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                        <div>
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                        <div>
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                        <div>
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                        <div>
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                        <div>
                        <Image file="client-logo.png" className="clientLogo"/>
                        </div>
                    </Slider>
                    </div>
                    
                </div>
                <div className="testimonials">
                <Slider {...settings}>
                        <div className="testimonialItem">
                            <div className="testimonialContentLeft wow fadeInLeft">
                                <Text body="Testimonial" className="testimonialTitle"/>
                                <Text body='"”Yura developed the key messaging, the graphical appearance and webdesign for our STO. In a very short time period, Yura produced exactly what we were after. They went the extra mile and worked with us as true partners."' className="testimonialText"/>
                                <div className="row authorDetails">
                                    <div className="col-md-2 col-2">
                                        <Image file="yura---desktop-1920px-oval@2x.png" className="authorImage"/>
                                    </div>
                                    <div className="col-md-10 col-10">
                                        <Text body="Marco Quacken" className="authorName"/>
                                        <Text body="International Business Growth Advisor" className="authorDesignation"/>
                                    </div>
                                </div>
                            </div>
                            <Image file="yura---desktop-1920px-gettyimages-554391989-1.png" className="testimonialImageLeft wow fadeInLeft"/>
                        </div>
                        <div className="testimonialItem">
                            <Image file="yura---desktop-1920px-gettyimages-554391989-1.png" className="testimonialImageRight wow fadeInRight"/>
                            <div className="testimonialContentRight wow fadeInRight" data-wow-offset="0">
                            <Text body="Testimonial" className="testimonialTitle"/>
                                <Text body='"What convinced us to work with Yura was their ability to understand our purpose and subsequent brand we wanted to achieve. Yura has realised our brand vision and excelled beyond expectations. Id highly recommend their services."' className="testimonialText"/>
                                <div className="row authorDetails">
                                    <div className="col-md-2 col-2">
                                    <Image file="yura---desktop-1920px-oval@2x.png" className="authorImage"/>
                                    </div>
                                    <div className="col-md-10 col-10">
                                    <Text body="Luca Loscalzo" className="authorName"/>
                                    <Text body="Co-Founder | Block3" className="authorDesignation"/>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <div className="testimonialItem">
                            <div className="testimonialContentLeft wow fadeInRight">
                                <Text body="Testimonial" className="testimonialTitle"/>
                                <Text body='"“We have worked with Yura on various projects, and they have never let us nor our clients down. What is most appealing however, is their intelligent approach and thirst to get under the skin of the client"' className="testimonialText"/>
                                <div className="row authorDetails">
                                    <div className="col-md-2 col-2">
                                        <Image file="yura---desktop-1920px-oval@2x.png" className="authorImage"/>
                                    </div>
                                    <div className="col-md-10 col-10">
                                        <Text body="Clara Florey" className="authorName"/>
                                        <Text body="Owner | DisPRuptive" className="authorDesignation"/>
                                    </div>
                                </div>
                            </div>
                            <Image file="yura---desktop-1920px-gettyimages-554391989-1.png" className="testimonialImageLeft wow fadeInRight"/>
                        </div>
                    </Slider>
                </div>
                <div className="section chatSection">
                    <div className="row">
                        <div className="col-md-6">
                            <Text body="Ready to go and build long lasting impact?" className="chatSectionText"/>
                            <Text body="Put our team of strategists, creatives and developers to work for you?" className="chatSectionSubtext"/>
                            <Button link="contact" text="Talk with us" className="chatSectionButton"/>
                        </div>
                        <div className="col-md-6">
                            <Image file="yura---desktop-1920px-3dblocks@2x.png" className="girlImage wow slideInLeft" />
                        </div>
                        {/* <div className="col-md-6">
                             <div className="chatSectionImage">
                                <Image file="top.svg" className="chatSectionTopImage wow slideInDown" />
                                <Image file="left.svg" className="chatSectionLeftImage wow slideInLeft" />
                                <Image file="right.svg" className="chatSectionRightImage wow slideInRight" />
                                <Image file="media-girl-01.png" className="chatSectionGirlImage"/>
                            </div>
                        </div> */}
                    </div>
                </div>
                
                <Footer/>
                
            </div>
        )
    }
}

export default Home;