import React from 'react';
import {Card , Button} from 'react-bootstrap'
import {getTestimonials} from '../../httpClient/testimonials'
import './Testimonials.css'
const Testimonials = ()=>{
    const testimonials = getTestimonials()
    return(
    <div className="item-e">
        {testimonials.map(item=>{
            return (<Card bg="dark" text="white"  className="text-center">
                    <Card.Header>Featured Testimonials</Card.Header><br />
                    <Card.Img variant="top" src="https://www.gamersnexus.net/images/media/2012/hardware/cables/cable-mgmt-finished-4.jpg" />
                        <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                        "{item.text}" - {item.customerName}
                        </Card.Text><br /><br />
                        <Button variant="primary">Click Here to Read more Testimonials</Button>
                        </Card.Body>
                    </Card>)
        })}
    </div>)
}
export default Testimonials;