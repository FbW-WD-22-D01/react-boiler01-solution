import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function CardComponent ({info}) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={info.image} />
      <Card.Body>
        <Card.Title>{info.header}</Card.Title>
        <Card.Text>
         {info.content}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>   
  )
}
