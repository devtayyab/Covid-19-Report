import React from 'react'
import axios from 'axios'
const url = 'https://covid19.mathdro.id/api';
async function fetchdata(country){

   
  console.log(url)
  let changeableurl= url;
  if (country) {
    changeableurl = `${url}/countries/${country}`;
  }

  const { data: { confirmed, recovered, deaths } } =await axios.get(changeableurl)
  console.log(confirmed)
    return { confirmed, recovered, deaths }
}
export { fetchdata
}


export const fetchdailydata=async ()=>{

    try{
      const {data} = await axios.get('https://api.covidtracking.com/v1/us/daily.json')
      return data.map(({ positive, recovered, death, dateChecked: date })=>({ confirmed: positive, recovered, deaths: death, date }))
    }
    catch(error){

    return error
}}

export const fetchcountry = async()=>{
    try{
        const {data: {countries} } = await axios.get(`${url}/countries`)
        return countries.map((country)=> country.name)
    }
    catch(error){
      return error
    }
}