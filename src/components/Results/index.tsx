const Results = ({ citiesNumber, population }: {citiesNumber: number, population: number}) => {
    return (
        <div className="card-panel grey darken-4">
        <span className="white-text">
            Your result {citiesNumber} cities with total population {population}
        </span>
        <p>
        <span className="white-text">Try to continue and find all 100 most populated European cities</span>
        </p>
      </div>
    )
}

export default Results;