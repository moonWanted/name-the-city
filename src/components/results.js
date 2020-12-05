import React from 'react';

const Results = ({ citiesNumber, population }) => {
    return (
        <div class="card-panel grey darken-4">
        <span class="white-text">
            Your result {citiesNumber} cities with total population {population}
        </span>
        <p>
        <span class="white-text">Try to continue and find all 100 most populated European cities</span>
        </p>
      </div>
    )
}

export default Results;