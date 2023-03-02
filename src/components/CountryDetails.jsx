import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

function CountryDetails() {

    const params = useParams()
    // console.log(params.id);

    const [countryDetail, setCountryDetail] = useState(null)

    useEffect(()=>{
        getData()
    }, [params.id])

    const getData = async () =>{
        try {
          const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.id}`)
          console.log(response);
          setCountryDetail(response)
        } catch (error) {
          console.log(error);
        }
      }

      if (countryDetail === null) {
        return <h3>... app is searching the country</h3>
      }

    //   console.log(countryDetail);

    


  return (
    <div>
    
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.data.alpha2Code.toLowerCase()}.png`} alt="flag" />
        <h3>{countryDetail.data.name.common}</h3>
        <h4>{countryDetail.data.area} Km2</h4>
        {/* <h4>{countryDetail.data.borders}</h4> */}
        <ul>
            {countryDetail.data.borders.map((eachBorder)=>{
                return (
                    <li key={eachBorder}>{eachBorder}</li>
                )
            })}
        </ul>

    </div>
  )
}

export default CountryDetails