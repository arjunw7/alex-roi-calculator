import React from 'react';
import Text from '../../Components/Text';
import CaseItem from '../../Components/CaseItem';
import Footer from '../../Components/Footer';
import WOW from "wowjs";
class Cases extends React.Component {

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
                <div className="row casesMain">
                    <div className="col-md-4">
                    <Text body="Cases" className="casesHead"/>
                    </div>
                    <div className="col-md-8">
                    <Text body="We help big companies act like small startups, and provide the expertise startups need to launch and scale their business. We also create ventures on our own." className="casesText"/>
                    </div>
                </div>
                <div className="cases">
                    <div className="row">
                        <CaseItem file="yura---case-1920-gettyimages-554391989-copy.png" title="Helena Token" text="For this oil and gas company we act like small startups, and provide the expertise startups need to launch and scale." link="caseDetails"/>
                        <CaseItem file="yura---case-1920-gettyimages-554391989-copy-3.png" title="Case 2" text="For this oil and gas company we act like small startups, and provide the expertise startups need to launch and scale." link="caseDetails"/>
                        <CaseItem file="yura---case-1920-gettyimages-554391989-copy-3-2.png" title="Case 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum ante quis urna aliquet pellentesque. In ac dolor nulla." link="caseDetails"/>
                        <CaseItem file="yura---case-1920-gettyimages-554391989-copy-3-1.png" title="Case 4" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum ante quis urna aliquet pellentesque. In ac dolor nulla." link="caseDetails"/>
                        <CaseItem file="yura---case-1920-gettyimages-554391989-copy-3-4.png" title="Case 5" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum ante quis urna aliquet pellentesque. In ac dolor nulla." link="caseDetails"/>
                        <CaseItem file="yura---case-1920-gettyimages-554391989-copy-3-3.png" title="Case 6" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum ante quis urna aliquet pellentesque. In ac dolor nulla." link="caseDetails"/>
                        <CaseItem file="yura---case-1920-gettyimages-554391989-copy-3-6.png" title="Case 7" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum ante quis urna aliquet pellentesque. In ac dolor nulla." link="caseDetails"/>
                        <CaseItem file="yura---case-1920-gettyimages-554391989-copy-3-5.png" title="Case 8" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum ante quis urna aliquet pellentesque. In ac dolor nulla." link="caseDetails"/>                        
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Cases;