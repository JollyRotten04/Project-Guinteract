import logoImage from '../../../assets/1.png';
export default function LogoComponent(){
    return(
        <div className = "logo">
            <p id = "logoFirstPart">Guinter</p>
            <img src={logoImage} alt="" id="logoPickIcon" />
            <p id="logoSecondPart">ct</p>
        </div>
    );
}