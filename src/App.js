import React, { useState,useEffect } from 'react'
import {fetchdata} from './Api/fetch'
import SimplePaper from './component/card'
import {Countryselector} from './component/countryselector'
import {Dailydata} from './component/chart'
import './App.css'
import img from './assets/images.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
function App (){
  const [data ,setdata] = useState({});
  const [country ,setcountry] = useState('');
  useEffect(()=>{
    
    async  function getdata(){
    
      const result= await fetchdata()
      
      setdata(result)
    }
    getdata()
    
    
    
    },[]);
    const handlechange =  async (country) =>{
      const result = await fetchdata(country)
      setdata(result)
      setcountry(country)
    }

    console.log(data)
    return(
  <div className="App">
    <img src={img} style={{width:"100%" , height:"150px"}}></img>
  <SimplePaper data={data}></SimplePaper>
  <h1 style={{textAlign: "center", color: "Blue"}}>Select Country</h1>
  <Countryselector handleCountryChange={handlechange} />
   <Dailydata data={data} country={country} />         

  </div>
    )
      
}
    export default App;

 