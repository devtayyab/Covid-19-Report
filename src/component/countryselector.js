import React, { useEffect, useState } from 'react';
import {fetchcountry} from '../Api/fetch'
import { NativeSelect, FormControl } from '@material-ui/core';

export const Countryselector = ({handleCountryChange}) =>{

    const [countries ,setcountry] = useState([]);

    useEffect(()=>{
        const  fetchApi = async ()=>{
            setcountry(await fetchcountry());
        }
        fetchApi();
    },[])
    
    return (
        <FormControl>
          <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">United States</option>
            {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
          </NativeSelect>
        </FormControl>
      );
    };
