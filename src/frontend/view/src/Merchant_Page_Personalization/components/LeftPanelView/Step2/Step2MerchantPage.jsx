import './Step2MerchantPageStyles.css';
import React from 'react';
import { useState, useEffect } from 'react';
import CustomDropdown from '../../../../../components/CustomDropdown/CustomDropdown';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet/hooks';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/assets/css/leaflet.css';

export default function Step2MerchantPage() {

  // Options array for the custom dropdown...
  const options = [
    'Guitars',
    'Gears & Accessories',
    'Repair & Maintenance',
    'Customization and Modifications',
    'Cleaning and Refurbishing',
    'Other'
  ];

  const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // State variables...
  const [selectedOption, setSelectedOption] = useState(null);
  const [position, setPosition] = useState(null); // To store user's selected location...

  // Flag variables...
  const [showMapAPI, setShowMapAPI] = useState(false); // Boolean to control rendering

  const setSelected = (name, value) => {
    if (name === 'option') {
      setSelectedOption(value);
    }
  };

  // Redraw map when it's made visible
  function useMapInvalidateSize() {
    const map = useMap();
    useEffect(() => {
      map.invalidateSize(); // Redraw the map
    }, []);
  }

  // Handle the location selection on map click
  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={defaultIcon}></Marker>
    );
  }

  // Search Option Function...
  const SearchField = () => {
    const map = useMap();
  
    React.useEffect(() => {
      const provider = new OpenStreetMapProvider();
  
      const searchControl = new GeoSearchControl({
        provider: provider,
        style: "bar",
        showMarker: true,
        showPopup: false,
        autoClose: true,
        retainZoomLevel: false,
        animateZoom: true,
        keepResult: true,
        searchLabel: 'Enter location...', // Placeholder text
      });
  
      // Add the search control to the map
      map.addControl(searchControl);
  
      // Wait for the DOM to load the search control, then prevent map click propagation
      const searchBar = document.querySelector(".leaflet-control-geosearch form");
  
      if (searchBar) {
        // Use Leaflet's DomEvent to disable event propagation for clicks, mousedown, etc.
        L.DomEvent.disableClickPropagation(searchBar);
        L.DomEvent.disableScrollPropagation(searchBar);
      }
  
      return () => {
        // Clean up event listeners and remove the control from the map
        if (searchBar) {
          L.DomEvent.off(searchBar);
        }
        map.removeControl(searchControl);
      };
    }, [map]);
  
    return null;
  };

  return (
    <div className="step2MerchantPage">
      {showMapAPI && (
        <div>

            {/* Overlay Display */}
            <div id="overlay"></div>

            {/* Main Container for Map */}
            <div id="outerContainer">

                <div id="firstStack">
                    <div id="closeButton">
                        <p onClick={() => setShowMapAPI(false)} id="closeIcon">←</p>
                    </div>  

                    <p id="mainLabel">Add Location</p>
                </div>

                <hr id="dividerLine" />

                {/* Map Container */}
                <div id="mapContainer">
                    <MapContainer
                    center={[51.505, -0.09]}
                    zoom={13}
                    style={{ height: '400px', width: '100%' }}
                    whenCreated={(map) => map.invalidateSize()} // Invalidate size when map is created
                    >
                      {/* Search Bar */}
                      <SearchField />
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <LocationMarker /> {/* Component that allows location selection */}
                    <useMapInvalidateSize /> {/* Ensure map redraws correctly */}
                    </MapContainer>
                </div>

                {/* Third Stack... */}
                <div id="locationLabelText">
                  <p id="locationLabel">Example Location, make this dynamic with JS... </p>
                </div>

                {/* Button Container... */}
                <div id="buttonContainer">
                  <button id="reselectButton">RESELECT</button>
                  <button id="proceedButton">PROCEED</button>
                </div>
            </div>
        </div>
      )}

      <div id="mainContainer">

        {/* Main label */}
        <p id="mainLabel">First, can you provide us some more information about your page?</p>

        {/* Inner Container */}
        <div id="innerContainer">

          {/* Left container */}
          <div id="leftContainer">

            {/* Page Name Input Container */}
            <div id="pageNameContainer">
              <p id="pageNameLabelPrompt">This page will be called...</p>
              <input type="text" id="pageNameInput" placeholder="Guitar Gearz" />
            </div>

            {/* Business/Page Owner Input Container */}
            <div id="pageOwnerNameContainer">
              <p id="pageOwnerNameLabelPrompt">This page/business is owned by...</p>
              <input type="text" id="pageOwnerNameInput" placeholder="John Doe" />
            </div>

            {/* Add Location Button... */}
            <div id="pageLocationContainer">
              <p id="pageLocationLabelPrompt">This business can be found at...</p>
              <button id="pageLocationButton" onClick={() => setShowMapAPI(!showMapAPI)}>Add Location</button>
            </div>
          </div>

          {/* Right container */}
          <div id="rightContainer">

            {/* Type of products/services offered prompt... */}
            <div id="productServicePrompt">
              <p id="productServiceLabelPrompt">What products/services are offered on this page?</p>
              <CustomDropdown
                id="productServiceDropdown"
                options={options}
                selectedValue={selectedOption}
                onChange={(value) => setSelected('option', value)}
                placeholder="--Select an Option--"
              ></CustomDropdown>
            </div>

            {/* Description Field... */}
            <div id="descriptionFieldContainer">
              <p id="descriptionPromptLabel">Description for the page/business...</p>
              <textarea name="descriptionField" id="descriptionField" placeholder="Guitars, guitars, and some more guitars"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
