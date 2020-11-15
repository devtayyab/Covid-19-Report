import React, { useEffect, useState } from 'react'
import {fetchdailydata} from '../Api/fetch'
import { Line, Bar } from 'react-chartjs-2'

export const Dailydata= ({ data: { confirmed, recovered, deaths }, country })=>{
    const [daily , setdaily] = useState({})

    useEffect(()=>{
        const fetchdaily = async ()=> {
            const intialdata = await fetchdailydata();

            setdaily(intialdata)
        }
        fetchdaily();

    },[])

    const barChart = (
        confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display : false},
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );
      const lineChart = (
        daily[0] ? (
          <Line
            data={{
              labels: daily.map(({ date }) => new Date(date).toLocaleDateString()),
              datasets: [{
                data: daily.map((data) => data.confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: daily.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },  {
                data: daily.map((data) => data.recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );
      return(
          <div style={{position :"relative",maxWidth : "50%"}}>      
               {country ?  lineChart : barChart}
               </div>

      )
}