import React from 'react';

const PlanetDataList = ({ data, children }) => {
    return (
        <div className="planet-data--list__container">
            <div className="specification">
                <h3>{children}</h3>
            </div>
            <div className="planet-data">
                <p>{data}</p>
            </div>
        </div>
    )
}

export default PlanetDataList;
