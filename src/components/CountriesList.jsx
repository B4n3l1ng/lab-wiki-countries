import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function CountriesList() {

    const [countriesArray, setCountriesArray] = useState([]);

    useEffect(() => {

        fetch('https://ih-countries-api.herokuapp.com/countries')
          .then(res => res.json())
          .then(json => setCountriesArray(json))

          
      }, [])

    return(

        <div className="container">
            <div className="row">
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group"> 
      {countriesArray.length === 0 && <p>Loading...</p>}
      {countriesArray.map(singleCountry => {
        return (
          <div key={singleCountry._id} className="list-group-item list-group-item-action">
            <Link to={`/country-details/${singleCountry.alpha3Code}`}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${singleCountry.alpha2Code.toLowerCase()}.png`} alt={singleCountry.name.common} height={50}/>
              <h3>{singleCountry.name.common}</h3>
            </Link>
          </div>
        );
      })}
      </div>
      </div>
      </div>
    </div>

    )

}



export default CountriesList
