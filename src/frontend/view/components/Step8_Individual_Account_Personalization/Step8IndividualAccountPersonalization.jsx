import './Step8IndividualAccountPersonalizationStyles.css';
export default function Step8IndividualAccountPersonalization(){
    return(
        <div className="step8IndividualAccountPersonalization">
            <p id="mainLabel">Lastly, please follow at least 5 other accounts...</p>

            <div id="innerContainer">
                
                {/* Create dynamic creator for options of accounts */}

                {/* PLACEHOLDER VALUES */}
                <div id="accountsContainer">
                    <div className="account">
                        <div id="imgContainer">
                            <img src = "" alt="" id="guitarDefaultIcon" />
                        </div>
                    </div>

                    <div className="account">
                        <div id="imgContainer">
                            
                        </div>
                    </div>

                    <div className="account">
                        <div id="imgContainer">
                            
                        </div>
                    </div>

                    <div className="account">
                        <div id="imgContainer">
                            
                        </div>
                    </div>

                    <div className="account">
                        <div id="imgContainer">
                            
                        </div>
                    </div>

                    <div className="account">
                        <div id="imgContainer">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}