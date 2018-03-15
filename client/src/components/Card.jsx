import React, { Component } from 'react';

class Card extends Component {

    render() {

        const { articles } = this.props

        return (
          <div>
            {articles.map(article =>
              <h2>{article.title}</h2>
            )}
          </div>
        );
    }
}

export default Card
