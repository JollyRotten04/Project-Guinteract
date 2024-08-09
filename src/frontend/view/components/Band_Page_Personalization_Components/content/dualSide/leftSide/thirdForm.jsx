import "./thirdForm.css";

const ThirdPage = () => {

    // sample output from server
    const output = [
        {
            bandName: "Black Veil Brides",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "Black Veil Brides",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "Black Veil Brides",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "Black Veil Brides",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "Black Veil Brides",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "Black Veil Brides",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        },
        {
            bandName: "Black Veil Brides",
            follooers: "8.8m",
            profile: "../../../../../assets/Screenshot (46)(1)(1).png"
        }
        
    ]

    return (
        <div>
            <h3>Lastly, please follow at least five other pages</h3>
            <div className="body">
                <div className="scrollBar-div">
                    {output.map((band, index) => {
                        return (
                            <div key={index} className="contentContainer">
                                <img className="bandProfile" src={band.profile} />
                                <div className="content" >
                                    <h4 className="bandName">{band.bandName}</h4>
                                    <p>{band.follooers + "followers"}</p>
                                    <button id={band.bandName}>follow</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ThirdPage;