import React, { Component } from 'react';
import HomeCarouselItem from './HomeCarouselItem.jsx'
import { Carousel, CarouselInner, CarouselControl } from 'mdbreact';

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 8,
      maxLength: 8
    };
  }

  next() {
    const nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    const prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render() {
    if (!this.props.articles.length) { return false; }
    return (
      <Carousel
        activeItem={this.state.activeItem}
        next={this.next}
        className="z-depth-1 black">
        <CarouselInner>
          {this.props.articles.map((article, index) => <HomeCarouselItem key={index} article={article} itemId={(index + 1).toString()} />)}
        </CarouselInner>
        <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
        <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
      </Carousel>
    )
  };
};

export default HomeCarousel
