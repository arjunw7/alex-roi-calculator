import React from 'react';
import Text from '../../Components/Text';
import CaseItem from '../../Components/CaseItem';
import Footer from '../../Components/Footer';
import WOW from "wowjs";
import CaseData from '../../Config/cases';
class Cases extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cases: CaseData
        }
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
                    <Text body="As a creative digital agency we dedicate our time and energy to building brands in the technology space. We have helped blockchain companies, startups and STO’s recently." className="casesText"/>
                    </div>
                </div>
                <div className="cases">
                    <div className="row">
                        {
                            this.state.cases
                            .map((item) => (
                                <CaseItem file={item.overviewImage} title={item.name} text={item.description} link="caseDetails" pageName={item.pageName} case={item}/>
                            ))
                        }                    
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Cases;