import React from 'react';
import Text from '../../Components/Text';
import Image from '../../Components/Image';
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

class Testimonials extends React.Component {

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
        return(
            <div className="testimonials">
                <Slider {...settings}>
                        <div className="testimonialItem">
                            <div className="testimonialContentLeft wow fadeInLeft">
                                <Text body="Testimonial" className="testimonialTitle"/>
                                <Text body='"”Yura developed the key messaging, the graphical appearance and webdesign for our STO. In a very short time period, Yura produced exactly what we were after. They went the extra mile and worked with us as true partners."' className="testimonialText"/>
                                <div className="row authorDetails">
                                    <div className="col-md-2 col-2">
                                        <Image file="Marco.png" className="authorImage"/>
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
                                    <Image file="Luca.png" className="authorImage"/>
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
                                        <Image file="Clara.png" className="authorImage"/>
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
        )
    }
}

export default Testimonials;