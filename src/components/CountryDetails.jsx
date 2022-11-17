import { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';


function CountryDetails(props) {

    const { countryCode } = useParams();

    console.log(countryCode)

    const [countryDetailsObject, setCountryDetailsObject] = useState(null);


    console.log(countryDetailsObject)
    useEffect(() => {

        fetch(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
          .then(res => res.json())
          .then(json => setCountryDetailsObject(json))

          
      }, [countryCode])

    return(
        <div className="col-7">
      { countryDetailsObject ? (
        <div>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetailsObject.alpha2Code.toLowerCase()}.png`} alt={countryDetailsObject.title} height={100}/>
          <h1>{countryDetailsObject.name.common}</h1>
          <table class="table">
          <thead></thead>
          <tbody>
            <tr>
                <td style={{width:"30%"}}>Capital</td>
                <td>{countryDetailsObject.capital[0]}</td>
            </tr>
            <tr>
                <td>Area</td>
                <td>{countryDetailsObject.area} km<sup>2</sup></td>
            </tr>
            <tr>
                <td>Borders</td>
                <td>
                    <ul>
                         {countryDetailsObject.borders.map(singleCountry => {
                            return ( <li key={singleCountry}><Link to ={`/country-details/${singleCountry}`}>{singleCountry}</Link></li>) })}
                    </ul>
                </td>
            </tr>         
        </tbody>
     </table>
        </div>
      ) : (
        <p>loading...</p>
      ) }
    </div>
    )

}



export default CountryDetails