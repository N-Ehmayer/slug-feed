import React from 'react';
import { CarouselItem, CarouselCaption } from 'mdbreact';


const HomeCarouselItem = props => {
  return (
    <CarouselItem itemId={props.itemId}>
      <div className="view hm-black-light">
        <img className="d-block w-100" style={{objectFit: 'cover'}} height='400px'src={props.article.hero_img_url}/>
        <div className="mask"></div>
      </div>
      <CarouselCaption>
        <h3 className="h3-responsive">{props.article.title}</h3>
        <p>{props.article.tagline}</p>
      </CarouselCaption>
    </CarouselItem>
  );
}

export default HomeCarouselItem;
