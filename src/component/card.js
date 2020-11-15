import React from 'react';
import {Card} from 'react-bootstrap'


export default function SimplePaper(props) {


    return(
        <div>
      {Object.keys(props.data).map((v, i)=>{
        console.log(props.data[v].value)
    

    return(
    <Card style={{ width: '25rem' ,display: "inline-block"}}>
    <Card.Body>
    <Card.Title><h1>{v.toUpperCase()}</h1></Card.Title>
      <Card.Subtitle className="mb-2 text-muted"><h2>{props.data[v].value}</h2></Card.Subtitle>
      
     
    </Card.Body>
  </Card>
    )
      })}
    </div>
    )
}





