import React, { Component } from 'react';
import HomeCarouselItem from './HomeCarouselItem.jsx'
import { Carousel, CarouselInner, CarouselControl } from 'mdbreact';

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.numOfArticles = props.articles.length;
    this.state = {
      activeItem: null,
      maxLength: null
    }
  }

  setCarouselLength() {
    this.setState({ maxLength: this.props.articles.length });
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

  componentWillReceiveProps(nextProps) {
  // You don't have to do this check first, but it can help prevent an unneeded render
  if (nextProps.articles.length !== this.state.maxLength) {
    this.setState({ maxLength: nextProps.articles.length });
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
          {this.props.articles.map((article, index) => <HomeCarouselItem key={article.id} article={article} itemId={(index + 1).toString()} />)}
        </CarouselInner>
        <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
        <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
      </Carousel>
    )

  };
};

export default HomeCarousel
