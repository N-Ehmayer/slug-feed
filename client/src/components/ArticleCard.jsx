import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact';

class ArticleCard extends Component {

  render() {
    const articles = this.props.articles.map((article) => {
      return (
        <Card key={article.id} className="col-5 mx-auto" >
          <div className="view-card">
            <Link to={`/articles/${article.id}`}>
              <div
                className="card-img h-100"
                style={ { backgroundImage: 'url(' + article.hero_img_url + ')'} }
              />
            </Link>
          </div>
          <Link to={`/articles/${article.id}`}>
          <CardBody>
            <CardTitle>{article.title}</CardTitle>
            <CardText>{article.tagline}</CardText>
            <p>Read more...</p>
            <footer className="footer">
            </footer>
          </CardBody>
          </Link>
        </Card>
      )
    })
    return (
      <div className="row">
        {articles}
      </div>
    );
  }
}

export default ArticleCard
