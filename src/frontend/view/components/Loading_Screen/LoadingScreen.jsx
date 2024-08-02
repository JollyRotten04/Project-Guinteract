import LogoComponent from "../Logo_Component/LogoComponent";
import './LoadingScreenStyles.css';
import LoadingIcon from '../Loading_Icon/LoadingIcon';

export default function LoadingScreen(){
    return(
        <div className="loadingScreen">

            {/* Main Container for all elements */}
            <div className="mainContainer">


                {/* Logo Container */}
                <div className="logoContainer">
                    <LogoComponent></LogoComponent>
                </div>

                <div id="mainLabel">
                    Meet and connect with fellow guitarists...
                </div>

                <div id="reassuranceText">
                    Setting things up, this may take a while...
                </div>

                <div className="loadingIcon">
                    <LoadingIcon></LoadingIcon>
                </div>

                
            </div>
        </div>
    );
}