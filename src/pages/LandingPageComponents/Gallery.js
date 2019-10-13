import React from 'react';
import { Carousel } from 'react-bootstrap';
import {getGalleryItems} from '../../httpClient/gallery'
import './Gallery.css'

const Gallery = ()=>{
    const galleryItems = getGalleryItems()
    return <div className="item-c">
          <Carousel style={{height:'100%'}}>
            {galleryItems.map(item=>{
              return (<Carousel.Item >
                <img
                  className="d-block w-100"
                  src={item.src}
                  alt={item.alt}
                />
                <Carousel.Caption>
                  <h3>{item.hText}</h3>
                  <p>{item.pText}</p>
                </Carousel.Caption>
              </Carousel.Item>)
            })}
          </Carousel>
        </div>
}
export default Gallery;