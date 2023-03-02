import { Link } from "react-router-dom"

function NavBar(props) {
    
    const {allCountries} = props

  return (
    <div>
    
    <h1>LAB-WikiCountries</h1>

    {allCountries.map((eachCountry)=>{
        return (
            <Link key={eachCountry.alpha3Code} to={`/${eachCountry.alpha3Code}`}>
                <p>{eachCountry.name.common} {eachCountry.alpha3Code}</p>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="" />

            </Link>
            
        )
    })}

    </div>
  )
}

export default NavBar