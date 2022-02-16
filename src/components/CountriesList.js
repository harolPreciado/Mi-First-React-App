import { useEffect, useState } from "react";
import Country from "./Country";

function CountriesList(){
    const [listCountries, setlistCountries] = useState([])
    
    const callApi = async()=>{
        try{
            const res = await fetch("https://restcountries.com/v2/all")
            const result = await res.json()
            return result
        }catch(error){
            throw "Ocurrio un error con fetch"
        }
    }

    useEffect(async()=>{
        const ListaPaises = await callApi()
        setlistCountries([...listCountries,...ListaPaises])
    },[])

    const content = listCountries.length == 0 ? <p>Loading Countries</p> : listCountries.map((country, i)=> <Country key={i} flag={country.flags.png} name={country.name} capital={country.capital}/>)
    return(
        <div>
            {content}
        </div>
    )
}
export default CountriesList;