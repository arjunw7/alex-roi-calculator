import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }
    calculateROI(){
        this.setState({result: ""})
        let failed = parseFloat(this.refs.bankrupt.value)
        console.log(failed)
        let ipo = parseFloat(this.refs.ipo.value)
        let success = parseFloat(this.refs.success.value)
        if(!this.refs.bankrupt.value || !this.refs.ipo.value || !this.refs.success.value){
            alert("Please provide a valid input between 0-100 for all three cases.")
        }
        if(failed==0 && success==0 && ipo==0){
            alert("All likelihoods cannot be zero.  ")
        }
        else if(failed<0 || failed>100 || ipo<0 || ipo>100 || success<0 || success>100){
            alert("Please provide a valid input between 0-100 for all three cases.")
        }
        else if((failed + ipo + success)>100){
            alert("Total likelyhood cannot exceed 100%.")
        }
        else{
            let area1 = success/100*100000;
            let area2 = ipo/100*2000;
            let constant = 5/Math.log(failed+(100-success));
            var area3  =(Math.pow(100-success, constant + 1) - Math.pow(failed, constant+1))/constant+1;
            let totalROI = area1 + area3 - area2;
            let result = "Your ROI will be " + totalROI.toFixed(2) + " %"
            this.setState({result: result})
        }
    }

    render() { 
        return(
            <div>
               <img src="https://transparentbusiness.com/img/twenty-five.jpg" alt="" className="back"/>
                <div className="main">
                    <img src="https://transparentbusiness.com/img/svg/logo_white.svg" alt="" className="logo"/>
                    
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mainForm">
                                <div className="formHead">
                                    Given the traction achieved by TransparentBusiness so far, what is your estimate of the likelihood of TransparentBusiness?
                                </div>
                                    <div className="form-group">
                                        <label htmlFor="bankrupt">Going bankrupt?</label>
                                        <input type="number" className="form-control" ref="bankrupt" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ipo">Going public?</label>
                                        <input type="number" className="form-control"  ref="ipo"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="success">Becoming synonymous with the business transparency category?</label>
                                        <input type="number" className="form-control"  ref="success"/>
                                    </div>
                                    <button className="btn btn-default" onClick={()=>this.calculateROI()}>Submit</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mainText">A 90,000%+ ROI Opportunity?</div>
                            <div className="mainSubText">
                             Tell us your estimate and we will predict your ROI.
                            </div>
                            <div className="result">
                                {this.state.result}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;