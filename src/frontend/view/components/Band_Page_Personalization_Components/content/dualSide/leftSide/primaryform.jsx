import "./primaryForm.css";

const BandNameYear = () => {
    return (
        <div>
            <div className="formContainer">
                <h3>First, can you provide us some basic information about your band?</h3>

                <div className="element" id="element1">
                    <label>The band is called...</label>
                    <input
                        type="text"
                        placeholder="Black Veil Brides"
                    />
                </div>

                    
                <div className="element" id="element2">
                    <div className="subElements">
                        <label>It was formed in the year...</label>
                        <input
                            type="number"
                            min="1900"
                            max="2100"
                            placeholder="e.g., 2000"
                        />
                    </div>

                    <div className="subElements">
                        <label>{`Band's genre of music is...`}</label>
                        
                        <div className="custom-select">
                            <select>
                            <option value="alternative">--Select an option--</option>
                            <option value="blues">Blues</option>
                            <option value="classical">Classical</option>
                            <option value="country">Country</option>
                            <option value="electronic">Electronic</option>
                            <option value="folk">Folk</option>
                            <option value="gospel">Gospel</option>
                            <option value="hip-hop">Hip-Hop</option>
                            <option value="jazz">Jazz</option>
                            <option value="metal">Metal</option>
                            <option value="pop">Pop</option>
                            <option value="r&b">R&B</option>
                            <option value="rock">Rock</option>
                            <option value="world">World</option>
                            </select>
                        </div>
                        {/**
                        <select>
                            <option value="alternative">--Select an option--</option>
                            <option value="blues">Blues</option>
                            <option value="classical">Classical</option>
                            <option value="country">Country</option>
                            <option value="electronic">Electronic</option>
                            <option value="folk">Folk</option>
                            <option value="gospel">Gospel</option>
                            <option value="hip-hop">Hip-Hop</option>
                            <option value="jazz">Jazz</option>
                            <option value="metal">Metal</option>
                            <option value="pop">Pop</option>
                            <option value="r&b">R&B</option>
                            <option value="rock">Rock</option>
                            <option value="world">World</option>
                        </select>
                         */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BandNameYear;