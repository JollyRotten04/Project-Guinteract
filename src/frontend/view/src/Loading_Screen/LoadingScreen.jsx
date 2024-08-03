import LogoComponent from "../../components/Logo_Component/LogoComponent";
import './LoadingScreenStyles.css';
import LoadingIcon from '../../components/Loading_Icon/LoadingIcon';

export default function LoadingScreen(){
    return(
        <div className="loadingScreen">

            {/* Main Container for all elements */}
            <div className="loadingMainContainer">


                {/* Logo Container */}
                <div className="loadingLogoContainer">
                    <LogoComponent></LogoComponent>
                </div>

                <div id="loadingMainLabel">
                    Meet and connect with fellow guitarists
                </div>

                <div id="loadingReassuranceText">
                    Setting things up, this may take a bit of time...
                </div>

                <div className="loadingIcon">
                    <LoadingIcon></LoadingIcon>
                </div>
            </div>
        </div>
    );
}